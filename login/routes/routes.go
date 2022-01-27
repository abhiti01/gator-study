package routes

import (
	"github.com/gofiber/fiber/v2"
	"misc/controllers"
)

func Setup(app *fiber.App) {
	app.Post("/api/register", controllers.Register)
	app.Post("/api/login", controllers.Login)
	app.Get("/api/User", controllers.User)
	app.Post("/api/Logout", controllers.Logout)
}
