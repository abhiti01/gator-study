package models

type User struct {
	Id        uint
	Name      string
	Email     string
	Password  []byte `json:"-"`
	GroupName string
}

type Group struct {
	Id          string
	Name        string
	Description string
	Moderator   string
	Capacity    string
	ImagePath   string
}
