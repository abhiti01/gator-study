package database

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open("sqlite3", "users")

	if err != nil {
		panic("could not connect to the database")
	}
	DB = connection
}
