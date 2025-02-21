import '../../../Project_Files/CSS/patterns.css';
import './Sidebar.css';
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import userImage from '../../assets/images/user.jpg';

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="user-container">
          <p className='since'>
            <FaRegCalendarCheck /> <span>Membro desde 2024</span>
          </p>
          <img src={userImage} alt="imagem do usuário" />
          <h3>Gaspar Zinho</h3>
          <p>São Paulo - SP</p>
        </div>
        <p className="avaliation">Avaliações (120)</p>
        <div className="like-container">
          <div className="liked">
            <p><span>Curtiu</span> <span className='like-number'>42</span></p>
          </div>
          <div className="likes">
            <p><span>Curtidas</span> <span className='like-number'>210</span></p>
          </div>
        </div>
        <div className="icons">
          <FaTelegramPlane />
          <FaWhatsapp />
          <FaInstagram />
        </div>
      </div>
    </>
  );
}

export default Sidebar;