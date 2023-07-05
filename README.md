# MVP Requirement
## I/ Functional Requirements
  ### User Registration and Authentication
  Allow users to register and log in to the app to access the quiz game.
  ### Forgot Password
  Allow users to recover their account using a PIN code that they set during registration or updated in their profile. If they forget the PIN code, they must contact the administrator for account recovery.
  ### Quiz Categories
  Users should be able to choose from a variety of quiz categories (e.g., Science, History, Entertainment). 
  ### Clone the Quiz
  Logged-in users should have the option to clone a public quiz, which will then be saved in their quizzes.
  ### Create Quiz
  Users can create a quiz containing a list of questions. They should also be able to add tags to the quiz, which can be used for searching within categories.
  ### Create the question in a quiz
  Within each quiz, users can create multiple questions. They can define the type of question (e.g., text, audio, image) and the type of answer (e.g., multiple-choice, single choice, true/false). Users must then provide the question content and answer options.
  ### Host Game
  Users can host a game using a quiz they have created. They will select the quizzes that they want to host, and upon choosing to host, the app will generate a link and QR code for other participants to join.
  ### Join Game
  Users (participants) can join a game by using a link or scanning a QR code. They will be placed in a waiting room where they can see other participants and have the option to comment/react while waiting for the game to start.
  ### Play in single mode
  Participants can choose the quiz that they want to play (as exam or exercise, etc…), they can play it single.
  ### Question Display
  Present participants with questions, one at a time, during gameplay.
  ### Answer Submission and Scoring
  Participants should be able to select and submit an answer for each question. The app will keep track of the participant’s score as they progress through the question.
  ### Progress and Results
  Display the user's progress (e.g., questions answered, remaining) and the final score upon completion.
  ### Leaderboard
  Show a leaderboard where users can see their ranking compared to others.
  ### History of Game
  After playing, participants should be able to see the rankings of games they have participated in. The host of the game should be able to see the list of participants who played and their respective ranks.

## II/ Non-functional Requirements
  ### Performance
  The app should respond quickly to user inputs and load questions without noticeable delay.
  ### Scalability
  The system should be able to handle a large number of concurrent users without degradation in performance. (100 users in time)
  ### Security
  Users only access one device at a time. 
  ### Cross-platform Compatibility
The app should work across various devices and browsers.

## III/ Target users
The target users are individuals who enjoy online games, specifically those that test knowledge or allow for learning new information in a fun and competitive way. This may include students, educators, trivia enthusiasts,...

## IV/ Goals
  ### Functionality
  To develop a simple, interactive, and user-friendly online quiz game. Users should be able to participate in different categories of quizzes, keep track of their scores, and compete with others.
  ### Ease of Use
  The game should be easy to navigate and play, with clear instructions and intuitive controls. The interface should be clean and appealing.
  ### Responsiveness
  The game should work seamlessly across various devices - desktop and mobile. There should be no lag during gameplay to provide a smooth user experience.

## V/ Use-case diagram
    ![Alt text](https://drive.google.com/file/d/16aF8w0vGgKsgjSphJwb9foTeIXNQA19X/view?usp=drive_link)
## VI/ Function MVP Requirement
  ### Host game
  - Purpose: Users host a game and others can join and answer questions together.
  - Targeted user: the user that is logged in
  - Description: 
    - User selects Library on Navbar
    - User selects Quizzes in Library
    - User selects Host game button in Quizzes 
    - The screen switches to host game mode waiting for players
    - Users press the Start button to start playing
  - Structure: 
    ![Alt text](https://drive.google.com/file/d/1xvflFiUvBhYNhUXHP07lNPtW6i5EGNWV/view?usp=drive_link)
  ### View public Quizzes
  - Purpose: User can view Quizzes of other user when it is public
  - Targeted user: the user that is logged in or not logged in
  - Description: 
    - User select Discovery in Navbar
    - User select View button of Quizzes when it is public
    - System show question of Quizzes
  - Structure: 
    ![Alt text](https://drive.google.com/file/d/1dNRY8EgKP4-k7zKJbAf8Ja859K21r1MX/view?usp=drive_link)
  ### Join Game
  - Purpose: User can join game of other user who is host game and answer question together with other players, now that person is participant
  - Targeted user: the user that is logged
  - Description: 
    - User scan QR code,  input URL or PIN to join game
    - If user not logged in:
      - System show screen of login
      - User input name 
    - System show screen of Waiting game 
  - Structure: 
    ![Alt text](https://drive.google.com/file/d/1RryLd6b2h6-VF1Nh9U6tOPm9LzmXN9zh/view?usp=drive_link)
  ### Create Quizzes
  - Purpose: Users host a game and others can join and answer questions together.
  - Targeted user: the user that is logged in
  - Description: 
    - User select Create Quizzes in DashBoard
    - System show screen of create Quizzes
    - User input question
    - User input image or audio 
    - User input answers for question
    - If user want to add question:
      - User press add question button
      - Go back to step 3
    - User press Save button to save Quizzes
  - Structure: 
    ![Alt text](https://drive.google.com/file/d/10x18NEiipRdz4maQgUxPtDl6KPdI2btT/view?usp=drive_link)
  ### Play Game
  - Purpose: Users can single play game by answers of selected Quizzes
  - Targeted user: the user that is logged in
  - Description: 
    - User select Discovery in Navbar 
    - User select Quizzes in Discovery 
    - User select Play Game button to single play
    - System show questions in Quizzes and user answer it 
  - Structure: 
    ![Alt text](https://drive.google.com/file/d/1stkjusikUOe-IHFiiaCpIFjD533x-pLy/view?usp=drive_link)
  ### View my Quizzes
  - Purpose: Allow users to see their quizzes or host the game with the quiz chosen.
  - Targeted user: Online quiz game players who want to see their quizzes were created or edit questions were created in the quizzes (they also can host games here). This includes students, teachers, trivia enthusiasts,...
  - Description: 
    - Users select “Quizzes” on the Navbar.
    - Users can see their list of quizzes created. In each quiz, they can edit the question or start the game with this quizz.
    - Users can organize these quizzes using various filters like categories, creation date,...
    - Users select the quiz that they want to see and edit the questions inside.
    - If there are no quiz, the user can create their new sets by click “Create a new quizzes”
  - Structure: 
    ![Alt text](https://drive.google.com/file/d/1VHFvDrorobBhbUyeXZPg-YGc-LWBc5rS/view?usp=drive_link)
  ### Add to my Quizzes
  - Purpose: Allow users can clone the public quiz into their quizzes. After cloning the public quiz, they can edit the questions inside this quiz or host the game.
  - Targeted user: Online quiz game players who want to clone the public quizzes in the Discovery
  - Description: 
    - Users select “Discovery” on the Navbar.
    - Users can organize these quiz sets using various filters like categories, creation date,...
    - Users select “Add to my Quizzes” button in the public quiz that they want to see or clone into their quizzes
  - Structure:
    ![Alt text](https://drive.google.com/file/d/1zt_vwBUOS0WgkQ9dKi9t8Ar1ECBMqYKZ/view?usp=drive_link)



  
