function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o termo técnico</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let palavra = "";
    let utilizacao = "";
    let exemplos = "";
    let piada = "";
    let tags = "";
  
    // Itera sobre cada resultado da pesquisa.
    for (let dado of dados) {
      palavra = dado.palavra.toLowerCase()
      utilizacao = dado.utilizacao.toLowerCase()
      tags = dado.tags.toLowerCase()
      exemplos = dado.exemplos.toLowerCase()
      piada = dado.piada.toLowerCase()
      // se titulo inclui campoPesquisa
      if (palavra.includes(campoPesquisa) || utilizacao.includes(campoPesquisa) || exemplos.includes(campoPesquisa) || piada.includes(campoPesquisa) || tags.includes(campoPesquisa)) 
      // Constrói o HTML para cada resultado, formatando os links e o conteúdo.
      {resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.palavra}</a>
          </h2>
          <p class="descricao-meta">${dado.significado}</p>
          <p class="descricao-meta">${dado.utilizacao}
          <p class="descricao-meta">${dado.exemplos}
          <p class="descricao-meta">${dado.piada}
          <a href=${dado.linkInfo} target="_blank">Mais informações</a>
        </div>
      `;
      }
    }

  
  // quando pesquisa algo q n tem na base de dados
  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
  }
  
    // Atribui o HTML gerado à seção, atualizando a interface do usuário.
    section.innerHTML = resultados;
  }

 

