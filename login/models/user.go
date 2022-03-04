package models

import (
	"fmt"
	"misc/database"
)

type User struct {
	Id       uint
	Name     string
	Email    string
	Password []byte `json:"-"`
}

func Register(user User) int64 {
	result := database.DB.Create(user)
	return result.RowsAffected
}
func Login(user User) bool {
	err := database.DB.Where("username = ? AND password = ?", user.Email, user.Password).Find(&user).RecordNotFound()
	fmt.Println(err)
	return err
}
