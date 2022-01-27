package database

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"misc/models"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(mysql.Open("root:Raipur@Satna12345@/loginpage"), &gorm.Config{})

	if err != nil {
		panic("could not connect to the database")
	}
	DB = connection
	connection.AutoMigrate(&models.User{})

}
