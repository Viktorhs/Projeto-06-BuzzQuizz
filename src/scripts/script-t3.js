let T3_1 = `
<div class="T3-header">Comece pelo começo</div>
    <div class="T3-box">
        <input type="text" placeholder="Título do seu quizz">
        <input type="text" placeholder="URL da imagem do seu quizz">
        <input type="text" placeholder="Quantidade de perguntas do quizz">
        <input type="text" placeholder="Quantidade de níveis do quizz">
    </div>
<div class="T3-btn" onclick="btnCreateQuizz(this)">Prosseguir pra criar perguntas</div>`

let T3_2 = `
<div class="T3-header">Crie suas perguntas</div>
        <div class="T3-box">
            <div class="T3-b1">
                <div class="T3-h">
                    <div>
                        <h1>Pergunta 1</h1>
                        <img class="T3-icon" onclick="toggleExpandQuestion(this)" src="img/edit.svg">
                    </div>
                    <input type="text" placeholder="Texto da pergunta">
                    <input type="text" placeholder="Cor de fundo da pergunta">
                </div>
                <div class="T3-correctAnswer">
                    <h1>Resposta correta</h1>
                    <input type="text" placeholder="Resposta correta">
                    <input type="text" placeholder="URL da imagem">
                </div>
                <div class="T3-incorrectAnswer1">
                    <h1>Respostas incorretas</h1>
                    <input type="text" placeholder="Resposta incorreta 1">
                    <input type="text" placeholder="URL da imagem 1">
                </div>
                <div class="T3-incorrectAnswer2">
                    <input type="text" placeholder="Resposta incorreta 2">
                    <input type="text" placeholder="URL da imagem 2">
                </div>
                <div class="T3-incorrectAnswer3">
                    <input type="text" placeholder="Resposta incorreta 3">
                    <input type="text" placeholder="URL da imagem 3">
                </div>
            </div>

            <div class="T3-b2">
                <div class="T3-h">
                    <div>
                        <h1>Pergunta 2</h1>
                        <img class="T3-icon" onclick="toggleExpandQuestion(this)" src="img/edit.svg">
                    </div>
                    <input type="text" placeholder="Texto da pergunta">
                    <input type="text" placeholder="Cor de fundo da pergunta">
                </div>
                <div class="T3-correctAnswer">
                    <h1>Resposta correta</h1>
                    <input type="text" placeholder="Resposta correta">
                    <input type="text" placeholder="URL da imagem">
                </div>
                <div class="T3-incorrectAnswer1">
                    <h1>Respostas incorretas</h1>
                    <input type="text" placeholder="Resposta incorreta 1">
                    <input type="text" placeholder="URL da imagem 1">
                </div>
                <div class="T3-incorrectAnswer2">
                    <input type="text" placeholder="Resposta incorreta 2">
                    <input type="text" placeholder="URL da imagem 2">
                </div>
                <div class="T3-incorrectAnswer3">
                    <input type="text" placeholder="Resposta incorreta 3">
                    <input type="text" placeholder="URL da imagem 3">
                </div>
            </div>

            <div class="T3-b3">
                <div class="T3-h">
                    <div>
                        <h1>Pergunta 3</h1>
                        <img class="T3-icon" onclick="toggleExpandQuestion(this)" src="img/edit.svg">
                    </div>
                    <input type="text" placeholder="Texto da pergunta">
                    <input type="text" placeholder="Cor de fundo da pergunta">
                </div>
                <div class="T3-correctAnswer">
                    <h1>Resposta correta</h1>
                    <input type="text" placeholder="Resposta correta">
                    <input type="text" placeholder="URL da imagem">
                </div>
                <div class="T3-incorrectAnswer1">
                    <h1>Respostas incorretas</h1>
                    <input type="text" placeholder="Resposta incorreta 1">
                    <input type="text" placeholder="URL da imagem 1">
                </div>
                <div class="T3-incorrectAnswer2">
                    <input type="text" placeholder="Resposta incorreta 2">
                    <input type="text" placeholder="URL da imagem 2">
                </div>
                <div class="T3-incorrectAnswer3">
                    <input type="text" placeholder="Resposta incorreta 3">
                    <input type="text" placeholder="URL da imagem 3">
                </div>
            </div>

        </div>
        <div class="T3-btn" onclick="btnCreateQuizz(this)">Prosseguir pra criar níveis</div>`

let T3_3 = `
<div class="T3-header">Agora, decida os níveis!</div>
<div class="T3-box">
    <div class="T3-b1">
        <div class="T3-h">
            <div>
                <h1>Nível 1</h1>
                <img class="T3-icon" onclick="toggleExpandLevel(this)" src="img/edit.svg">
            </div>
            <input type="text" placeholder="Título do nível">
            <input type="text" placeholder="% de acerto mínima">
            <input type="text" placeholder="URL da imagem do nível">
            <textarea type="text" placeholder="Descrição do nível" rows="5"></textarea>
        </div>
    </div>
</div>
<div class="T3-box">
    <div class="T3-b2">
        <div class="T3-h">
            <div>
                <h1>Nível 2</h1>
                <img class="T3-icon" onclick="toggleExpandLevel(this)" src="img/edit.svg">
            </div>
            <input type="text" placeholder="Título do nível">
            <input type="text" placeholder="% de acerto mínima">
            <input type="text" placeholder="URL da imagem do nível">
            <textarea type="text" placeholder="Descrição do nível" rows="5"></textarea>
        </div>
    </div>
</div>
<div class="T3-box">
    <div class="T3-b3">
        <div class="T3-h">
            <div>
                <h1>Nível 3</h1>
                <img class="T3-icon" onclick="toggleExpandLevel(this)" src="img/edit.svg">
            </div>
            <input type="text" placeholder="Título do nível">
            <input type="text" placeholder="% de acerto mínima">
            <input type="text" placeholder="URL da imagem do nível">
            <textarea type="text" placeholder="Descrição do nível" rows="5"></textarea>
        </div>
    </div>
</div>
<div class="T3-btn" onclick="btnCreateQuizz(this)">Finalizar Quizz</div>`

let T3_4 = `
<div class="T3-header">Seu quizz está pronto!</div>
<div class="T3-boxQuizz">
    <img src="img/quizzHP.png">
    <h1>O quão Potterhead é você?</h1>
</div>
<div class="T3-btn" onclick="btnCreateQuizz(this)">Acessar Quizz</div>
<div class="T3-btn2" onclick="btnCreateQuizz(this)">Voltar pra home</div>`