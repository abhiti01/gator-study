package models

type User struct {
	Id       uint
	Name     string
	Email    string
	Password []byte `json:"-"`
}

type Group struct {
	Id          string
	Name        string
	Description string
	Moderator   string
	Capacity    string
}
type UserGroup struct {
	UserId  []uint
	GroupId uint
}
