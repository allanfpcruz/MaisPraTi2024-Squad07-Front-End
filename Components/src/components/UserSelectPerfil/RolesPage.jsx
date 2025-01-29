import React from "react";
import RoleCard from "./RoleCard";
import "./RolesPage.css";

const RolesPage = () => {
  const locadorDetails = [
    { icon: "🚗", text: "Anunciar seus veículos para aluguel, informando detalhes sobre as condições do veículo e preço." },
    { icon: "🗺", text: "Definir filtros de região onde deseja alugar o veículo." },
    { icon: "⭐", text: "Avaliar o motorista após o término da locação." },
  ];

  const locatarioDetails = [
    { icon: "🔎", text: "Buscar veículos disponíveis por meio de filtros como localização, preço e características." },
    { icon: "📞", text: "Entrar em contato com locadores para negociar detalhes da locação." },
    { icon: "⭐", text: "Avaliar o proprietário após a devolução do veículo." },
  ];

  return (
    <div className="roles-page">
      <RoleCard
        title="Locador"
        descriptionList={locadorDetails}
        buttonText="Desejo ser Locador"
        isDark={false}
      />
      <RoleCard
        title="Locatário"
        descriptionList={locatarioDetails}
        buttonText="Desejo ser Locatário"
        isDark={true}
      />
    </div>
  );
};

export default RolesPage;