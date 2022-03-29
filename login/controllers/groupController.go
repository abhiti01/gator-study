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
