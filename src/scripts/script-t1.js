const urlAPI = 'https://mock-api.driven.com.br/api/v7/buzzquizz'
let quizzesAllUsers;
let idQuizzUserSerializados = localStorage
let idQuizzUser = [];
let oldLocal = []
let T1templateUserQuizzesEmpty = `<div class="T1-user-quizzes-empty">
                                    <p>Você não criou nenhum quizz ainda :(</p>
                                    <div>Criar Quizz</div>
                                </div>`

let T1templateUserQuizzes =`<div class="T1-user-quizzes">
                            <span>
                                <h2>Seus Quizzes</h2>
                                    <ion-icon name="add-circle" onClick = "T3_baseHTML()"></ion-icon>
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
    if(idQuizzUserSerializados.length != 0){
        document.querySelector(".T1-user").innerHTML =`<div class="T1-user-quizzes">
                                                            <span>
                                                                <h2>Seus Quizzes</h2>
                                                                    <ion-icon name="add-circle" onClick = "T3_baseHTML()"></ion-icon>
                                                            </span>
                                                            <ul>
                                                            </ul>
                                                        </div>`
    }else{
        document.querySelector(".T1-user").innerHTML = `<div class="T1-user-quizzes-empty">
                                                            <p>Você não criou nenhum quizz ainda :(</p>
                                                            <div onClick = "T3_baseHTML()">Criar Quizz</div>
                                                        </div>`
    }

}


function T1_renderAllQuizzes() {
    let promisse = axios.get(`${urlAPI}/quizzes`)
    promisse.catch(T1_renderAllError = () => alert('Erro em obter os Quizzes volte mais tarde!'));
    promisse.then(T1_renderAllSuccess)
    TLoading()
}

function T1_renderUserQUizzes() {
    idQuizzUser = []
    for(let i = 0; i < idQuizzUserSerializados.length; i++){
        idQuizzUser.push(JSON.parse(idQuizzUserSerializados[i]))
        document.querySelector(".T1-user-quizzes ul").innerHTML +=   `<li id = "${i}">
                                                                        <img src="${idQuizzUser[i].image}">
                                                                        <div onClick ="T2_idQuizz(${idQuizzUser[i].id})"><h3>${idQuizzUser[i].title}</h3></div>
                                                                        <span class = "buttons-edit-del">
                                                                        <ion-icon name="create-outline"></ion-icon>
                                                                        <ion-icon name="trash-outline" onClick = "deleteQuizz(${i})"></ion-icon>
                                                                        </span>
                                                                        </li>`

        
    }


}

function T1_renderAllSuccess(success) {
    T1_HTMLBase()
    T1_renderUserSuccess()
    T1_renderUserQUizzes()
    quizzesAllUsers = success.data
    for(let i = 0; i < quizzesAllUsers.length; i++){
        document.querySelector(".T1-all-quizzes ul").innerHTML +=   `<li onClick ="T2_idQuizz(${quizzesAllUsers[i].id})">
                                                                        <img src="${quizzesAllUsers[i].image}">
                                                                        <div><h3>${quizzesAllUsers[i].title}</h3></div>
                                                                    </li>`
    }


}

function T3_baseHTML(){
    document.querySelector("main").innerHTML = `
    <div class="T3-header">Comece pelo começo</div>
    <div class="T3-box">
        <div class="T3-b">
            <input type="text" placeholder="Título do seu quizz">
            <input type="text" placeholder="URL da imagem do seu quizz">
            <input type="text" placeholder="Quantidade de perguntas do quizz">
            <input type="text" placeholder="Quantidade de níveis do quizz">
        </div>
    </div>
    <div class="T3-btn" onclick="btnCreateQuizz(this)">Prosseguir pra criar perguntas</div>`
}

function TLoading() {
    document.querySelector("main").innerHTML = `        <div class="loading">
                                                            <div class="loader">Loading...</div>
                                                            <h1>Carregando</h1>
                                                        </div>`

}

function deleteQuizz(id){
    if (window.confirm("Seu quizz sera apagado tudo bem?")) {
        TLoading()
        let key = idQuizzUser[id].key;
        let promisse = axios.delete(`${urlAPI}/quizzes/${idQuizzUser[id].id}`, {
            headers: {
                'Secret-Key': key
            }
          })
        promisse.catch(() => alert("Erro na remoção do quizz"))
        promisse.then(() => {
            idQuizzUserSerializados = localStorage
            localStorangeOrg(id)
            T1_backHome()})
      }
}

function localStorangeOrg(id) {
    let oldLocal = [];
    for(let i = 0; i < idQuizzUserSerializados.length ; i++){
        if(i !== id){
            oldLocal.push(JSON.parse(idQuizzUserSerializados[i]))
            
        }
    }
    
    localStorage.clear()

    for(let i = 0 ; i < oldLocal.length ; i++){
        localStorage[localStorage.length] = JSON.stringify(oldLocal[i])
    }
}

function T1_backHome(){
    T1_HTMLBase()
    T1_renderUserSuccess()
    T1_renderAllQuizzes()
    cleanQuizzId()
}

T1_renderAllQuizzes()
