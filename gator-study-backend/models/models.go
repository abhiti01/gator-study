package models

type User struct {
	Id        int
	Name      string
	Email     string
	Password  []byte `json:"-"`
	GroupName string
	UserNotes string
	Avatar	  string
}

type Group struct {
	Id          string
	Name        string
	Description string
	Moderator   string
	Capacity    string
	ImagePath   string
}
