package controllers

import (
	"github.com/gofiber/fiber/v2"
	"misc/database"
	"misc/models"
)

func AddNotes(c *fiber.Ctx) error {
	var data map[string]string // string as a key and string as a value
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}

	updatedUser := models.User{}
	userEmail := data["email"]
	userNotes := data["notes"]

	res := database.DB.Where("email = ?", userEmail).First(&updatedUser)

	updatedUser.UserNotes = userNotes

	res = database.DB.Save(&updatedUser)
	if res.Error != nil {
		fiber.NewError(fiber.StatusInternalServerError, "Group could not be updated.")
	}
	return c.JSON(updatedUser)
}
