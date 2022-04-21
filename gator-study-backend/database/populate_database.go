package database

import (
	"golang.org/x/crypto/bcrypt"
	"log"
	"misc/models"
	"strconv"
)

func PopulateGroups() {
	const groupcount int = 4
	var Id = [groupcount]int{0, 1, 2, 3}
	var names = [groupcount]string{"AOA", "DOSP", "Java", "Python"}
	var Moderator = [groupcount]string{"Akshat", "Naman", "Abhiti", "Yagya"}
	var Capacity = [groupcount]int{30, 30, 30, 30}
	var descriptions = [groupcount]string{
		"The main aim of this study group is to create an atmosphere where students can learn about AOA. Students can use chat to ask doubts. No tolerance on sexual or racist comments.",
		"The main aim of this study group is to create an atmosphere where students can learn about DOSP. Students can use chat to ask doubts. No tolerance on sexual or racist comments.",
		"The main aim of this study group is to create an atmosphere where students can learn about Java. Students can use chat to ask doubts. No tolerance on sexual or racist comments.",
		"The main aim of this study group is to create an atmosphere where students can learn about Python. Students can use chat to ask doubts. No tolerance on sexual or racist comments.",
	}
	var imagepath = [groupcount]string{
		"icons/AOA.png",
		"icons/DOSP.png",
		"icons/Java.png",
		"icons/Python.png",
	}

	var groups []models.Group

	for i := 0; i < groupcount; i++ {
		groups = append(groups, models.Group{
			Id:          strconv.Itoa(Id[i]),
			Name:        names[i],
			Description: descriptions[i],
			Moderator:   Moderator[i],
			Capacity:    strconv.Itoa(Capacity[i]),
			ImagePath:   imagepath[i],
		})
	}
	result := DB.Create(&groups)
	log.Println(result.Error, result.RowsAffected)
}

func populateUsers() {
	const usercount int = 10
	var names = [usercount]string{"Akshat", "Naman", "Abhiti", "Yagya", "Alex", "Brady", "Charlie", "Daanish", "Ely", "Furgason"}

	var emails = [usercount]string{"Akshat@gmail.com", "Naman@gmail.com", "Abhiti@gmail.com", "Yagya@gmail.com", "Alex@gmail.com", "Brady@gmail.com", "Charlie@gmail.com", "Daanish@gmail.com", "Ely@gmail.com", "Furgason@gmail.com"}
	var default_password = "password"
	var users = []models.User{}

	for i := 0; i < usercount; i++ {
		password := []byte(default_password + "" + strconv.Itoa(i+1))
		hash, _ := bcrypt.GenerateFromPassword(password, 10)

		users = append(users, models.User{
			Name:     names[i],
			Email:    emails[i],
			Password: hash,
		})
	}
	result := DB.Create(&users)
	log.Println(result.Error, result.RowsAffected)
}
