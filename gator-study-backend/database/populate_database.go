package database

import (
	"backend/models"
	"log"
	"strconv"

	"golang.org/x/crypto/bcrypt"
)

func PopulateGroups(){
	const teachercount int = 4
	var Id = [teachercount]int{0,1,2,3}
	var Name = [teachercount]string{"Business", "Architecture", "Computer Science", "Arts"}
	var Moderator = [teachercount]string{"Akshat", "Naman", "Abhiti", "Yagya"}
	var capacity = [teachercount]int{30,30,30,30}
	var descriptions = [teachercount]string{
		"The main aim of this study group is to create an atmosphere where students can learn about Business. Students can use chat to ask doubts. No tolerance on sexual or racist comments.",
		"The main aim of this study group is to create an atmosphere where students can learn about Architecture. Students can use chat to ask doubts. No tolerance on sexual or racist comments.",
		"The main aim of this study group is to create an atmosphere where students can learn about Computer Science. Students can use chat to ask doubts. No tolerance on sexual or racist comments.",
		"The main aim of this study group is to create an atmosphere where students can learn about Arts. Students can use chat to ask doubts. No tolerance on sexual or racist comments.",
	}
	var imagepath = [teachercount]string{
		"img/group/Business.jpg",
		"img/group/Architecture.jpg",
		"img/group/Computer Science.jpg",
		"img/group/Arts.jpg",
	}

	var teachers []models.Teacher

	for i := 0; i < teachercount; i++ {
		teachers = append(teachers, models.Teacher{
			Id:				  Id[i]
			Name:             names[i],
			Description:      descriptions[i],
			Moderator:		  Moderator[i],
			Capacity:		  Capacity[i],
			ImagePath:        imagepath[i],
		})
	}
	DB.Create(&teachers)
	log.Println(result.Error, result.RowsAffected)  
}
