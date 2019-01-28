# FriendFinder

This app will match a friend with similar interests, based on the survey answers submitted.


## Set Up
Save and require the Express and Path npm packages in files-- app will need them for data input and storage.

  Clone repository. ```git clone``` https://github.com/BVega03/FriendFinder.git
  
  (Once functional) GitHub link. ``` gitHub``` https://bvega03.github.io/FriendFinder/

## Getting Started

Click link ```bio link``` 

Run the application to be directed to the Home Page.

Click the **```Survey```** button to enter the required information.

1. Name

2. Link to photo [Linkedin](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlqHm076e19Spy2bqiQDc837a7CDRS1em1TNYkAV3mjqFNljOJ) 

3. Answer the 10 question survey with a dropdown box to choose a number 1 through 5
  - Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

4. Click the ```Submit``` button

**The App should:**

*Have a ```server.js``` file requiring the basic ```npm``` packages: ```express``` and ```path```.*

*The htmlRoutes.js file should contain two routes:*
  1. A ```GET``` Route to ```/survey``` which should display the survey page.
  2. A default, catch-all route that leads to ```home.html``` which displays the home page.

*The apiRoutes.js file should contain two routes:*
  1. A ```GET``` route with the url ```/api/friends```. This will be used to display a ```JSON``` of all possible friends.
  2. A ```POST``` routes ```/api/friends```. This will be used to handle incoming survey results. This route will also be used to handle      the compatibility logic.
  
*The application's data is saved inside of ```app/data/friends.js``` as an array of objects. Each of these objects should roughly follow the format below.*

{
  name:"Ron",
  photo:[image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlqHm076e19Spy2bqiQDc837a7CDRS1em1TNYkAV3mjqFNljOJ),
  scores:[
      5,
      1,
      5,
      3,
      1,
      1,
      1,
      5,
      5,
      5
    ]
}

*Determine the user's most compatible friend using the following as a guide:*

*It will then convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).*

*Then the app will compare the difference between current user's scores against those from other users, question by question.*

*It will need to add up the differences to calculate the totalDifference.*

*Example:*
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5

*We will use the absolute value of the differences.*

*The closest match will be the user with the least amount of difference.*

*Once the app has found the current user's most compatible friend, display the result as a modal pop-up.*

*The modal should display both the name and picture of the closest match.*

## Built With
- ```JavaScript```
- ```HTML```
- ```Node Modules```
- ```Express```
- ```Path```
- ```APIs```
- ```AJAX```
- ```JSON```
- ```jQuery```
- ```Bootstrap```


## Issues/ Future Features
- The html pages were viewable in the browser but I had issues connecting the ```survey.html``` when the button on the ```home.html``` page was clicked. It seemed by not putting the .html after survey in the home page path, the link would work on the ```PORT``` but not within Visual Studio.

- Ran in to issues with connecting to the ```PORT```. Was getting a ```SEGMENT FAULT``` when trying to run ```node server.js```. Researched and found a git command ``rm .git/index`` then ``git reset`` and seemed to connect after that. This is why there are 2 files ``bash.exe.stackdump`` and ``clear.exe.stackdump`` added to the Friend Finder directory.

- Connectivity issues could have been from me troubleshooting my OneDrive. I had to close and stop all syncs and the errors were piling up after I had made changes to directories and files.

- Dropdown boxes with chosen options and submit button are not functioning properly. Will debug these features for future use.

- Able to connect the ```server.js``` file to ```PORT 8889``` locally. ```localhost:8889``` and ```localhost:8889/survey```.

- Still researching how the arrays are populated into the ```JSON```, storing the variables & their data.

- Still unfamiliar with ```Modal``` and how to calculate the matches with the chosen numbers.

- The code is still missing a few key pieces on the back end in order to have a fully functional app. Will continue to work on getting it up and running correctly

## Author
- Ben Vega

