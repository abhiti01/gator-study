### Progress
Points planned to deliver : 15

Points delivered : 18 (3 from last sprint spill over story)

Sprint velocity : 18

Targets achieved:

### Overview:
#### Backend - 
1. Developed Endpoints for group features.
5. Performed most of the development using pair programming and did code review.
6. Conducted standup meetings everyday to discuss the progress.
7. Added Unit test for new developments.
8. Chat feature fully functioning.
#### Frontend -
1. Added a page that lists all the available groups a user can join
2. Groups have information such as a short description, its moderator and capacity
3. When a user tries to enter a group without logging in, they receive an alert.
4. Improved chat styling to better display the sender's information.
5. Added functionality to toggle music player.
6. Linked music player to YouTube's API.

### Steps to run Frontend : 
1. After cloning the repository, run `cd gator-study-frontend`
2. Then run `npm install`
3. npm should take care of installing all the dependencies, run `npm run dev` and the console should output the link at which the website is live (localhost:3000 or localhost:8000)
4. If npm doesn't install required dependencies correctly, try running `npm install next react react-dom`

###Screenshots for frontend 
1. Homepage - 
<img width="1438" alt="Screenshot 2022-04-01 at 2 27 28 PM" src="https://user-images.githubusercontent.com/56045905/161321223-78b7430b-14fc-4e39-8eb5-af6f6575db19.png">
2. Group selection page -
<img width="1439" alt="Screenshot 2022-04-01 at 2 27 56 PM" src="https://user-images.githubusercontent.com/56045905/161321288-9e709f30-c562-487e-b067-719e2ee69669.png">
3. Alert when user joins a group without logging in
<img width="1437" alt="Screenshot 2022-04-01 at 2 28 27 PM" src="https://user-images.githubusercontent.com/56045905/161321367-6127d40b-f845-4f49-8e39-14c5a47a8733.png">
4. Chat box after logging in and successfully joining a group
<img width="1440" alt="Screenshot 2022-04-01 at 2 29 35 PM" src="https://user-images.githubusercontent.com/56045905/161321526-ab146469-c945-48e7-ad23-f2aae4ad23d8.png">
5. Music player and toggler
6. <img width="1436" alt="Screenshot 2022-04-01 at 2 30 23 PM" src="https://user-images.githubusercontent.com/56045905/161321757-bfa27597-d23c-45ab-a4d2-c1deaeef2cb9.png">
7. When a new user tries to access the chat feature-
<img width="1439" alt="Screenshot 2022-04-01 at 2 33 32 PM" src="https://user-images.githubusercontent.com/56045905/161322029-4cd485c9-1daa-476c-bd78-8ea54ddf8789.png">

### Steps to run Backend:

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

