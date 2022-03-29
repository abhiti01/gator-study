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
func AddUserToGroup(c *fiber.Ctx) error {
    var data map[string]string // string as a key and string as a value
    err := c.BodyParser(&data)

    if err != nil {
        return err
    }
    userId, err1 := strconv.Atoi(data["UserID"])
    groupId, err2 := strconv.Atoi(data["GroupID"])

    if err1 != nil || err2 != nil {
        return fiber.NewError(fiber.StatusInternalServerError, "Data Validation failed. Invalid user or group.")
    }

    userId := uint(userId)
    groupId := uint(groupId)

    userGroup := models.UserGroup{}
    database.DB.First(&userGroup, groupId)

    userGroup.UserId = append(userGroup.UserId, userId)

    res := database.DB.Save(&userGroup)
    if res.Error != nil {
        fiber.NewError(fiber.StatusInternalServerError, "Group could not be updated.")
    }
    return c.JSON(userGroup)
}
