package Chat

import (
	"github.com/gofiber/fiber/v2"
	"github.com/pusher/pusher-http-go"
)

func ChatBot(c *fiber.Ctx) error {

	pusherClient := pusher.Client{
		AppID:   "1356401",
		Key:     "ce23e1833b88fb9cb808",
		Secret:  "5f3756c43296810ebaed",
		Cluster: "us2",
		Secure:  true,
	}
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	pusherClient.Trigger("chat", "message", data)

	return c.JSON([]string{})
}
