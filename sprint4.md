### Progress
Points planned to deliver : 25

Points delivered : 25

Sprint velocity : 25

Project demo: On the home page and the main Readme.md file 
https://github.com/abhiti01/gator-study

Targets achieved:

### Overview:
#### Backend - 
1. Developed Endpoints for Adding Notes.
2. Made changes to support display of avatars and icons.
3. Performed most of the development using pair programming and did code review.
4. Conducted standup meetings everyday to discuss the progress.
5. Added Unit test for new developments.
#### Frontend -
1. Fetched, cached and revalidated authentication data with SWR, increasing performance by upto 50%.
2. Added suggested playlists with Youtube's API. Users can play, pause or switch between playlists.
3. Implemented chat with Pusher. Users can chat in the general channel or in group-specific channels.
4. Added a feature for creating study notes and saving them. User can see their old notes when they log in the next time.
5. Created integration specs for new features.
6. Improved overall aesthetic of the UI with Chakra.

### Steps to run Frontend : 
1. After cloning the repository, run `cd gator-study-frontend`
2. Then run `npm install`
3. npm should take care of installing all the dependencies, run `npm run dev` and the console should output the link at which the website is live (localhost:3000 or localhost:8000)
4. If npm doesn't install required dependencies correctly, try running `npm install next react react-dom`

#### Steps to run Frontend tests :
1. Inside gator-study-frontend, run `npm run cypress`
2. Click on 'Run integration tests'
3. To use Cypress in headless mode instead, run `npm run cypress:headless`

When using GUI-
<img width="1279" alt="Screen Shot 2022-04-01 at 3 15 13 PM" src="https://user-images.githubusercontent.com/56045952/161330704-cd22d351-bce6-4ad2-a8b2-9c6cc6b4b135.png">

When using headless mode- 
<img width="1093" alt="Screen Shot 2022-04-01 at 2 53 52 PM" src="https://user-images.githubusercontent.com/56045952/161330740-13907703-b356-4115-aabf-71c3902fb322.png">

### Screenshots for frontend 

1. Homepage for unauthenticated users -

<img width="1438" alt="Screenshot 2022-04-20 at 11 26 58 PM" src="https://user-images.githubusercontent.com/56045905/164366323-42c8d308-90df-4580-b4ef-0b17b191f6c4.png">

2. Homepage for authenticated users -

<img width="1437" alt="Screenshot 2022-04-20 at 11 27 47 PM" src="https://user-images.githubusercontent.com/56045905/164366410-ce723b44-d3c0-4596-9ef6-03f40e90ce50.png">

3. Groups page - 

<img width="1440" alt="Screenshot 2022-04-20 at 11 28 08 PM" src="https://user-images.githubusercontent.com/56045905/164366465-1c0cc250-b2bb-48ae-9b55-8deb004c27ce.png">

4. Playlists and Chat features - 

<img width="1436" alt="Screenshot 2022-04-20 at 11 28 37 PM" src="https://user-images.githubusercontent.com/56045905/164366549-54867272-bd2c-4884-8c9f-07dd96049ca1.png">


### Steps to run Backend:

1. Take clone of the repository (git@github.com:abhiti01/gator-study.git).
2. cd /gator-study-backend
3. go run main.go
4. import the postman collections from the postman folder.
5. Hit the endpoints via postman and check them out.

Below are the screenshots for the addition of notes feature- 

1. User saves a new note
<img width="1001" alt="Screen Shot 2022-04-20 at 8 56 30 PM" src="https://user-images.githubusercontent.com/19620158/164350527-677385c6-6131-4b8f-8bf1-e140a983bd94.png">

2. When user logs in or goes to dashboard they can see their old notes saved corresponding to their user profile
<img width="1026" alt="Screen Shot 2022-04-20 at 8 58 17 PM" src="https://user-images.githubusercontent.com/19620158/164350632-6dbabfd4-31b6-492b-8193-bc431353c229.png">

