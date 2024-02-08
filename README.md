# FED_Assignment_02
Collaborative space for assignment 2 between Keshwindren Gandipanh and Pey Zhi Xun.

Name of the app: BrainWave

Pitch/rationale behind idea:
The both of us wanted to merge the concept of learning and playing games to come up with one platform where users can have fun learning while experiencing the learning process in a gamiifed way, hence the creation of BrainWave.

Design process is stated below
Idea/theme:
We wanted to combine learning and gaming into one platform and come up with a trivia game that also had other implementations that made it feel like it was a game and also intend on making the platform look like a gaming platform.

Target audience: 
Our game app is open for users of all ages to try and have fun with however, more emphasis is being put on the younger audience as we have identified them to being the most dominant potential user of our app.

Reason behind choosing this theme/idea:
  Our trivia game was inspired by an event that happened not so long ago during Ngee Ann Polytechnic’s open house. In one of the SIG booths nearby the ICT block, the SIG OverFlow had introduced a fun little game to the visitors and the game was to choose a topic and answer questions based on those topics and it will then be evaluated and your score will be given in the end. We thought this game was something that would engage very well with the users as it did with us in real life. 
  Other than that, we also took inspiration from the game that was once on the world renowned platform Netflix under the name of Trivia Verse. This game tested the users on their general knowledge with gamifications that made it so much more enjoyable and fun to play and we decided to give this idea a go.

What BrainWave is for:
In essence, we intent for this platform to be able to help the audience to expand on their already exisitng general knowledge in a way which does not burn them out and also in a way that keeps them engaged and look forward to play and learn along the way.

How our idea helps achieve this goal? 
Well, we have implemented changes and gamification features which we believe would keep the users engaged in the learning process which will be explained in the below sections under "Features".


Link to our initial prototype is attached below:<br/>
https://www.figma.com/file/SdLnoXtWzLSZN61tvu8TPC/Prototype-for-trivia-game?type=design&node-id=0%3A1&mode=design&t=feDF4CFRFApN5zXl-1<br/>

Link to final prototype is attached below:<br/>
https://www.figma.com/file/SdLnoXtWzLSZN61tvu8TPC/Prototype-for-trivia-game?type=design&node-id=0%3A1&mode=design&t=RCtXK7piQ4hh7LIw-1<br/>


Features to be implemented:
-A home page with details regarding our background and our intent for users to see and understand (this will be our landing page)
-A navigation bar on the top part of the home page to navigate through the different pages in the application which comprises of "About Us", "Learn", "Trivia Quiz", "Sign In" and "Merch".
-A buffer page which includes a lottie animation of a rocket ship taking off and a simple text below the animation to make users know that the next page is loading up (this applies to navigation to every other page back and forth).
-A trivia quiz made by implementing an API which is opendb.
-A learning page which generates random fun facts by making use of an API as well which is ApiNinjas.
-An interactive sign up/sign in page which has sliding animations to go between the both made with javascript which is connected to a database from restdb.io to store values.
-A merch page which is intended to hold brand specific merch which would be redeemable by players of the game who have been accumulating points by placing high in the leaderboards every month.
-A responsive footer which includes navigation links to standard applications such as the FAQ pages, social media accounts etc. Do note that these navigations DO NOT WORK as there aren't legitimate source of accounts to link them to.
-Trivia music that starts playing the moment any user starts the trivia game to bring forth a fun and gamified environment to the users.
-A scrollable carousel in the about us page which showcases out quote on quote "established projects" which basically holds images of established projects by our imaginary company and it is navigatable by using both fingers.
-GIFs in the background and the sign up page of pixelated environments/characters to enhance gamification feel of the platform.
-A toggle which holds the navbar items when the screen size is reduced to that of a mobile screen @media of 767 px

Features that are there but DO NOT WORK or NAVIGATE anywhere:
-Every item in the footer doesn't link anywhere and would remain in the same page when clicked.
-The 'get help' portion in the sign in page DOES NOT lead to a help page but remain in the same exact page when clicked upon.
-The REDEEM button in the merch page DOES NOT work or NAVIGATE anywhere.

Features that could be implemented in the future:
-A working point system which enables users to gain points from playing the trivia quiz.
-A help page which is able to guide users when they are having issues navigating or accessing any feature that should be working.
-A leaderboard which is able to showcase details of players who are able to finish the trivia quiz in the shortest amount of time and sorting the leaderboard by time of completion and rewards extra points to players who are in the top 10 at the end of every month or give them free tokens to redeem items from the merch store.
-A working merch page where the items are redeemable with the point system mentioned above.
-A merch page which is for the purpose of selling products in order to generate revenue for the developers of the application.


Technologies used:
-Standard HTML => In order to create proper divs and spacing and all necessary content to make the general skeleton of each page.
-Bootstrap => Used to make the navbar which is responsive and is used in every page.
-Standard Javascript => Used to link the database (restdb) and API (opendb & apininjas) to link to pages where necessary and also codes to make some animations in the sign up/sign in page and carousel.
-Lottie animations => Used when creating the buffer page where the animation works for 2 seconds with a small text underneath before automatically navigating users to the actual page they intend on going to with the help of javascript.
-Standard CSS => In order to create the desired styling and aesthetics for every page.
-API => opendb and apininjas which brings forth the trivia game as well as the random fact generator.
-RestDB Database => In order to store details of existing accounts and newly created accounts in the sign in/sign up page to be recalled when same user is tring to log in.
-GIFs => Create a more interactive background and adds a fresh air of movement in pages where the animations are applied.

The links to the free API we used is attached below:
https://opentdb.com/api_config.php
https://api.api-ninjas.com

The link to the RestDB database which we used (unable to access as only the owner of the account is able to access and view contents of the database):
https://firstdatabasefed-27c1.restdb.io/home/


Testing: 
-Hover over the 5 different pages in the navbar and you should be able to see a colour changing affect where the texts in the navbar change to green when hovered over.
-Scrolling vertically on the carousel which showcases images of "established projects" and you should be able to scroll through 3 different images (pacman, snake and jetpackjoyride)
-Hovering over the footer content should invoke a movement and highligh the texts to white as well as the social media platform icons.
-Click on any of the navbar content and lottie animation should be invoked as a buffer page with a small text underneath the animation which says "This might take a few seconds, hold on!".
-Click on the "Get Random Fact" button in the learn page which should generate random facts retrieved from apininjas
-User should be able to choose the various options in the trivia quiz page from number of questions, category, difficulty and time limit per question.
-User should be able to listen to a trivia themed music that automatically starts playing once start quiz is clicked and the music only stops if the page is refreshed or if user navigates to another page.
-GIFs in the background should be constantly moving.
-GIFs in the sign up/sign in page should be moving and iterating through different minified characters constantly.
-User should be able to slide to the sign up page when clicking the blue sign up text smoothly without fault.
-User should be able to view the text and new image when clicking the toggle underneath the moving gif in the sign in/sign up page.
-User should be able to sign in with his/her email and password if account is already created and if user inputs a different password for his/her email the login would not work but if it does work then it should automatically navigate to the trivia page upon successful login.
-User should be able to create an account in the sign up page and a notification should pop up from the top of the screen signifying a new account creation.
-Merch page does nothing but it should be scrollable and the navbar and footer positions would be in tact with no fault.
-User should be able to have a toggle button (it is black so some visibility issue might occur but it is there) when switching to a smaller viewport specifically @media 767 px and the toggle should also showcase a navbar which is suitable with that screen sizing.
-Every page including footers should be responsive up until the @mwdia size of 767px

Credits:
TriviaVerse audio => https://youtu.be/p-DlezQwa4A?si=MBb7gjVB2Z_2g6_w
YouTube tutorials :
https://youtu.be/3X6hgNnf75I?si=J2GkHBhmZzmGiqZL
https://youtu.be/McPdzhLRzCg?si=vuvAWSHFgxpp3Z26
https://www.youtube.com/watch?v=LJ4PZ8JnRCg
https://www.youtube.com/watch?v=fC3qLUWf_Lk
https://www.youtube.com/watch?v=30PvYhVKNGg
https://www.youtube.com/watch?v=YOb67OKw62s
https://www.youtube.com/watch?v=ioVseYQgBK4&pp=ygUpaG93IHRvIHVzZSBwcmVsb2FkZXIgaW4gaHRtbCB1c2luZyBsb3R0aWU%3D

Media Creadits:
https://i.pinimg.com/originals/4b/65/28/4b65285a3d31f68d1350e8b23c19ddd7.gif
https://i.pinimg.com/564x/04/bc/fc/04bcfcac0ddd27d7f558596a1022a4d0.jpg
https://i.pinimg.com/564x/59/d0/24/59d024fb7291d2b7c7972a7d1a55c06c.jpg
https://i.pinimg.com/564x/d6/41/bc/d641bce935d33068a907e05d8ec462be.jpg
https://i.pinimg.com/564x/48/5d/0e/485d0e74a94ef7868c836aeadfde0e35.jpg
https://i.pinimg.com/564x/2d/62/d0/2d62d06f3cb5e2905b676792f28cd4b6.jpg
https://i.pinimg.com/564x/82/66/48/8266486438a3a59dfcfe58b13bc2a3e7.jpg
https://i.pinimg.com/564x/99/6c/48/996c4858a5ac364194bd3a3fa0244b0e.jpg
https://i.pinimg.com/564x/28/f7/38/28f738d5c43f9df53baaeb991a816609.jpg
https://i.pinimg.com/564x/ba/4a/ea/ba4aea66ee7237832dc9581d807a5498.jpg
https://cdn.goconqr.com/uploads/media/image/25598787/desktop_93b83d05-0655-4131-92cb-a747b10fcc89.png
https://i.pinimg.com/originals/1b/10/65/1b10651e6942ba4e4e0159188f4a8294.gif
https://www.pinterest.com/pin/150166968819795741/
https://i.pinimg.com/564x/65/4f/ca/654fca7d58c8a3428e2db822de9eeae6.jpg
https://i.pinimg.com/564x/47/f1/06/47f10636385f8ae2cc7f438c440f225f.jpg
https://i.pinimg.com/564x/78/d5/71/78d571949d60a33e15b8451471bb5b25.jpg
https://i.pinimg.com/564x/78/d5/71/78d571949d60a33e15b8451471bb5b25.jpg

Google Fonts and Social Icons:
https://fonts.googleapis.com/css?family=Anton
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css

Acknowledgement:
-TriviaVerse (Netflix)
-Overflow SIG Booth (NP OpenHouse 2024)
-Spotify (colour palette)

Contributions:
Pey Zhi Xun - Back-end for trivia page and restdb/general skeleton/video compilation for pitch
Keshwindren - Front-end/random fact generator page
(equal contributions, worked well together)

