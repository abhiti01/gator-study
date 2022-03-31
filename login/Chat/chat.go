package Chat

import (
	"github.com/gofiber/fiber/v2"
	"github.com/pusher/pusher-http-go"
)

func ChatBot(c *fiber.Ctx) error {

	pusherClient := pusher.Client{
		AppID:   "1356434",
		Key:     "8505d5a21a4e9849578d",
		Secret:  "6294982513d26ca1fd82",
		Cluster: "us2",
		Secure:  true,
	}
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	pusherClient.Trigger("Maths", "message", data)

	return c.JSON([]string{})
}
