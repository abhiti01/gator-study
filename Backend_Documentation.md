1. URL: Http://localhost:8000/api/User

"Get" Endpoint

Sample Response: 

{
    "Id": 1,
    "Name": "Naman",
    "Email": "naman.bhatia@gmail.com"
}

Also returns a cookie valid for 24 hours

2. URL: Http://localhost:8000/api/Login

"POST" Endpoint

Sample Request: 

{
    "email": "naman.bhati@gmail.com",
    "password": "1234"
}

Sample Response:

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


3. URL: http://localhost:8000/api/register


"POST" Endpoint

Sample Request: 
{
    "name": "Naman",
    "email": "naman.bhatia@gmail.com",
    "password": "12345"
}

Sample Response : 

{
    "Id": 2,
    "Name": "Naman",
    "Email": "naman.bhatia@gmail.com"
}

4. URL: http://localhost:8000/api/Logout

POST endpoint

Sample request: 
{
}

Sample Response :

{
    "message": "success "
}

Also removes the cookie 
