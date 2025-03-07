//icluir Font Awesome no HTML:
//<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

import { useState, useContext } from 'react'
import './Components_styles/Config.css'
//import '../../Project_Files/CSS/patterns.css'
import { TbFolderPlus } from "react-icons/tb";
import { LuDownload } from "react-icons/lu";
import { userContext } from '../Context/userContext';

function Config() {
  const { loggedUser } = useContext(userContext)
  const isLocatario = loggedUser.perfil
  const [fileList, setFileList] = useState([])
  const [isInstaChecked, setInstaChecked] = useState(false)
  const [isWhatsChecked, setWhatsChecked] = useState(false)
  const [isTelChecked, setTelChecked] = useState(false)

  //atualiza a lista de arquivos a serem exibidos
  const changeFiles = (input) => {
    let newFiles = Array.from(input.files)
    setFileList((prevFileList) => [...prevFileList, ...newFiles])
    console.log(fileList)
  };

  //remove arquivo da lista com base no index
  const removeFile = (fileIndex) => {
    setFileList((prevFiles) => prevFiles.filter((_, i) => i !== fileIndex));
  }

  //realiza o download do arquivo
  const downloadFile = (file) => {
    const fileURL = URL.createObjectURL(file)
    const a = document.createElement("a")
    a.href = fileURL;
    a.download = file.name
    a.click()
    URL.revokeObjectURL(fileURL)
  }

  //dropa o arquivo quando ele é solto e atualiza a lista
  const dropFiles = (e) => {
    e.preventDefault()
    e.target.classList.remove('dragover')
    let newFiles = e.dataTransfer.files
    setFileList((prevFileList) => [...prevFileList, ...newFiles])
    const inputFile = document.querySelector('#file')
    inputFile.files = newFiles
  }

  //formata e retorna o tamanho do arquivo
  function formatFileSize(bytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB']
    let unitIndex = 0
    while (bytes >= 1024 && unitIndex < units.length - 1) {
      bytes /= 1024
      unitIndex++
    }
    return `${bytes.toFixed(2)} ${units[unitIndex]}`
  }

  return(
    <>
      <div className="conf-container">
        <h3>Configuração de Perfil</h3>
        <form>
          <div className="input">
            <label htmlFor="name">Nome*</label>
            <input type="text" id="name" />
          </div>
          <div className="input">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" />
          </div>
          <div className="input">
            <label htmlFor="tel">Telefone*</label>
            <input type="tel" id="tel" />
          </div>
          <div className="input">
            <label htmlFor="local">Localidade*</label>
            <input type="text" id="local" />
          </div>
          {/*exibe a área de inserção de documentos apenas se for locatario*/}
          {isLocatario ?
            <div className="input">
              <p>Documentos de motorista*</p>
              <div className="input-file-container">
                {/*cria um file-container para cada arquivo*/}
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
                  /*efeito de drag and drop, mudando a classe se o arquivo estiver suspenso ou não sobre o container*/
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
            :
            <></>
          }
          <div className="input input-check">
            <h5>Formas de Contato</h5>
            <div className='check'>
              <div className="check-container">
                <input 
                  type="checkbox" 
                  id="insta" 
                  /*muda o status de check deste campo*/
                  onChange={() => setInstaChecked((prevInsta => !prevInsta))}/>
                <label htmlFor="insta">Instagram</label>
              </div>
              {isInstaChecked ?
              /*exibe de acordo com o status de exibição deste campo*/
              <div className="text-container">
                <input type="text" className='check-input'/>
              </div>
              :
              <></>
              }
            </div>
            <div className='check'>
              <div className="check-container">
                <input 
                  type="checkbox" 
                  id="whats" 
                  /*muda o status de check deste campo*/
                  onChange={() => setWhatsChecked((prevWhats => !prevWhats))}/>
                <label htmlFor="whats">Whatsapp</label>
              </div>
              {/*exibe de acordo com o status de exibição deste campo*/}
              {isWhatsChecked ?
              <div className="text-container">
                <input type="text" className='check-input'/>
              </div>
              :
              <></>
              }
            </div>
            <div className='check'>
              <div className="check-container">
                <input 
                  type="checkbox" 
                  id="telegram" 
                  /*muda o status de check deste campo*/
                  onChange={() => setTelChecked((prevTel => !prevTel))}/>
                <label htmlFor="telegram">Telegram</label>
              </div>
              {/*exibe de acordo com o status de exibição deste campo*/}
              {isTelChecked ?
              <div className="text-container">
                <input type="text" className='check-input'/>
              </div>
              :
              <></>
              }
            </div>
          </div>
          <div className="button-container">
            <button type="submit">Salvar alterações</button>
            <p>Campos obrigatórios*</p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Config