let currentQuestion = 0;
let rightAnswer;

function init() {
    document.getElementById('all-questions').innerHTML = Questions.length;
    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= Questions.length) {

    } else {
        let question = Questions[currentQuestion];
        document.getElementById('currentQuestion').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
sd

}

function answer(answer) {

    document.getElementById('btn').disabled = false;

    let question = Questions[currentQuestion];
    let select = answer.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;


    if (select == question['right_answer']) {
        console.log("richtige antwort");
        document.getElementById(answer).classList.add('bg-success');
    } else {
        console.log("falsche antwort");
        document.getElementById(answer).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');

    }

}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('btn').disabled = true;
    reset();
    showQuestion();


}

function reset() {
    document.getElementById('answer_1').classList.remove('bg-success');
    document.getElementById('answer_1').classList.remove('bg-danger');

    document.getElementById('answer_2').classList.remove('bg-success');
    document.getElementById('answer_2').classList.remove('bg-danger');

    document.getElementById('answer_3').classList.remove('bg-success');
    document.getElementById('answer_3').classList.remove('bg-danger');

    document.getElementById('answer_4').classList.remove('bg-success');
    document.getElementById('answer_4').classList.remove('bg-danger');
}