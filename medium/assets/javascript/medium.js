/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){
    // background
    let changeBg = $("#content");
    //Team One
    let oneShoot = $("#teamone-shoot");
    let oneShots = $("#teamone-numshots");
    let oneGoals = $("#teamone-numhits");
    //Team Two
    let twoShoot = $("#teamtwo-shoot");
    let twoShots = $("#teamtwo-numshots");
    let twoGoals = $("#teamtwo-numhits");
    //Reset
    let reset = $("#reset");
    let resetCounter = $("#num-resets");
    //Sound
    // let shotSound = $("#shotSound");
    // let scoreSound = $("#scoreSound");
    // let buzzer = $("#buzzer");
    let shotSound = document.querySelector("#shotSound");
    let scoreSound = document.querySelector("#scoreSound");
    let buzzer = document.querySelector("#buzzer");


    //Team One Function
    oneShoot.click("click", function(){

      shotSound.play();

      oneShots.html(parseInt(oneShots.html())+ 1)

      let shot = (Math.floor(Math.random() * 2) == 0);
      if (shot){
        oneGoals.html(parseInt(oneGoals.html()) + 1);
        changeBg.css("background-color","rgba(242, 130, 124, 0.4)");
        scoreSound.play();
      }
    })

    //Team Two Function
    twoShoot.click("click", function(){

      shotSound.play();

      twoShots.html(parseInt(twoShots.html())+ 1)

      let shot = (Math.floor(Math.random() * 2) == 0);
      if (shot){
        twoGoals.html(parseInt(twoGoals.html()) + 1);
        changeBg.css("background-color","rgba(124, 242, 124, 0.4)");
        scoreSound.play();
      }
    })

    //Reset Function
    reset.click("click", function(){

      resetCounter.html(parseInt(resetCounter.html()) + 1);

      buzzer.play();

      if (oneGoals.html() > twoGoals.html()) {
        alert("Fighting Mongooses Win!")
      } else if (twoGoals.html() > oneGoals.html()) {
        alert("Coney Island Whitefish Win!")
      } else {
        alert("No one likes a draw...")
      }

      oneShots.html(0);
      oneGoals.html(0);
      twoShots.html(0);
      twoGoals.html(0);

      changeBg.css("background-color", "rgba(211, 211, 211, 0.4)");

    })




    })

})();
