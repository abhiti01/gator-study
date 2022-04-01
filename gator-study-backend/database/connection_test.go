package database

import (
	"github.com/jinzhu/gorm"
	"testing"
)

func TestConnect(t *testing.T) {

	_, err := gorm.Open("sqlite3", "users.db")

	if err != nil {
		t.Errorf("Connection to DB Failed")
	}

}
