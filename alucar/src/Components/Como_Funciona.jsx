import './Components_styles/Como_Funciona.css'

function Como_Funciona() {
  return(
    <>
    <section id='involucrum'>
      <section className="how-it-works">
        <h1>Como Funciona</h1>
        <p className="subtitle">
          Alugar um carro é um processo simples que normalmente <br/> envolve as seguintes etapas
        </p>
        <div className="steps">
          <div className="step">
            <div className="icon-wrapper blue">
              <div className="circle"></div>
              <img src="./src/assets/localizacao1.png" alt="Localização"/>
            </div>
            <h2>Escolha localização e data</h2>
            <p>Informe a cidade e o período desejado para encontrar veículos disponíveis na região.</p>
          </div>
          <div className="step">
            <div className="icon-wrapper black">
              <div className="circle"></div>
              <img src="./src/assets/carro.png" alt="Carro"/>
            </div>
            <h2>Busque pelo carro ideal</h2>
            <p>Explore as opções disponíveis e encontre o carro que atende suas preferências e necessidades.</p>
          </div>
          <div className="step">
            <div className="icon-wrapper orange">
              <div className="circle"></div>
              <img src="./src/assets/mensagem1.png" alt="Mensagem"/>
            </div>
            <h2>Contate o proprietário</h2>
            <p>Converse diretamente com o proprietário para combinar detalhes e finalizar o aluguel com segurança.</p>
          </div>
        </div>
      </section>
    </section>
    </>
  )
}

export default Como_Funciona