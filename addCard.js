    document.addEventListener("DOMContentLoaded", () => {
        const openFormBtn = document.querySelector(".abrirform")
        const closeFormBtn = document.getElementById("FecharForm")
        const formContainer = document.getElementById("form-container")
        const cardForm = document.getElementById("card-form")
        const container = document.getElementById("container")

        openFormBtn.addEventListener("click", () => {
            formContainer.style.display = "block"
        })

        closeFormBtn.addEventListener("click", () => {
            formContainer.style.display = "none"
            cardForm.reset()
        })

        cardForm.addEventListener("submit", (event) => {
            event.preventDefault()

            // Pegando os valores
            const titulo = document.getElementById("titulo").value
            const data = document.getElementById("data").value
            const tag1 = document.getElementById("tag1").value
            const tag2 = document.getElementById("tag2").value
            const tag3 = document.getElementById("tag3").value
            const resumo = document.getElementById("resumo").value
            const imagemInput = document.getElementById("imagem")
            const imagem = imagemInput.files[0]

            // Criando o card
            const newCard = document.createElement("div")
            newCard.classList.add("card")
            newCard.innerHTML = `
            <img src="${URL.createObjectURL(imagem)}" alt="Imagem de Destaque">
            <h2>${titulo}</h2>
            <p>Data de Publicação: ${data}</p>
            <p>Tags: <a href="#">${tag1}</a>, <a href="#">${tag2}</a>, <a href="#">${tag3}</a></p>
            <p>Resumo da Postagem: ${resumo}</p>
            <a href="#">Leia mais</a>
            `
            container.appendChild(newCard)

            // Limpando o form e escondendo
            cardForm.reset()
            formContainer.style.display = "none"
        })
    })
