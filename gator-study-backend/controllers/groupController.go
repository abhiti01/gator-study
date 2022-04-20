package controllers

import (
	"github.com/gofiber/fiber/v2"
	"misc/database"
	"misc/models"
)

func CreateGroup(c *fiber.Ctx) error {
	var data map[string]string // string as a key and string as a value
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}
	group := models.Group{
		Id:          data["Id"],
		Name:        data["Name"],
		Description: data["Description"],
		Moderator:   data["Moderator"],
		Capacity:    data["Capacity"],
		ImagePath:   data["ImagePath"],
	}

	result := database.DB.Create(&group)

	if result.Error != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "Group could not be created",
		})
	}
	return c.JSON(group)
}
func AddUserToGroup(c *fiber.Ctx) error {
	var data map[string]string // string as a key and string as a value
	err := c.BodyParser(&data)

	if err != nil {
		return err
	}

	updatedUser := models.User{}
	email := data["email"]
	groupName := data["groupName"]

	res := database.DB.Where("email = ?", email).First(&updatedUser)

	updatedUser.GroupName = groupName

	res = database.DB.Save(&updatedUser)
	if res.Error != nil {
		fiber.NewError(fiber.StatusInternalServerError, "Group could not be updated.")
	}
	return c.JSON(updatedUser)
}
func GetAllGroups(c *fiber.Ctx) error {

	var groups []models.Group
	res := database.DB.Find(&groups)

	if res.Error != nil {
		fiber.NewError(fiber.StatusInternalServerError, "Group could not be updated.")
	}
	return c.JSON(groups)
}
