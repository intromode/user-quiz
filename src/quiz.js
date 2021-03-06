import calculateHowActive from './how-active.js';
import calculateDreamJob from './calc-dreamjob.js';

const username = window.localStorage.getItem('username');
const usernameDisplay = document.getElementById('username-display');
usernameDisplay.textContent = username;

const quizForm = document.getElementById('quiz-form');
const howActive = document.getElementById('how-active');
const impactOrMoney = document.getElementById('impact-or-money');


quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(quizForm); //for hangoutWith


    const quizAnswers = {
        active: howActive.value,
        hangoutWith: formData.get('hangout-with'),
        impactMoney: impactOrMoney.value
    };

    const usersScores = {
        researcher: 0,
        professionalAthlete: 0
    };

    calculateHowActive(quizAnswers.active, usersScores); //now usersScores has updated scores
    const dreamJobResults = calculateDreamJob(usersScores);

    window.localStorage.setItem('dream-job', dreamJobResults);
    window.location = 'results.html'; //doesnt need file path
    
});