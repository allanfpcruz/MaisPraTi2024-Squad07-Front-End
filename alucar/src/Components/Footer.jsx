import './Components_styles/Footer.css'

function Footer() {
  // document.querySelector('.back-to-top').addEventListener('click', (event) => {
  //   event.preventDefault();
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // });

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return(
    <>
      <footer className="footer">
        <div className="container">
          <div className="logo-links">
            <div className="logo">
              <img src="./src/assets/AlucarLogo.png" alt="AluCar Logo"/>
            </div>
            <div className="social-media">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>
          <div className="useful-links">
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
          <div className="contact-info">
            <h3>Informações de contato</h3>
            <p><a href="mailto:contato@alucar.com"><i className="fas fa-envelope"></i> contato@alucar.com</a></p>
            <p><a href="tel:99999999999"><i className="fas fa-phone"></i> 99 99999-9999</a></p>
            <form className="email-form">
              <input type="email" placeholder="Digite seu melhor e-mail" required/>
              <button type="submit">➤</button>
            </form>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>Copyright 2024 © AluCar, Todos os direitos reservados.</p>
        <a href="#top" className="back-to-top" onClick={backToTop}>⬆</a>
      </div>
    </>
  )
}

export default Footer