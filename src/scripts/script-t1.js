const urlAPI = 'https://mock-api.driven.com.br/api/v4/buzzquizz'
let quizzesAllUsers;
let T1templateUserQuizzesEmpty = `<div class="T1-user-quizzes-empty">
                                    <p>Você não criou nenhum quizz ainda :(</p>
                                    <div>Criar Quizz</div>
                                </div>`

let T1templateUserQuizzes =`<div class="T1-user-quizzes">
                            <span>
                                <h2>Seus Quizzes</h2>
                                    ion-icon name="add-circle"></ion-icon>
                            </span>

                            <ul>
                                <li>
                                    <img src="https://tm.ibxk.com.br/2022/05/14/14202003339016.jpg?ims=1200x675" alt="">
                                    <div><h3>Titulo do Quizz</h3></div>
                                </li>
                            </ul>
                            </div>`

let T1templateAllrQuizzes = `<div class="T1-all-quizzes">
                            <h2>Todos os Quizzes</h2>
                            <ul>
                                <li>
                                    <img src="https://tm.ibxk.com.br/2022/05/14/14202003339016.jpg?ims=1200x675" alt="">
                                    <div><h3>Titulo do Quizz</h3></div>
                                </li>
                                <li>
                                    <img src="https://tm.ibxk.com.br/2022/05/14/14202003339016.jpg?ims=1200x675" alt="">
                                    <div><h3>Titulo do Quizz</h3></div>
                                </li>
                                <li>
                                    <img src="https://tm.ibxk.com.br/2022/05/14/14202003339016.jpg?ims=1200x675" alt="">
                                    <div><h3>Titulo do Quizz</h3></div>
                                </li>
                                <li>
                                    <img src="https://tm.ibxk.com.br/2022/05/14/14202003339016.jpg?ims=1200x675" alt="">
                                    <div><h3>Titulo do Quizz</h3></div>
                                </li>
                            </ul>
                            </div>`


function T1_HTMLBase() {
    document.querySelector("main").classList.add("t1")
    document.querySelector("main").innerHTML = `   
                                                    <div class="T1-user">
                                                    </div>
                                                    </>
                                                    <div class="T1-all-quizzes">
                                                        <h2>Todos os Quizzes</h2>
                                                        <ul>
                                                        </ul>
                                                    </div>`
}

function T1_renderUserSuccess() {
    document.querySelector(".T1-user").innerHTML = `<div class="T1-user-quizzes-empty">
                                                                <p>Você não criou nenhum quizz ainda :(</p>
                                                                 <div>Criar Quizz</div>
                                                            </div>`
                                                            

}


function T1_renderAllQuizzes() {
    let promisse = axios.get(`${urlAPI}/quizzes`)
    promisse.catch(T1_renderAllError = () => alert('Erro em obter os Quizzes volte mais tarde!'));
    promisse.then(T1_renderAllSuccess)
}

function T1_renderAllSuccess(success) {
    quizzesAllUsers = success.data
    for(let i = 0; i < quizzesAllUsers.length; i++){
        document.querySelector(".T1-all-quizzes ul").innerHTML +=   `<li onClick ="T2_selectedQuizzeRender(${quizzesAllUsers[i].id})">
                                                                        <img src="${quizzesAllUsers[i].image}">
                                                                        <div><h3>${quizzesAllUsers[i].title}</h3></div>
                                                                    </li>`
    }
}
T1_HTMLBase()
T1_renderUserSuccess()
T1_renderAllQuizzes()
