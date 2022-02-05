Points planned to deliver : 18

Points delivered : 16

Sprint velocity : 16

Targets achieved: 

Overview: Created UI, endpoints and integrated both for the register, login flow

Register page - 
1. Created UI as discussed for register page
2. Created post end point to register the User in the DB

Login page - 
1. Created UI as discussed for login page
2. Created post end point to check credentials and return a token
3. Route user to dashboard once logged in

Return User -
1. Returning current user's  username, email-id, password and Id number in database. The password is a encrpyted output generated using bcrypt library in go.
2. Cookie is valid for 24hrs from the login time.

Logout -
1. Updating the cookie timer to current time - 1hr to logout the user.
2. Jwt or JSON web tokens are used to share security information between two parties mainly client and server.

Dashboard - 
1. Created UI as discussed for landing page
2. Created Pomodoro timer
3. Created switcher between work modes and break timer
4. Created input fields to change timer durations

Spill over story - integrate UI with getUsers API(Did not create UI for diplaying current user)
