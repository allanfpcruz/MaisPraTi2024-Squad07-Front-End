import React, { useState } from "react";
import "../FailModal/FailModal.css";
import atencao from '../../../assets/atencao.png'

const FailModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Abrir Modal</button>

      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">
                <img className="modal-img" src={atencao} alt="atencao" />
                <h2>Há irregularidades no anúncio</h2>
            </div>
                <h3>Possíveis irregularidades:</h3>
                <ol>
                    <li className="ol-style">Incoerência entre placa do veículo e proprietário</li>
                    <ul>
                        <li className="ul-style">O sistema não reconheceu você como o proprietário deste 
                            veículo. Certifique-se de que os documentos inseridos são válidos e que o 
                            veículo está registrado corretamente em seu nome.
                        </li>
                    </ul>
                    <li className="ol-style">Documentos do veículo inválidos</li>
                    <ul>
                        <li className="ul-style">Os documentos anexados estão incompletos ou apresentam erros. 
                            Verifique se todos os arquivos necessários foram enviados e estão no formato correto.

                        </li>
                    </ul>
                    <li className="ol-style">Localização do veículo inválida</li>
                    <ul>
                        <li className="ul-style">Os documentos anexados estão incompletos ou apresentam erros. 
                            Verifique se todos os arquivos necessários foram enviados e estão no formato correto.

                        </li>
                    </ul>
                    <li className="ol-style">Informações inconsistentes no formulário</li>
                    <ul>
                        <li className="ul-style">Certifique-se de que todos os campos, como combustível alternativo e 
                            potência do motor, estão preenchidos corretamente e condizem com o modelo do veículo.
                        </li>
                    </ul>
                </ol>
            {/* <button onClick={toggleModal}>Fechar</button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default FailModal;
