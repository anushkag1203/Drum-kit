//button press...
var count = document.querySelectorAll(".set button");
for (var i = 0; i < count.length; i++) {//here we required for loop as we have 7 buttons and applied the function to only them.
    document.getElementsByTagName("button")[i].addEventListener("click", function () {

        this.addEventListener("mouseenter", function () { this.style.color = "white" });
        this.addEventListener("mouseleave", function () { this.style.color = "#DA0463" });
        var letter = this.textContent;
        makeSound(letter);
        buttonAnimation(letter);

    });
}
//keyboard press...
document.addEventListener("keypress", function (event) {//here we selected the whole document as we don't need button press here.Therefore,
    makeSound(event.key);                                //is is automatically applied to all.
    buttonAnimation(event.key);
    

})

function makeSound(letter) {
    var sound;
    switch (letter) {
        case 'w':
            { sound = 'sounds/tom-1.mp3'; break; }
        case 'a':
            { sound = 'sounds/tom-2.mp3'; break; }
        case 's':
            { sound = 'sounds/tom-3.mp3'; break; }
        case 'd':
            { sound = 'sounds/tom-4.mp3'; break; }
        case 'j':
            { sound = 'sounds/snare.mp3'; break; }
        case 'k':
            { sound = 'sounds/crash.mp3'; break; }
        case 'l':
            { sound = 'sounds/kick-bass.mp3'; break; }

        default: console.log("Soryy no match");
    }
    var audio = new Audio(sound);
    audio.play();
}


function buttonAnimation(currentKey) {
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function () {
        activeKey.classList.remove("pressed");
    }, 100);
}

