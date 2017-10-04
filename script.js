let bilde = document.querySelector("img.powerpuffpicture");
let otrabilde = document.querySelector("img.mojojojo");

let shakeButton = document.querySelector("#shake");
shakeButton.addEventListener('click',startshaking);
function startshaking(){
    console.log("startshaking");
    bilde.classList.toggle('shakeCSS');
}


let moveButton = document.querySelector("#move");
moveButton.addEventListener('click',startmoving);
function startmoving(){
    console.log("startmoving");
    bilde.classList.toggle('moveCSS');
}


let move30Button = document.querySelector("#move30");
move30Button.addEventListener('click',startmoving30);
function startmoving30(){
    console.log("startmoving30");
    bilde.classList.add('move30CSS');
}

let movefrom30Button = document.querySelector("#movefrom30");
movefrom30Button.addEventListener('click',startmovingfrom30);
function startmovingfrom30(){
    console.log("startmovingfrom30");
    bilde.classList.add('movefrom30CSS');
}

let jumpButton = document.querySelector("#jump");
jumpButton.addEventListener('click',starttojump);
function starttojump(){
    console.log("starttojump");
    bilde.classList.add('jumpCSS');
}

let jumpingButton = document.querySelector("#jumping");
jumpingButton.addEventListener('click',startjumping);
function startjumping(){
    console.log("startjumping");
    bilde.classList.toggle('jumpingCSS');
}

let fadeinandoutButton = document.querySelector("#fadeinandout");
fadeinandoutButton.addEventListener('click',startfadinginandout);
function startfadinginandout(){
    console.log("startfadinginandout");
    bilde.classList.toggle('fadeCSS');
}

let falldownButton = document.querySelector("#falldown");
falldownButton.addEventListener('click',startfallingdown);
function startfallingdown(){
    console.log("startfallingdown");
    bilde.classList.toggle('falldownCSS');
}

let talkButton = document.querySelector("#talk");
talkButton.addEventListener('click',starttalking);
function starttalking(){
    console.log("starttalking");
    bilde.classList.add('talkCSS');
}

let hitButton = document.querySelector("#hit");
hitButton.addEventListener('click', hither);
function hither(){
    console.log("hither");
    otrabilde.classList.add('hitCSS');

}

let reactButton = document.querySelector("#react");
reactButton.addEventListener('click', startreacting);
function startreacting(){
    console.log("react");
    bilde.classList.add('reactCSS');
}
