import './Components_styles/Footer.css'

function Footer() {
  document.querySelector('.back-to-top').addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return(
    <>
      <section class="testimonials">
        <div class="container">
          <h2>O que nossos clientes dizem</h2>
          <p>Adicione aqui os depoimentos ou outros conteúdos futuramente.</p>
        </div>
      </section>
      <footer class="footer">
        <div class="container">
          <div class="logo-links">
            <div class="logo">
              <img src="img/logo 2.png" alt="AluCar Logo"/>
            </div>
            <div class="social-media">
              <a href="#"><i class="fab fa-linkedin"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="bi bi-twitter-x"></i></a>
            </div>
          </div>
          <div class="useful-links">
            <h3>Links Úteis</h3>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Entre em contato</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Cadastre-se</a></li>
              <li><a href="#">Termos de uso</a></li>
              <li><a href="#">Política de Privacidade</a></li>
            </ul>
          </div>
          <div class="contact-info">
            <h3>Informações de contato</h3>
            <p><a href="mailto:contato@alucar.com"><i class="fas fa-envelope"></i> contato@alucar.com</a></p>
            <p><a href="tel:99999999999"><i class="fas fa-phone"></i> 99 99999-9999</a></p>
            <form class="email-form">
              <input type="email" placeholder="Digite seu melhor e-mail" required/>
              <button type="submit">➤</button>
            </form>
          </div>
        </div>
      </footer>
      <div class="footer-bottom">
        <p>Copyright 2024 © AluCar, Todos os direitos reservados.</p>
        <a href="#top" class="back-to-top">⬆</a>
      </div>
    </>
  )
}

export default Footer