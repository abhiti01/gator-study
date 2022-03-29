package database

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"misc/models"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(sqlite.Open("database.db"), &gorm.Config{})

	if err != nil {
		panic("could not connect to the database")
	}
	DB = connection

	err = connection.AutoMigrate(
		&models.User{},
		&models.Group{},
		&models.UserGroup{},
	)

	if err != nil {
		return
	}

}
