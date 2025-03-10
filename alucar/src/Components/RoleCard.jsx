import React from "react";
import "./Components_styles/RoleCard.css";
import useUsers from "../Hooks/UseUsers";

const RoleCard = ({ title, descriptionList, buttonText, image, isDark, userData }) => {
  const { createDriverUser, createRenterUser } = useUsers()

  const attUser = () => {
    userData.perfil = title.toLowerCase()
    userData.perfil === 'locador' ? createRenterUser(userData) : createDriverUser(userData)
  }


  return (
    <div className={`role-card ${isDark ? "dark" : "light"}`}>
      <div className="role-card-content">
        <h2>{title}</h2>
        <ul>
          {descriptionList.map((item, index) => (
            <li key={index}>
              <span>{item.icon}</span> {item.text}
            </li>
          ))}
        </ul>
        <button className={`role-button ${isDark ? "dark-btn" : "light-btn"}`} onClick={attUser}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default RoleCard;