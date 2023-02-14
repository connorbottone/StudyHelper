import '../../public/js/quiz';
import '../../public/css/style.css';

<body>
    <div class="container">

        <div id="display-page">
            <header id="header">
                <h1 class="h1">Coding Quiz!</h1>
                <p id="timer"></p>
            </header>


            <div id="show">
                <h2>Coding Quiz Challenge</h2>
                <p>Try to answer the following code-related questions within the time limit. Keep in Mind that incorrect
                    answers will penalize your score/time by ten seconds!</p>
                <button class="startBtn" id="start-button">Start</button>
            </div>
        </div>

        <div id="quiz" class="hide">
            <div id="questions">
                <p id = 'question'></p>
                <div id="options"></div>
            </div>
        </div>
        <div id="selection" class="hide">
            
            <button id='option1'>Option 1</button>
            <button id="option2">Option 2</button>
            <button id="option3">Option 3</button>
            <button id="option4">Option 4</button>
            <div id="result">
            </div>
        </div>
    </div>

    <div id="end" class = 'hide'>
        <h1>Congrats!</h1>
        <h2>You have completed the quiz!</h2>
        <p id="js-score"></p>
        <label>Enter your initials</label>
        <input id="js-initials" type="text"></input>
        
        <button id="js-submitBtn">Submit</button>
        <div id="js-highscores"></div>
    </div>
</body>

