import '../../../Project_Files/CSS/patterns.css'
import './Formulario.css'
import { IoIosArrowDown } from "react-icons/io";

function Formulario() {
  return(
    <>
    {/* container do formulario */}
      <div className="container">
        <div className="top">
          {/* logo do projeto  */}
          <img src="logo.png" alt="Logo AluCar" />
          <p>Entre em contato</p>
        </div>
        {/* formulario */}
        <form>
          {/* input de nome */}
          <div className="input">
            <label htmlFor="nome">Nome</label>
            <input type="text" id='nome' />
          </div>
          {/* input de email */}
          <div className="input">
            <label htmlFor="email">E-mail</label>
            <input type='name' id='email' />
          </div>
          {/* input de telefone */}
          <div className="input">
            <label htmlFor="telefone">Telefone</label>
            <input type="tel" id='telefone' />
          </div>
          {/* input do assunto */}
          <div className="input assunto">
            <label htmlFor="assunto">Asunto</label>
            <select id="assunto">
              <option value="" selected>Selecione um assunto</option>
              <option value="valor1">Assunto 1</option>
              <option value="valor2">Assunto 2</option>
              <option value="valor3">Assunto 3</option>
              <option value="valor4">Outro</option>
            </select>
            <IoIosArrowDown />
          </div>
          {/* area de insercao de mensagem */}
          <div className="input">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem"></textarea>
          </div>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default Formulario