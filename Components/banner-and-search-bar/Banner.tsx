import { Component } from "react";
import "./Banner.css";

export class Banner extends Component {
  render() {
    return (
      <section>
        <div className="banner-text">
          <div className="banner-badge">
            <img src="./verified.svg" alt="icon" />
            <p>A plataforma de aluguel 100% confiável!</p>
          </div>
          <h1>
            O CARRO QUE VOCÊ TANTO PROCURA <span>ESTÁ AQUI</span>!
          </h1>
        </div>
        <div className="banner-image">
          <img src="./fiat-argo.svg" alt="Carro" />
        </div>
      </section>
    );
  }
}

export default Banner;
