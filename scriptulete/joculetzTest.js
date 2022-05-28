
let afisat = document.getElementById("puncte");
let cerc = document.getElementById("cerculet");
sessionStorage.setItem('scor', 0);

function stergere() {
    
    sessionStorage.clear();
    sessionStorage.setItem("scor", 0);
    afisat.innerHTML = "Punctajul tau actual :" + parseInt(sessionStorage.getItem("scor"));

}
function stergereTotal() {
    localStorage.clear();
    document.getElementById('id01').style.display = 'none';
    document.getElementById('id01').style.display = 'block';
  
}

const NumarScoruri = 5;
const highScoreString = localStorage.getItem('highScores');

function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const highScoreList = document.getElementById('highScores');

    highScoreList.innerHTML = highScores
        .map((score) => `<li>${score.score} - ${score.name}`)
        .join('');
}

function checkHighScore(score) {
    console.log(sessionStorage.getItem("scor"));
    const highScores = JSON.parse(localStorage.getItem('highScores')) ?? [];
    const lowestScore = highScores[NumarScoruri - 1]?.score ?? 0;

    if (score > lowestScore) {
        const name = prompt('You got a highscore! Enter name:');
        const newScore = { score, name };
        saveHighScore(newScore, highScores);
        showHighScores();
    }
    else
        showHighScores();

}

function saveHighScore(score, highScores) {
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(NumarScoruri);
    localStorage.setItem('highScores', JSON.stringify(highScores));
}
function getScor() {
    return parseInt(sessionStorage.getItem("scor"));
}

function start() {
   
    cerc.addEventListener('mouseover', win);
    function win() {
        cerc.setAttribute("fill", "green");
        clearInterval(timer);
        cerc.removeEventListener('mouseover', win);

        setTimeout(() => {

            cerc.setAttribute("fill", "yellow");
            cerc.setAttribute("cx", 20);
            cerc.setAttribute("cy", 20);

            let numar = parseInt(sessionStorage.getItem("scor"));
            if (numar == 0)
                sessionStorage.setItem("scor", 1);
            else
                sessionStorage.setItem("scor", numar + 1);
            afisat.innerHTML = "Punctajul tau actual :" + parseInt(sessionStorage.getItem("scor"));
            console.log(parseInt(sessionStorage.getItem("scor")));
            }, 2000);
    }
    let timer;
    var cauta2 = document.getElementById("nivel");
    var cauta = cauta2.value;
    if (cauta == 1)
        timer = setInterval(jump, 700);
    else if (cauta == 2)
        timer = setInterval(jump, 400);
    else if (cauta == 3)
        timer = setInterval(jump, 300);
    else
        timer = setInterval(jump, 200);

    let counter = 0;

    function jump() {

        let x = Math.floor(Math.random() * (1900 - 0 + 1) - 0);
        //console.log("x:"+x);
        let y = Math.floor(Math.random() * (650 - 0 + 1) - 0);
        //console.log("y:" + y)
        cerc.setAttribute("cx", parseInt(x));
        cerc.setAttribute("cy", parseInt(y));

        counter++;

        if (counter == 15) {
            cerc.setAttribute("fill", "red");
            clearInterval(timer);
            cerc.removeEventListener('mouseover', win);
            cerc.setAttribute("cx", 20);
            cerc.setAttribute("cy", 20);
        }
    }
}

// FUNCTIA RAMBO

function ramboModeON() {

    let ramboCounter = 0;
    cerc.addEventListener('mouseover', win);

    function win() {

        cerc.setAttribute("fill", "green");

        ramboCounter++;

        afisat.innerHTML = "Punctajul tau actual :" + ramboCounter;
       
    }
    let timer = setInterval(jump, 700);
 
    let counter = 0;

    function jump() {

        cerc.setAttribute("fill", "red");

        let x = Math.floor(Math.random() * (1900 - 0 + 1) - 0);
        let y = Math.floor(Math.random() * (650 - 0 + 1) - 0);

        cerc.setAttribute("cx", parseInt(x));
        cerc.setAttribute("cy", parseInt(y));


        counter++;

        if (counter == 50) {
            cerc.setAttribute("fill", "red");
            clearInterval(timer);
            cerc.removeEventListener('mouseover', win);
            cerc.setAttribute("cx", 20);
            cerc.setAttribute("cy", 20);
            afisat.innerHTML = ("Scorul pe care ai reusit sa-l aduni este : " + ramboCounter + " dintr-un total posibil de 50");
            ramboCounter = 0;
        }
    }
}