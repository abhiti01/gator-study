// package test

// import (
// 	"misc/models"
// 	"testing"
// )

// func TestRegisterUser(t *testing.T) {
// 	user := models.User{
// 		Name:     "test",
// 		Email:    "test@gmail.com",
// 		Password: []byte("123")}
// 	if models.Register(user) == 0 {
// 		t.Error("result is wrong!")
// 	} else {
// 		t.Log("result is right")
// 	}
// }