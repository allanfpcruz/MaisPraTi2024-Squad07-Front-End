import { Component } from "react";
import "./Components_styles/Banner.css";

export class Banner extends Component {
  render() {
    return (
      <section className="banner-container">
        <div className="banner-text">
          <div className="banner-badge">
            <img src="./src/assets/verified.png" alt="icon" />
            <p>A plataforma de aluguel 100% confiável!</p>
          </div>
          <h1>
            O CARRO QUE VOCÊ TANTO PROCURA <span>ESTÁ AQUI!</span>
          </h1>
        </div>
        <div className="banner-image">
          <img src="./src/assets/fiat-argo.png" alt="Carro" />
        </div>
      </section>
    );
  }
}

export default Banner;
