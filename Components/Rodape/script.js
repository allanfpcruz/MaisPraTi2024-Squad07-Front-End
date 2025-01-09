// Botão "Voltar ao Topo"
document.querySelector('.back-to-top').addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  