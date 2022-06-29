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

function T2_selectedQuizzeRender(id){
    quizzId = id;
    console.log(quizzId);
    let promisse = axios.get(`${urlAPI}/quizzes/${quizzId}`);
    promisse.catch(T2_selectErro);
    promisse.then(T2_selectSuccess);
} 

function T2_selectErro(erro){
    console.log(erro);
}

function T2_selectSuccess(success){
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
        document.querySelector(".T2-questions").innerHTML += `  <li class="T2-question-box p${cont}">
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
    let teste = elemento.querySelector("p").innerHTML;
    let num = elemento.parentNode.parentNode.classList;
    num = num[1].replace("p", '');
    let correta = questionsQuizz[num].answers.filter((essa) => essa.isCorrectAnswer === true)

    if(correta[0].text === teste){
        elemento.querySelector("p").parentNode.classList.add("correct")
    }
    
}   

function comparador() { 
	return Math.random() - 0.5; 
}