import { useContext, useEffect, useState } from "react";
import "./Components_styles/CreateOrder.css"
import { userContext } from "../Context/userContext";
import useOrder from "../Hooks/UseOrders";


const CreateOrder = ({ toggleIsOpen, anuncio }) => {
  const { loggedUser } = useContext(userContext)
  const { createOrder } = useOrder()
  const [formOrder, setFormOrder] = useState({
    advertisement_id: anuncio.id,
    driver_id: loggedUser.id,
    rent_id: anuncio.owner_id,
    start_data: '',
    end_data: '',
    total_days: 0,
    total_price: 0,
    accepted: false
  })
  const today = new Date().toISOString().split("T")[0]

  //sempre calcula os dias e valor total quando as duas datas estao presentes e sao alteradas
  useEffect(() => {
    if(formOrder.start_data && formOrder.end_data) {
      calculateDaysAndValue()
    }
  }, [formOrder.start_data, formOrder.end_data])

  //calcula a quantidade de dias e do valor total 
  const calculateDaysAndValue = () => {
    const start = new Date(formOrder.start_data)
    const end = new Date(formOrder.end_data)
    if(end < start) return
    const diffTime = end.getTime() - start.getTime()
    const total_days = diffTime / (1000 * 60 * 60 * 24) + 1
    const total_value = total_days * anuncio.daily_rent_value
    setFormOrder((prev) =>({ ...prev, total_days, total_price }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormOrder({ ...formOrder, [name]: value })
  }

  return (
        <div className="modal">
          <div className="modal-box">
            <h2 modal-title>Criar pedido</h2>
            <button onClick={toggleIsOpen}>Fechar</button>
            {/* <div className="user-input">
              <label htmlFor="user-input1">Nome do proprietário</label>
              <input type="text" id="user-input1" name="user-input1" required/>
              <label htmlFor="user-input2">Nome do anúncio</label>
              <input type="text" id="user-input2" name="user-input2" required/>
            </div> */}
            <h4 className="use-time">Período de uso:</h4>
            <div className="use-time-input">
              <label htmlFor="start">Início</label>
              <input type="date" id="start" name="start_data" value={formOrder.start_data} onChange={handleChange} min={today} max={formOrder.end_data} required/>
            </div>
            <div className="use-time-input">
              <label htmlFor="end">Fim</label>
              <input type="date" id="end" name="end_data" value={formOrder.end_data} onChange={handleChange} min={formOrder.start_data ? formOrder.start_data : today} required/>
            </div>   
            <div className="total">
              <div className="div-total">
                <h4 className="div-total-subtitle">Dias totais</h4>
                <input className="div-total-input" type="text" readOnly placeholder="-" value={formOrder.total_days} onChange={handleChange} required/>
              </div>
              <div className="div-total">
                <h4 className="div-total-subtitle">Valor total</h4>
                <input className="div-total-input" type="text" readOnly placeholder="" value={formOrder.total_price} onChange={handleChange} required/>
              </div>
            </div> 
            <div className="btn">
              <button className="close-button" onClick={() => {
                toggleIsOpen()
                createOrder(formOrder)
              }}>Realizar pedido</button>
            </div>        
          </div>
        </div>
  )
}

export default CreateOrder