1. 
URL: Http://localhost:8000/api/User

"Get" Endpoint

Response: 

{
    "Id": 1,
    "Name": "Naman",
    "Email": "naman.bhatia@gmail.com"
}

2.

URL: Http://localhost:8000/api/Login

"POST" Endpoint

Request: 

{
    "email": "naman.bhati@gmail.com",
    "password": "1234"
}

Response:

If successful login:

{
    "message": "success"
}

If incorrect password:

{
    "message": "incorrect password"
}

If Unregistered User:

{
    "message": "user not found"
}




