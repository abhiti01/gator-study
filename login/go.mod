// Module misc contains tests and binaries that pertain to specific build modes
// (cgo) and platforms (Android and iOS).
//
// The 'run' scripts in ../src execute these tests and binaries, which need to
// be in a module in order to build and run successfully in module mode.
// (Otherwise, they lack well-defined import paths, and module mode — unlike
// GOPATH mode — does not synthesize import paths from the absolute working
// directory.)
module misc

go 1.12

require (
	github.com/dgrijalva/jwt-go/v4 v4.0.0-preview1
	github.com/go-sql-driver/mysql v1.6.0 // indirect
	github.com/gofiber/fiber/v2 v2.24.0
	github.com/jinzhu/gorm v1.9.16
	github.com/pusher/pusher-http-go v4.0.1+incompatible
	github.com/stretchr/testify v1.7.0
	golang.org/x/crypto v0.0.0-20220112180741-5e0467b6c7ce
	gorm.io/driver/sqlite v1.3.1
	gorm.io/gorm v1.23.3
)
