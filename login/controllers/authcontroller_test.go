package controllers

import (
	"bytes"
	"github.com/gofiber/fiber/v2"
	"github.com/stretchr/testify/assert"
	"misc/models"
	"net/http"
	"testing"
)

func TestLoginWhenPassWordInCorrect(t *testing.T) {
	var data = []byte(`{
		"email": "naman.bhatia@gmail.com",
		"password": "1"
	}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/api/login", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Handler Returned a wrong status code")
	}

	assert.Equal(t, fiber.StatusNotFound, response.StatusCode)
}
func TestLoginWhenPassWordCorrect(t *testing.T) {
	var data = []byte(`{
		"email": "naman.bhatia@gmail.com",
		"password": "1234"
	}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/api/login", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Handler Returned a wrong status code")
	}

	assert.Equal(t, fiber.StatusOK, response.StatusCode)
}

func TestRegisterWhenSuccess(t *testing.T) {
	var data = []byte(`{
		"name" : "Naman"
		"email": "naman.bhatia@gmail.com",
		"password": "1234"
	}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/api/register", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Handler Returned a wrong status code")
	}

	assert.Equal(t, fiber.StatusOK, response.StatusCode)
}

func TestRegisterWhenFailure(t *testing.T) {
	var data = []byte(`{
		"name" : "Naman"
		"email": "naman.bhatia@gmail.com",
		"password": "1234"
	}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/api/register", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Handler Returned a wrong status code")
	}

	assert.Equal(t, fiber.StatusInternalServerError, response.StatusCode)
}

func TestLogoutWhenFailure(t *testing.T) {
	var data = []byte(`{}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/api/Logout", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Handler Returned a wrong status code")
	}

	assert.Equal(t, fiber.StatusInternalServerError, response.StatusCode)
}

func TestLogoutWhenSuccess(t *testing.T) {
	var data = []byte(`{}`)

	app := fiber.New()

	req, _ := http.NewRequest("POST", "/api/Logout", bytes.NewBuffer(data))

	response, err := app.Test(req)

	if err != nil {
		t.Errorf("Handler Returned a wrong status code")
	}

	assert.Equal(t, fiber.StatusOK, response.StatusCode)
}
func TestRegisterUser(t *testing.T) {
	user := models.User{
		Name:     "test",
		Email:    "test@gmail.com",
		Password: []byte("123")}
	if models.Register(user) == 0 {
		t.Error("result is wrong!")
	} else {
		t.Log("result is right")
	}
}
