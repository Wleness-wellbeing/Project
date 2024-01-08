import React from "react";
import { iconWhatsapp } from "../assets";
import { Link } from "react-router-dom";

function WhatsappChat() {
  return (
    <Link to="https://wa.me/919147047488" target="_blank">
      <img
        src={iconWhatsapp}
        alt="whatsapp icon"
        className="fixed bottom-5 right-4 w-12 cursor-pointer transition-all hover:scale-105 lg:w-14"
      />
    </Link>
  );
}

export default WhatsappChat;
