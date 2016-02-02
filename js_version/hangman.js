window.onload = function() {


    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


    var categories;    // array of the catagories
    var chosenCategory;
    var word;          //the array of the words
    var guess;
    var geusses = [ ]; // stored guesses
    var lives;         // int 
    var counter;       // int: correct guesses
    var space;         // int: numOf the space in word


    // GETTERS
    var showLives    = document.getElementById("mylives");
    var showCategory = document.getElementById("scatagory");
    var getHint      = document.getElementById("hint");
    var showClue     = document.getElementById("clue");


    // CREATE ALPHABET UL

    var buttons = function() {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    };

    // SELECT CATAGORY
    var selectCat = function() {
        if (chosenCategory === categories[0]) {
            catagoryName.innerHTML = "The Chosen Category Is City";
        } else if (chosenCategory === categories[1]) {
            catagoryName.innerHTML = "The Chosen Category Is TV Show";
        } else if (chosenCatagory === categories[2]) {
            catagoryName.innerHTML = "The Chosen Category Is Film";
        }else{
        		caragoryName.innerHTML = "Catagory Name goes here.";
        }
    };

    // CREATES GUESSES UL
    var result = function() {

        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innnerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    };


    // SHOW LIVES

    var comments = function() {
            showLives.innerHTML = "You have " + lives + " lives";
            if (lives < 1) {
                showLives.innerHTML = "GAME OVER";
            }
            for (var i = 0; i < guesses.length; i++) {
                if (counter + space === guesses.length) {
                    showLives.innerHTML = "You win!";
                } // if
            } // for
        }; // comments function


    // ANIMATION MAN
    var animate = function() {
        var drawMe = lives;
        drawArray[drawMe]();
    };


    // HANGMAN

    var canvas = function() {
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 3;
    };


    var head = function() {
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI * 2, true);
        context.stroke();
    };

    // DRAW METHIOD USED FOR CREATING THE IMAGES

    var draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    };

    var frame1 = function() {
        draw(0, 150, 150, 150);
    };

    var frame2 = function() {
        draw(10, 0, 10, 600);
    };

    var frame3 = function() {
        draw(0, 5, 70, 5);
    }

    var frame4 = function() {
        draw(60, 70, 20, 100);
    };

    var torso = function() {
        draw(60, 36, 60, 70);
    };

    var leftArm = function() {
        draw(60, 46, 20, 50);
    };

    var rightArm = function() {
        draw(60, 46, 100, 50);
    };

    var leftLeg = function() {
        draw(60, 70, 20, 100);
    };

    var rightLeg = function() {
        draw(60, 70, 100, 100);
    };

    var drawArray = [leftLeg, rightLeg, leftArm, rightArm, torso, head, frame4, frame3, frame2, frame1];

    // ONCLICK FUNCTION

    var check = function() {
        list.onclick = function() {
            var geuss = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    guesses[i].innerHTML = geuss;
                    counter++;
                }
            }
            var j = (word.indexOf(geuss)); // use the index of to search the input letters
            if (j === -1) {
                lives--;
                comments();
                animate();
            } else {
                comments();
            }
        }
    };

    var play = function() {
        categories = [
            ["waterloo", "paris", "london", "manhattan", "chicago"],
            ["lie-to-me", "revenge", "mad-man", "girls", "morden-family"],
            ["minions", "pitch-perfect", "run-rola-run", "he-is-just-not-that-into-you", "by-the-sea"]
        ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        guesses = [];
        lives = 15;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();
    };

    play();

    // HINT		
    hint.onclick = function() {
        hints = [
            ["uw", "french", "bbc", "us", "us"],
            ["lightman", "emily-throne", "about-ads", "just-guess", "about-family"],
            ["yellow-features", "music", "dramtic-movie", "romance", "just-guess"]
        ];

        var catagoryIndex = categories.indexOf(chosenCategory);
        var hintIndex = chosenCategory.indexOf(word);
        showClue.innerHTML = "CLUE - " + hints[catagoryIndex][hintIndex];

    };

    // RESET
    document.getElementById('reset').onclick = function() {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        showClue.innerHTML = "";
        context.clearRect(0, 0, 400, 400);
        play();
    };
};

