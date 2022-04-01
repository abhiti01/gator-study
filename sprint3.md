Points planned to deliver : 15

Points delivered : 15

Sprint velocity : 15

Targets achieved:

Overview:

1. Developed Endpoints for group features:
2. Performed most of the development using pair programming and did code review.
3. Conducted standup meetings everyday to discuss the progress.
4. Added Unit test for new developments.
5. Chat feature fully functioning.

Steps to run Backend:

1. Take clone of the repository (git@github.com:abhiti01/gator-study.git).
2. cd /gator-study-backend
3. go run main.go
4. import the postman collections from the postman folder.
5. Hit the endpoints via postman and check them out.

Below are the screenshots for the flow of groups feature- 

1. User registers/logs in but is not a part of any group 
<img width="1302" alt="Screen Shot 2022-04-01 at 11 56 30 AM" src="https://user-images.githubusercontent.com/19620158/161299840-714a4e55-cf6d-47b2-83b7-d4b932fe8fb1.png">

2. When user clicks on join a group assUserToGroup endpoint is called which adds the user to the groupName requested
<img width="1312" alt="Screen Shot 2022-04-01 at 11 56 48 AM" src="https://user-images.githubusercontent.com/19620158/161300036-c3d660a8-0996-4151-9190-2b8b3005ac5d.png">

3. You can create new groups which will call createNewGroup endpoint
<img width="1297" alt="Screen Shot 2022-04-01 at 11 55 50 AM" src="https://user-images.githubusercontent.com/19620158/161300155-26c0f424-e1b2-4888-905e-d59865462f60.png">

4. You can getAllGroups that exist to show to a new user which he/she can join
<img width="1315" alt="Screen Shot 2022-04-01 at 11 58 13 AM" src="https://user-images.githubusercontent.com/19620158/161300248-d1be5684-2709-4812-8ecf-837add4db424.png">

5. Now when you call getUser you get the groupName that he is a part of in the response
<img width="1330" alt="Screen Shot 2022-04-01 at 11 58 25 AM" src="https://user-images.githubusercontent.com/19620158/161300385-ed323a02-a5b6-49bd-bb85-e396a65aed56.png">

