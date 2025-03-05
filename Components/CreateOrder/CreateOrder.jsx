import { useState } from "react";
import "./CreateOrder.css"


const CreateOrder = () => {
    const [open, setOpen] = useState(false);


  return (
    <div className="container">
      <button className="open-button" onClick={() => setOpen(true)}>Abrir Modal</button>
      {open && (
        <div className="modal">
          <div className="modal-box">
            <h2 modal-title>Criar pedido</h2>
            <div className="user-input">
              <label htmlFor="user-input1">Nome do proprietário</label>
              <input type="text" id="user-input1" name="user-input1" required/>
              <label htmlFor="user-input2">Nome do anúncio</label>
              <input type="text" id="user-input2" name="user-input2" required/>
            </div>
            <h4 className="use-time">Período de uso:</h4>
            <div className="use-time-input">
              <label htmlFor="start">Início</label>
              <input type="date" id="start" name="start" required/>
              </div>
              <div className="use-time-input">
              <label htmlFor="end">Fim</label>
              <input type="date" id="end" name="end" required/>
              </div>   
              <div className="total">
                <div className="div-total">
                  <h4 className="div-total-subtitle">Dias totais</h4>
                  <input className="div-total-input" type="text" readOnly placeholder="-" required/>
                </div>
                <div className="div-total">
                <h4 className="div-total-subtitle">Valor total</h4>
                <input className="div-total-input" type="text" readOnly placeholder="R$" required/>
                </div>
              </div> 
              <div className="btn">
                <button className="close-button" onClick={() => setOpen(false)}>Realizar pedido</button>
              </div>        
            
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateOrder