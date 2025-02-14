import { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "./Components_styles/Search.css";

export default function Search() {
  const [startDate, setStartDate] = useState(Date);
  const [endDate, setEndDate] = useState(Date);
  const [selectedState, setSelectedState] = useState("");

  const handleSearch = () => {
    console.log({
      state: selectedState,
      pickupDate: startDate?.toLocaleDateString("pt-BR") || "Não selecionada",
      returnDate: endDate?.toLocaleDateString("pt-BR") || "Não selecionada",
    });
  };

  return (
    <div className="search-content">
      <div className="search-input-container">
        <div className="search-label">
          <label htmlFor="search"></label>
          Filtre sua Busca
          <Form.Select
            size="lg"
            className="search-select"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Selecione o estado</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </Form.Select>
        </div>
        <div className="search-label">
          <label htmlFor="search">Data de Retirada</label>
          <DatePicker
            dateFormat={"dd/MM/yyyy"}
            selectsStart
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            startDate={startDate}
          />
        </div>
        <div className="search-label">
          <label htmlFor="search"></label>
          Data de Devolução
          <DatePicker
            dateFormat={"dd/MM/yyyy"}
            selectsEnd
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            endDate={endDate}
            startDate={startDate}
            minDate={startDate || undefined}
          />
        </div>
        <button className="search-button" onClick={handleSearch}>
          <img src="./search.svg" alt="search" className="search-icon" />
          Pesquisar
        </button>
      </div>
    </div>
  );
}
