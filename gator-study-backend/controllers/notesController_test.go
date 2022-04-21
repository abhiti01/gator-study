package controllers

import (
	"bytes"
	"github.com/gofiber/fiber/v2"
	"github.com/stretchr/testify/assert"
	"net/http"
	"testing"
)

func TestAddNotesWhenSuccess(t *testing.T) {
	var data = []byte(`{
    "email":"naman.bhatia@gmail.com",
    "notes": "This group is made for computer science discussion, all chat should be computer science related",
}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/api/addNotes", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Handler Returned a wrong status code")
	}

	assert.Equal(t, fiber.StatusOK, response.StatusCode)
}

func TestAddNotesWhenFailure(t *testing.T) {
	var data = []byte(`{
    "email":"naman.bhatia@gmail.com",
    "notes": "This group is made for computer science discussion, all chat should be computer science related",
}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/api/addNotes", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Handler Returned a wrong status code")
	}

	assert.Equal(t, fiber.StatusInternalServerError, response.StatusCode)
}
