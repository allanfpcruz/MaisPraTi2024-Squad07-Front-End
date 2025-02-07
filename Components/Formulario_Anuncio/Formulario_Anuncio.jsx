import './Formulario_Anuncio.css'
import '../../../Project_Files/CSS/patterns.css'
import { useEffect, useState } from 'react'
import { TbFolderPlus, TbHandFinger } from "react-icons/tb";
import { LuDownload } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

function Formulario_Anuncio({ formData, setFormData }) {
  const [fileList, setFileList] = useState([])

  useEffect(() => {
    formData.documentos = fileList
    console.log(formData)
  }, [fileList])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const changeFiles = (input) => {
    let newFiles = Array.from(input.files)
    setFileList((prevFileList) => [...prevFileList, ...newFiles])
  };

  const removeFile = (fileIndex) => {
    setFileList((prevFiles) => prevFiles.filter((_, i) => i !== fileIndex));
  }

  const downloadFile = (file) => {
    const fileURL = URL.createObjectURL(file); // Cria uma URL temporária para o arquivo
    const a = document.createElement("a"); // Cria um link <a>
    a.href = fileURL;
    a.download = file.name; // Define o nome do arquivo para download
    a.click(); // Simula o clique no link
    URL.revokeObjectURL(fileURL); // Limpa a URL temporária
  }

  const dropFiles = (e) => {
    e.preventDefault()
    e.target.classList.remove('dragover')
    let newFiles = e.dataTransfer.files
    setFileList((prevFileList) => [...prevFileList, ...newFiles])
    const inputFile = document.querySelector('#file')
    inputFile.files = newFiles
  }

  function formatFileSize(bytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let unitIndex = 0;
  
    // Converte o tamanho para a unidade apropriada
    while (bytes >= 1024 && unitIndex < units.length - 1) {
      bytes /= 1024;
      unitIndex++;
    }
  
    // Retorna o tamanho formatado com duas casas decimais e a unidade correspondente
    return `${bytes.toFixed(2)} ${units[unitIndex]}`;
  }

  return(
      <>
        <div className="form-container">
          <h3>Configuração de Perfil</h3>
          <form>
            <div className="input">
              <label htmlFor="name">Nome do Anúncio*</label>
              <input 
                type="text" 
                id="name"
                name='nome'
                value={formData.nome}
                onChange={handleChange}
                required />
            </div>
            <div className="input">
              <label htmlFor="local">Localização do Veículo*</label>
              <input 
                type="text"  
                id="local"
                name='local' 
                placeholder='Bairro - Cidade'
                value={formData.local}
                onChange={handleChange}
                required/>
            </div>
            <div className="input">
              <label htmlFor="cambio">Câmbio*</label>
              <select 
                id="cambio"
                name='cambio'
                value={formData.cambio}
                onChange={handleChange}>
                <option value="Manual" selected>Manual</option>
                <option value="Automático">Automático</option>
                <option value="Semiautomático">Semiautomático</option>
                <option value="CVT">CVT</option>
              </select>
              <IoIosArrowDown />
            </div>
            <div className="input">
              <label htmlFor="km">Quilometragem*</label>
              <input 
                type="text" 
                id="km"
                name='quilometragem' 
                placeholder='Número aproximado'
                value={formData.quilometragem}
                onChange={handleChange}
                required/>
            </div>
            <div className="input">
              <label htmlFor="combustivel">Combustível*</label>
              <select 
                id="combustivel"
                name='combustivel'
                value={formData.combustivel}
                onChange={handleChange}>
                <option value="Álcool" selected>Álcool</option>
                <option value="Gasolina">Gasolina</option>
                <option value="Gás">Gás</option>
                <option value="Elétrico">Elétrico</option>
              </select>
              <IoIosArrowDown />
            </div>
            <div className="input">
              <label htmlFor="alt-combustivel">Combustível Alternativo*</label>
              <select 
                id="alt-combustivel"
                name='altcombustivel'
                value={formData.altcombustivel}
                onChange={handleChange}>
                <option value="Álcool" selected>Álcool</option>
                <option value="Gasolina">Gasolina</option>
                <option value="Gás">Gás</option>
                <option value="Elétrico">Elétrico</option>
              </select>
              <IoIosArrowDown />
            </div>
            <div className="input">
              <label htmlFor="pot">Potência do Motor*</label>
              <input 
                type="text" 
                id="pot"
                name='potencia'
                value={formData.potencia}
                onChange={handleChange}
                required />
            </div>
            <div className="input">
              <label htmlFor="sist">Sistema de Direção*</label>
              <select 
                id="sist"
                name='sistemadirecao'
                value={formData.sistemadirecao}
                onChange={handleChange}>
                <option value="Hidráulico" selected>Hidráulico</option>
                <option value="Elétrico">Elétrico</option>
                <option value="Mecânico">Mecânico</option>
              </select>
              <IoIosArrowDown />
            </div>
            <div className="input">
              <label htmlFor="num">Número de assentos*</label>
              <input 
                type='number' 
                id="num" 
                min={1} 
                max={8}
                name='numpassageiros'
                value={formData.numpassageiros}
                onChange={handleChange}
                required/>
            </div>
            <div className="input">
              <label htmlFor="plate">Placa do veículo*</label>
              <input 
                type="text" 
                id="plate"
                name='placa'
                value={formData.placa}
                onChange={handleChange}
                required />
            </div>
            <div className="input">
              <label htmlFor="price">Valor do Aluguel*</label>
              <input 
                type="text" 
                id="price"
                name='valor'
                value={formData.valor}
                onChange={handleChange}
                required />
            </div>
            <div className="input">
              <p>Documentos de motorista*</p>
              <div className="input-file-container">
                {fileList.map(file => (
                  <div className="file-container">
                    <div className="file-infos">
                      <p className='name'>{file.name}</p>
                      <p className="size">{formatFileSize(file.size)}</p>
                    </div>
                    <div className="file-buttons">
                      <button 
                        className='download' 
                        type='button' 
                        onClick={() => downloadFile(file)}>Baixar</button>
                      <button 
                        className='remove' 
                        type='button' 
                        onClick={() => removeFile(fileList.indexOf(file))}>Remover</button>
                    </div>
                  </div>
                ))}
                <div 
                  className="input-files" 
                  onDragOver={(e) => {
                    e.preventDefault()
                    e.target.classList.add('dragover')}
                    }
                  onDragLeave={(e) => {
                    e.preventDefault()
                    e.target.classList.remove('dragover')}
                  } 
                  onDrop={(e) => dropFiles(e)}>
                  <label htmlFor="file">
                    <p className="chose-file">Escolher arquivos <TbFolderPlus /></p>
                    <p className="drop-file">Solte o arquivo <LuDownload /></p>
                  </label>
                  <input 
                    type="file" 
                    id="file" 
                    multiple 
                    onChange={(e) => changeFiles(e.target)}/>
                </div>
              </div>
              <p className='info'>Os documentos anexados são exibidos apenas para fins de verificação do motorista e não serão compartilhados com terceiros ou disponibilizados para download fora da plataforma.</p>
            </div>
            <div className="input">
              <label htmlFor="desc">Descrição*</label>
              <textarea 
                id="desc"
                name='descricao'
                value={formData.descricao}
                onChange={handleChange}>
              </textarea>
            </div>
            <div className="button-container">
              <button type="submit">Criar Anúncio</button>
              <p>Campos obrigatórios*</p>
            </div>
          </form>
        </div>
      </>
    )
}

export default Formulario_Anuncio