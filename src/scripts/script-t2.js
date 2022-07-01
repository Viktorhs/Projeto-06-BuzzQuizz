let T2_templateSelected = ` <div class="T2-img-quizz">
                            <img src="https://tm.ibxk.com.br/2022/05/14/14202003339016.jpg?ims=1200x675" alt="">
                            <div><h3>Titulo do Quizz</h3></div>
                            </div>
                            <ul class="T2-questions">
                            <li class="T2-question-box">
                                <div style="background: #EC362D;">pergunta pergunta pergunta</div>
                                <ul>
                                    <li>
                                        <img src="https://tm.ibxk.com.br/2022/05/14/14202003339016.jpg?ims=1200x675" alt="">
                                        <p>sera essa?</p>
                                    </li>
                                    <li>
                                        <img src="https://tm.ibxk.com.br/2022/05/14/14202003339016.jpg?ims=1200x675" alt="">
                                        <p>sera essa?</p>
                                    </li>
                                    <li>
                                        <img src="https://tm.ibxk.com.br/2022/05/14/14202003339016.jpg?ims=1200x675" alt="">
                                        <p>sera essa?</p>
                                    </li>
                                    <li>
                                        <img src="https://tm.ibxk.com.br/2022/05/14/14202003339016.jpg?ims=1200x675" alt="">
                                        <p>sera essa?</p>
                                    </li>
                                </ul>
                            </li>
                            </ul>`

let quizzId;
let questionsQuizz;
let correct;
let incorrect;

function T2_selectedQuizzeRender(id){
    if(quizzId == undefined){
        quizzId = id;
        let promisse = axios.get(`${urlAPI}/quizzes/${quizzId}`);
        promisse.catch(T2_selectErro);
        promisse.then(T2_selectSuccess);
        correct = 0;
        incorrect = 0;
    }

} 

function T2_selectErro(erro){
    console.log(erro);
}

function T2_selectSuccess(success){
    document.querySelector("main").classList.remove("t1")
    T2_baseHTML(success.data);
    T2_renderQuizzSelected(success.data);
}

function T2_baseHTML(id){

    document.querySelector("main").innerHTML = `<div class="T2-img-quizz">
                                                    <img src="${id.image}" alt="">
                                                    <div><h3>${id.title}</h3></div>
                                                </div>
                                                <ul class="T2-questions">
                                                </ul>`;
}

function T2_renderQuizzSelected(id){
    let cont = 0;
    let answersQuizz;
    questionsQuizz = id.questions;
    for(let i = 0; i < questionsQuizz.length; i++){
        document.querySelector(".T2-questions").innerHTML += `  <li class="T2-question-box p${cont}" id = "${cont}">
                                                                    <div style="background: ${questionsQuizz[i].color};">${questionsQuizz[i].title}</div>
                                                                    <ul>
                                                                    </ul>
                                                                </li>`
        answersQuizz = questionsQuizz[i].answers;
        answersQuizz.sort(comparador);
        for(let i = 0; i < answersQuizz.length; i++){
            document.querySelector(`.p${cont.toString()} ul`).innerHTML +=`<li onClick ="T2_selectAnswers(this)">
                                                                 <img src="${answersQuizz[i].image}" alt="">
                                                                <p>${answersQuizz[i].text}</p>
                                                            </li>`
        }
        cont++
    }
    document.querySelector("header").scrollIntoView()
}

function T2_selectAnswers(elemento){
    let classSelected = elemento.className;
    let num;

    if(classSelected == ""){
        let selectedAnswer = elemento.querySelector("p").innerHTML;
        num = elemento.parentNode.parentNode.classList;
        num = num[1].replace("p", '');
        let allAnswer = elemento.parentNode.querySelectorAll("li")
        let correctAnswer = questionsQuizz[num].answers.filter((answerC) => answerC.isCorrectAnswer === true)
    
        if(correctAnswer[0].text == selectedAnswer){
            elemento.querySelector("p").parentNode.classList.add("correct")
            for(let i = 0; i < allAnswer.length; i++){
                if(allAnswer[i].className != "correct"){
                    allAnswer[i].classList.add("noSelect")
                }
            }

            correct++
        }else{
            elemento.querySelector("p").parentNode.classList.add("incorrect")
            for(let i = 0; i < allAnswer.length; i++){
                if(allAnswer[i].className != "incorrect"){
                    allAnswer[i].classList.add("noSelect")
                }
            }
            incorrect++
        }
        num++
        if(num < allAnswer.length - 1){
            setTimeout(() => document.getElementById(num).scrollIntoView(), 2000)
        }
    }
}   

function comparador() { 
	return Math.random() - 0.5; 
}