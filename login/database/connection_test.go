package database

import (
	"github.com/jinzhu/gorm"
	"testing"
)

func TestConnection(t *testing.T) {

	_, err := gorm.Open("sqlite3", "users")

	if err != nil {
		t.Errorf("Connection to DB Failed")
	}

}
