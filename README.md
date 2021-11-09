# **Car Quiz**

![Race Banner Image](assets/images/race-banner.jpg)

You can see the live website [here](https://browne878.github.io/Car-Quiz-PP2/).

The purpose of this website to provide the user with a fun and challenging game to test their knowledge of cars.

My aim for this quiz was to make a simple and easy to use UI that allows the user to focus on the game. I wanted to be able to randomise the questions so the user can play multiple times. Finally, I wanted this website to be responsive, so that users on all devices can enjoy the completed website.

## **Table of Contents**
- ### [Features](https://github.com/browne878/Car-Quiz-PP2#features-1)
    - [Welcome Screen](https://github.com/browne878/Car-Quiz-PP2#welcome-screen)
    - [Question Screen](https://github.com/browne878/Car-Quiz-PP2#question-screen)
    - [Game Over Screen](https://github.com/browne878/Car-Quiz-PP2#game-over-screen)

- ### [Future Development](https://github.com/browne878/Car-Quiz-PP2#future-development-1)

- ### [Testing](https://github.com/browne878/Car-Quiz-PP2#testing-1)
    - [Lighthouse](https://github.com/browne878/Car-Quiz-PP2#lighthouse)
    - [HTML Validator](https://github.com/browne878/Car-Quiz-PP2#html-validator)
    - [CSS Validator](https://github.com/browne878/Car-Quiz-PP2#css-validator)
    - [JSHint Validator](https://github.com/browne878/Car-Quiz-PP2#jshint-validator)

- ### [Bugs](https://github.com/browne878/Car-Quiz-PP2#bugs-1)
    - [Unfixed Bugs](https://github.com/browne878/Car-Quiz-PP2#unfixed-bugs)
    - [Fixed Bugs](https://github.com/browne878/Car-Quiz-PP2#fixed-bugs)

- ### [Deployment](https://github.com/browne878/Car-Quiz-PP2#deployment-1)
    - [Cloning/Forking Repository](https://github.com/browne878/Car-Quiz-PP2#cloning--forking-repository)
    - [Local Deployment](https://github.com/browne878/Car-Quiz-PP2#local-deployment)
    - [Remote Deployment](https://github.com/browne878/Car-Quiz-PP2#remote-deployment)

- ### [Credits](https://github.com/browne878/Car-Quiz-PP2#credits-1)

## **Features**

- ### **Welcome Screen**
    - The purpose of this page is to give the player an understanding of how to play the game and give them an idea of what to expect.
    - I wanted this page to be clean and easy to read. I intended to make it easy to navigate to allow the user to begin playing.
![Welcome Screen](assets/images/welcome-screen.png)

- ### **Question Screen**
    - I wanted the question and options to be easily readable. I also wanted it to be clear on how to play.
    - I included a timer and a progress bar to ensure the player has enough time to read the question and answer it.
![Question Screen without Options](assets/images/question-screen.png)
![Question Screen with Options](assets/images/question-screen-answer.png)

- ### **Game Over Screen**
    - I wanted this page to display the score the player achieved throughout the game.
    - I didn't want too much information on this page as the user now understands how the game works.
    - I also wanted the user to have the option to play the game again without reloading the page.
![Game Over Screen](assets/images/game-over-screen.png)

## **Future Development**

In future development, there is one key feature I would like to implement. This has added a database which would record the players scored and display them as a leaderboard. This would allow people to compete for the highscore. With this feature, I would also include the ability for the player to select a nickname to go to the leaderboard.

I would also like to continue adding more questions to the quiz to allow the user to rarely encounter the same question multiple times. This could also lead to adding different categories for the quiz. This would allow the players to test their knowledge in multiple areas.

## **Testing**

### **Lighthouse**

During the development of the quiz, I used the lighthouse to monitor my progress. I used it to ensure that everything added performed as intended. I also used it to ensure that I was following best practices and accessibility guidelines.

By doing this throughout the development process I was able to ensure that there were no issues with my lighthouse score.

Mobile Score: Full report can be found [here](assets/lighthouse/mobile.pdf)

![Mobile Lighthouse Score](assets/images/lighthouse-mobile.png)

Desktop Score: Full report can be found [here](assets/lighthouse/desktop.pdf)

![Desktop Lighthouse Score](assets/images/lighthouse-desktop.png)

### **HTML Validator**

Once I had completed the website, I entered my HTML code in the [W3C Markup Validation Service](https://validator.w3.org/). The results can be found by clicking [here](assets/images/html-validator.png)

### **CSS Validator**

After completing the website, I entered my CSS code in the [W3C CSS Validation Service](https://validator.w3.org/). The results can be found by clicking [here](assets/images/css-validator.png)

### **JSHint Validator**

Once I completed the quiz, I entered all of my JS code into the [JSHint Javascript Validator](https://jshint.com/). There are only two warnings, one is an undefined variable in the script.js file, the other is an unused variable in the questions.js file. This is due to the questions.js file being separated to keep the files easier to read. Each file is loaded and the unused variable is defined globally, allowing it to be used by the script.js file.

The screenshot of the report for the script.js file can be found [here](assets/images/jshint-script.png).
The screenshot of the report for the questions.js file can be found [here](assets/images/jshint-questions.png).

## **Bugs**

### Unfixed Bugs

There are currently no known bugs.

### Fixed Bugs

While making the progress bar, I ran into a bug where the progress bar would work once and not reset. This was because I was unable to make the animation restart. In order to fix this, in the js, I cloned the progress bar and replace it each time the progress bar is meant to reset. This means that each time the progress bar restarts, it is a new instance of itself and begins the progress over again.

Another bug I encountered during development was that when you play again, you would then face the 10 questions that were just played, as well as another 10 added on to the end. In order to fix this, every time the beginGame function is called, the array will be cleared. This resolves this issue.

The worst bug I encountered occurs every time the game is played again after completing one round. After a random number of questions, once the timer is up, the options to answer the question will not be made visible. This can be bypassed by refreshing the page, however, this is not a permanent fix. The cause of this was the shift method used in the loadQuestion function. I am not too sure how working with the one object effected another, however, I think it may have been to do with how Javascript stores objects in memory.

## **Deployment**

### Cloning / Forking Repository

In order to Fork the Repository, please follow the instructions below.
 1. Navigage to [this](https://github.com/browne878/Car-Quiz-PP2) repository.
 2. Next, in the top left of the page, click the fork button.
 3. If you are a member of a team, you may need to choose where to Fork the repository too.

Once you have forked the Repository, you can then clone it to your local machine. To do so, please follow the instructions below.
 1. Navigate to your Forked repository.
 2. Click the green Code button above the repositories files.
 3. Copy the URL in the dropdown window.
 4. Next, open command prompt.
 5. After this, navigate to the directory you would like to clone the repository too with the following command.
 ```
cd <clone location>
 ```
 6. Then, run the following command.
 ```
git clone <URL>
 ```

You have now forked and cloned the repository.

### Local Deployment

These instructions will tell you how to deploy the repository on your local machine with VSCode and the extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Please ensure you have VSCode and the Live Server extension installed before beginning the following steps.

1. First, follow the steps for Cloning and Forking the repository so you have the repository locally.
2. Open the folder with VSCode by doing one of the following:
    - Right click the file and click `Open with Code`
    - Open command prompt, navigate inside the directiory and run the command `code .`
    - Open VSCode, click file, open folder and then navigate to the repository folder and open it.
3. Next, at the very bottom of the window, there will be a button that says `Go Live`. Click this button and it will deploy it locally and open it in your default browser for you to view.

### Remote Deployment

I deployed this website using GitHub Pages. The steps I took to do this are as follows.

1. Start by navigating to the GitHub repository.
2. Next, towards the top of the page, navigate to the `Settings` tab.
3. After this, on the menu of the left of the page, click on the `Pages` tab.
4. Now, click the `Branch` dropdown menu and select `Main` or whatever the name of your main branch is.
5. Finally, wait for the site to be published. This can take a few moments. The link will be shown at the top of the page.

The link to my published website is: https://browne878.github.io/Car-Quiz-PP2/

## **Credits**
[Background Image](assets/images/race-background.jpg) downloaded from [Pexels](https://www.pexels.com/photo/grey-coupe-on-road-3136673/).

[Timer Function](https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/) was taken and adapted for the timer and progress bar.
