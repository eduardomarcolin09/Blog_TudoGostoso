$(document).ready(function() {
    $("#inputPesquisar").on("input", function() {
        var termoPesquisa = $(this).val().toLowerCase()

        $(".card").each(function() {
            var tituloCard = $(this).find("h2").text().toLowerCase() 
            var tagsCard = $(this).find(".tags a").text().toLowerCase()

            // Verifica se o termo de pesquisa está presente no título ou nas tags do card
            if (tituloCard.indexOf(termoPesquisa) > -1 || tagsCard.indexOf(termoPesquisa) > -1) {
                $(this).show() 
            } else {
                $(this).hide() 
            }
        })
    })
})
