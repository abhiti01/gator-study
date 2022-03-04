package controllers

import (
	"misc/models"
	"testing"
)

//
//import (
//	"bytes"
//	"github.com/gofiber/fiber/v2"
//	"github.com/stretchr/testify/assert"
//	"net/http"
//	"testing"
//)
//
//func TestLoginWhenPassWordInCorrect(t *testing.T) {
//	var data = []byte(`{
//		"email": "naman.bhatia@gmail.com",
//		"password": "1234"
//	}`)
//
//	app := fiber.New()
//
//	req, _ := http.NewRequest("POST", "/api/login", bytes.NewBuffer(data))
//
//	response, err := app.Test(req)
//
//	if err != nil {
//		t.Errorf("Handler Returned a wrong status code")
//	}
//
//	assert.Equal(t, fiber.StatusNotFound, response.StatusCode)
//}
//
func TestRegisterUser(t *testing.T) {
	user := models.User{
		Name:     "test",
		Email:    "test@gmail.com",
		Password: []byte("123")}
	if models.Register(user) == 0 {
		t.Error("result is wrong!")
	} else {
		t.Log("result is right")
	}
}

//
////type AppHandlerFake struct {
////	// method name -> call -> params
////	Calls map[string][][]interface{}
////}
////
////func (a *AppHandlerFake) Register(c fiber.Ctx) () {
////	b := a.Calls[Register]
////	c := []interface{}{x, y}
////	a.Calls[Register] = append(b, c)
////	return
////}
////
////func (a *AppHandlerFake) Multiply(x, y int) (r Result) {
////	b := a.Calls[multiplyMethodName]
////	c := []interface{}{x, y}
////
////	a.Calls[multiplyMethodName] = append(b, c)
////
////	r.Value = 10
////	return
////}
////
////func TestApp(t *testing.T) {
////
////	app := fiber.New()
////
////	ctx := fiber.Ctx{}
////
////	// Create our test table
////	testTable := []struct {
////		// The name of the test
////		name string
////		// The HTTP method to use in our call
////		method string
////		// The URL path that is being requested
////		path string
////		// The expected response status code
////		statusCode int
////		// The expected response body, as string
////		body string
////		// The request body to sent with the request
////		requestBody map[string]interface{}
////		// The name of the AppHandlerFake method that we want to spy on
////		handlerMethodName string
////		// The parameters we expect the 'handlerMethodName' on the AppHandlerFake to be called with
////		handlerToBeCalledWith []interface{}
////		// The headers that are being set for the request
////		requestHeaders map[string]string
////		// The response headers we want to test on
////		headers map[string]string
////	}{
////		{
////			name:                  `POST endpoint to register`,
////			method:                http.MethodPost,
////			path:                  `/api/register`,
////			statusCode:            200,
////			requestBody:           nil,
////			body:                  `{"name": "yyyzzzz","email": "yyyzzzz@gmail.com","password": "123456666"}`,
////			handlerMethodName:     Register(&ctx),
////			handlerToBeCalledWith: []interface{}{5, 2},
////			headers:               map[string]string{`Content-Type`: `application/json`},
////		},
////		{
////			name:       `POST endpoint to multiply, wrong header`,
////			method:     http.MethodPost,
////			path:       `/multiply`,
////			statusCode: 400,
////			requestBody: map[string]interface{}{
////				"x": 2,
////				"y": 3,
////			},
////			body:           `Invalid payload`,
////			requestHeaders: map[string]string{`Content-Type`: `application/text`},
////			headers:        map[string]string{`Content-Type`: `text/plain; charset=utf-8`},
////		},
////		{
////			name:       `POST endpoint to multiply`,
////			method:     http.MethodPost,
////			path:       `/multiply`,
////			statusCode: 200,
////			requestBody: map[string]interface{}{
////				"x": 4,
////				"y": 5,
////			},
////			body:                  `{"value":10}`,
////			handlerMethodName:     multiplyMethodName,
////			handlerToBeCalledWith: []interface{}{4, 5},
////			headers:               map[string]string{`Content-Type`: `application/json`},
////		},
////	}
////
////	appHandler := &AppHandlerFake{}
////	app := CreateApp(appHandler)
////
////	for _, tc := range testTable {
////		t.Run(tc.name, func(t *testing.T) {
////
////			appHandler.Calls = map[string][][]interface{}{}
////
////			// Create and send request
////			rbody, _ := json.Marshal(tc.requestBody)
////			request := httptest.NewRequest(tc.method, tc.path, bytes.NewReader(rbody))
////			request.Header.Add(`Content-Type`, `application/json`)
////
////			// Request Headers
////			for k, v := range tc.requestHeaders {
////				request.Header.Add(k, v)
////			}
////
////			response, _ := app.Test(request)
////
////			// Status Code
////			statusCode := response.StatusCode
////			if statusCode != tc.statusCode {
////				t.Errorf("StatusCode was incorrect, got: %d, want: %d.", statusCode, tc.statusCode)
////			}
////
////			// Headers
////			for k, want := range tc.headers {
////				headerValue := response.Header.Get(k)
////				if headerValue != want {
////					t.Errorf("Response header '%s' was incorrect, got: '%s', want: '%s'", k, headerValue, want)
////				}
////			}
////
////			// Response Body
////			body, _ := ioutil.ReadAll(response.Body)
////			actual := string(body)
////			if actual != tc.body {
////				t.Errorf("Body was incorrect, got: %v, want: %v", actual, tc.body)
////			}
////
////			// Check if handler was called correctly
////			if tc.handlerMethodName != "" {
////				if !Equal(appHandler.Calls[tc.handlerMethodName][0], tc.handlerToBeCalledWith) {
////					t.Errorf("Handler method '%s' wasn't called with the correct parameters. Got: '%v', want: '%v'", tc.handlerMethodName, appHandler.Calls[tc.handlerMethodName][0], tc.handlerToBeCalledWith)
////				}
////			}
////		})
////	}
////
////}
