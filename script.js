  // Todos os cards que abrem os modais
  const cards = document.querySelectorAll(".card");
  const modals = document.querySelectorAll(".modal");
  const closes = document.querySelectorAll(".close");

  // Quando a pessoa clica no card abre o modal
  cards.forEach(card => { // Para cada card
    card.addEventListener("click", () => { // Adiciona um evento de click
      const modalId = card.getAttribute("data-modal"); // Quando clicado procura no card o data-modal que seriam os textos/informações e armazena no modalId
      const modal = document.getElementById(modalId); // Pega as informações no modalId e passa para o modal assim preparando ele para ser mostrado
      if (modal) {
        modal.style.display = "block"; // Deixa o modal visível no centro da tela
      }
    });
  });

  // Botão X que fecha o modal
  closes.forEach(btn => { // Para cada botão de fechar ("x" que fica no canto superior direito do modal)
    btn.addEventListener("click", () => { // Adiciona um evento de click
      modals.forEach(modal => modal.style.display = "none"); // Quando clicado faz o modal ficar invisível
    });
  });