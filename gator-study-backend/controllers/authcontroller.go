package controllers

import (
	"github.com/dgrijalva/jwt-go/v4"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
	"misc/database"
	"misc/models"
	"strconv"
	"time"
)

const KeySecret = "secret"

func Register(c *fiber.Ctx) error {
	var data map[string]string // string as a key and string as a value
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}
	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
	user := models.User{
		Name:     data["name"],
		Email:    data["email"],
		Password: password,
		Avatar:   data["Avatar"],
	}

	result := database.DB.Create(&user)

	if result.Error != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "User could not be added",
		})
	}
	return c.JSON(user)
}

func Login(c *fiber.Ctx) error {
	var data map[string]string // string as a key and string as a value
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}
	var user models.User
	database.DB.Where("email= ?", data["email"]).First(&user)
	if user.Id == 0 {
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"message": "user not found",
		})
	}
	if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err != nil {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"message": "incorrect password",
		})
	}

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer: strconv.Itoa(int(user.Id)),
	})

	token, err := claims.SignedString([]byte(KeySecret))

	if err != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "user could not login",
		})
	}

	cookie := fiber.Cookie{
		Name:     "cook",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24),
		HTTPOnly: true,
	}

	c.Cookie(&cookie)
	return c.JSON(fiber.Map{
		"message": "success",
	})

}
func User(c *fiber.Ctx) error {
	cookie := c.Cookies("cook")

	token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(KeySecret), nil

	})

	if err != nil {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "User unauthenticated",
		})
	}

	claims := token.Claims.(*jwt.StandardClaims)

	var user models.User
	database.DB.Where("id=?", claims.Issuer).First(&user)
	return c.JSON(user)
}

func Logout(c *fiber.Ctx) error {
	cookie := fiber.Cookie{
		Name:     "cook",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HTTPOnly: true,
	}

	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"message": "success ",
	})
}
