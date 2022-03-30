package controllers

import (
	"github.com/gofiber/fiber/v2"
	"misc/database"
	"misc/models"
	"strconv"
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
	userGroup := models.UserGroup{
		UserId:  "",
		GroupId: data["Id"],
	}

	result := database.DB.Create(&group)
	result2 := database.DB.Create(&userGroup)

	if result.Error != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "Group could not be created",
		})
	}
	if result2.Error != nil {
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

	userId_ := strconv.Itoa(userId)
	groupId_ := strconv.Itoa(groupId)

	userGroup := models.UserGroup{}

	res := database.DB.Where("group_id = ?", groupId_).First(&userGroup)

	userGroup.UserId = userGroup.UserId + "," + userId_

	res = database.DB.Save(&userGroup)
	if res.Error != nil {
		fiber.NewError(fiber.StatusInternalServerError, "Group could not be updated.")
	}
	return c.JSON(userGroup)
}
func GetAllGroups(c *fiber.Ctx) error {

	var userGroups []models.UserGroup
	res := database.DB.Find(&userGroups)

	if res.Error != nil {
		fiber.NewError(fiber.StatusInternalServerError, "Group could not be updated.")
	}
	return c.JSON(userGroups)
}
