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

function T2_selectedQuizzeRender(id){
    let quizzId = id;
    console.log(quizzId);
    let promisse = axios.get(`${urlAPI}/quizzes/${quizzId}`);
    promisse.catch(T2_selectErro);
    promisse.then(T2_selectSuccess);
   //T2_baseHTML(select)
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
    let answersQuizz;
    let cont = 0;
    let questions = id.questions;
    for(let i = 0; i < questions.length; i++){
        document.querySelector(".T2-questions").innerHTML += `<div style="background: ${questions[i].color};">${questions[i].title}</div>
                                                                <ul class="${cont}">
                                                                </ul>`
        answersQuizz = questions[i].answers;
        for(let i = 0; i < answersQuizz.length; i++){
            document.querySelector(`.T2-questions ${cont.toString()}`).innerHTML +=`<li>
                                                                        <img src="${answersQuizz[i].image}" alt="">
                                                                        <p>${answersQuizz[i].text}</p>
                                                                    </li>`
        }
        cont++
    }
}