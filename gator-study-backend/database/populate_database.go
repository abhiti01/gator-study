package database

import (
	"golang.org/x/crypto/bcrypt"
	"log"
	"misc/models"
	"strconv"
)

func PopulateGroups() {
	const GroupCount int = 4
	var Id = [GroupCount]int{0, 1, 2, 3}
	var Name = [GroupCount]string{"Business", "Architecture", "Computer Science", "Arts"}
	var Moderator = [GroupCount]string{"Akshat", "Naman", "Abhiti", "Yagya"}
	var capacity = [GroupCount]int{30, 30, 30, 30}
	var descriptions = [GroupCount]string{
		"The main aim of this study group is to create an atmosphere where students can learn about Business. Students can use chat to ask doubts. No tolerance on sexual or racist comments.",
		"The main aim of this study group is to create an atmosphere where students can learn about Architecture. Students can use chat to ask doubts. No tolerance on sexual or racist comments.",
		"The main aim of this study group is to create an atmosphere where students can learn about Computer Science. Students can use chat to ask doubts. No tolerance on sexual or racist comments.",
		"The main aim of this study group is to create an atmosphere where students can learn about Arts. Students can use chat to ask doubts. No tolerance on sexual or racist comments.",
	}
	var imagepath = [GroupCount]string{
		"img/group/Business.jpg",
		"img/group/Architecture.jpg",
		"img/group/Computer Science.jpg",
		"img/group/Arts.jpg",
	}

	var Group []models.Group

	for i := 0; i < GroupCount; i++ {
		Group = append(Group, models.Group{
			Id:          Id[i],
			Name:        names[i],
			Description: descriptions[i],
			Moderator:   Moderator[i],
			Capacity:    Capacity[i],
			ImagePath:   imagepath[i],
		})
	}
	DB.Create(&Group)
	log.Println(result.Error, result.RowsAffected)
}

func populateUsers() {
	const usercount int = 10
	var Id = [usercount]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	var names = [usercount]string{"Akshat", "Naman", "Abhiti", "Yagya", "Alex", "Brady", "Charlie", "Daanish", "Ely", "Furgason"}

	var emails = [usercount]string{"Akshat@gmail.com", "Naman@gmail.com", "Abhiti@gmail.com", "Yagya@gmail.com", "Alex@gmail.com", "Brady@gmail.com", "Charlie@gmail.com", "Daanish@gmail.com", "Ely@gmail.com", "Furgason@gmail.com"}
	var default_password = "password"
	var users = []models.User{}

	for i := 0; i < usercount; i++ {
		password := []byte(default_password + "" + strconv.Itoa(i+1))
		hash, _ := bcrypt.GenerateFromPassword(password, config.PasswordCost)

		users = append(users, models.User{
			Id:       uint(Id[i]),
			Email:    emails[i],
			Password: hash,
		})
	}
	result := DB.Create(&users)
	log.Println(result.Error, result.RowsAffected)
}