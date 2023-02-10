import  '../assets/style.css';

const SingleQuiz = () => {
    return (<div>
        <header id='main-header'>
    </header>

    <div id="Quiz-content">
        <div class="Rules-questions">
            <h1>English quiz </h1>
            <h3>Test your knowlede </h3>
        </div>
        <button id="start-game">Start</button>


    </div>
    <section id="Gamescreen" class="hide"> 
        <h1 id="questions-container"></h1>
        <div id="Answers" class="hidden button-layout">
            <button class="ans" id='ans1'>ans1 </button>
            <button class="ans" id='ans2'>asn2</button>
            <button class="ans" id='ans3'>ans3</button>
            <button class="ans" id='ans4'>ans4</button>
        </div>

        <div id="messageBox">
            <div class="results"> </div>
        </div>

    </section>

    <section id = "GameoverScreen" class="hide">
        <div class="clearfix">
            <div class="card">
              <h2>Save Highscore</h2>
              <form >
                <div class="input-group">
                  <label for="e">Enter your initals</label>
                  <input type="text"  id="initals" placeholder="Your initals" />
                </div>
                <div id="msg"></div>
                <button id="submit">Submit</button>
                <button >Play again </button>
              </form>
            </div>
            
          </div>
        </section>
        <div id="highScore" class="hide">
              <h2>High Scores:</h2>
              <h1><strong></strong> <span id="highScores"></span></h1>

              <button id="exitHighscoreButton">exit </button>
            </div></div>
    
   

    );
} 

export default SingleQuiz;