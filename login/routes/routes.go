package routes

import (
	"github.com/gofiber/fiber/v2"
	"misc/chat"
	"misc/controllers"
)

func Setup(app *fiber.App) {
	app.Post("/api/register", controllers.Register)
	app.Post("/api/login", controllers.Login)
	app.Get("/api/User", controllers.User)
	app.Post("/api/Logout", controllers.Logout)
	app.Post("/api/messages", Chat.ChatBot)
	app.Post("/api/createGroup", controllers.CreateGroup)
	app.Post("/api/AddUserToGroup", controllers.AddUserToGroup)
	app.Get("/api/getAllGroups", controllers.GetAllGroups)
}
