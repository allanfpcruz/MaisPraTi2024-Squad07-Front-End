//import '../../../Project_Files/CSS/patterns.css'
import './Components_styles/Sidebar.css'
import { LuCalendarCheck } from "react-icons/lu"
import { FaTelegramPlane } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

function Sidebar() {
  return(
    <>
      <div className="sidebar">
        <div className="user-container">
          <p>São Paulo - SP</p>
          <img src="user_image.jpg" alt="imagem do usuário" />
          <h3>Usuário 1</h3>
          <p className='since'><LuCalendarCheck /><span>Membro desde 2016</span></p>
        </div>
        <div className="like-container">
          <div className="liked">
            <p><span>Curtiu</span> <span className='like-number'>42</span></p>
          </div>
          <div className="likes">
            <p><span>Curtidas</span> <span className='like-number'>210</span></p>
          </div>
        </div>
        <p className="avaliation">Avaliações (120)</p>
        <div className="icons">
          <FaTelegramPlane />
          <FaWhatsapp />
          <FaInstagram />
        </div>
      </div>
    </>
  )
}

export default Sidebar