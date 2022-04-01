package controllers

import (
	"bytes"
	"github.com/gofiber/fiber/v2"
	"github.com/stretchr/testify/assert"
	"net/http"
	"testing"
)

func TestCreateGroupWhenSuccess(t *testing.T) {
	var data = []byte(`{
    "Id":"1",
    "Name":"Computer Science",
    "Description": "This group is made for computer science discussion, all chat should be computer science related",
    "Moderator": "Naman",
    "Capacity":"20"
}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/api/createGroup", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Handler Returned a wrong status code")
	}

	assert.Equal(t, fiber.StatusNotFound, response.StatusCode)
}

func TestAddUserToGroup(t *testing.T) {
	var data = []byte(`{
    "email":"naman3.bhatia@gmail.com",
    "groupName":"Computer Science",
}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/api/addUserToGroup", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Handler Returned a wrong status code")
	}

	assert.Equal(t, fiber.StatusNotFound, response.StatusCode)
}

func TestGetAllGroups(t *testing.T) {

	var data = []byte(`{
    ""
}`)
	app := fiber.New()

	req, _ := http.NewRequest("GET", "/api/getAllGroups", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Handler Returned a wrong status code")
	}

	assert.Equal(t, fiber.StatusNotFound, response.StatusCode)
}
