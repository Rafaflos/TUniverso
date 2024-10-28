import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="items">
        <div className="accordion-header" onClick={toggleAccordion}>
          <h2>{title}</h2>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && (
          <div className="accordion-content">
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Accordion = () => {
  const accordionData = [
    {
      title: "¿Con qué documentos debe viajar un menor de edad?",
      content:
        "Todo menor de edad (14 a 17 años) que desea viajar solo o con un apoderado (0 a 17 años) deberá presentar una Autorización de Viaje Notarial, adjunto a su DNI o Partida de Nacimiento, y la copia del DNI del padre o padres que suscriben dicha autorización, mediante la cual se permite que determinado adulto acompañe al menor en su viaje provincial. Tener en cuenta que una copia de dicha autorización, además de la copia del DNI del padre (s) que lo firma (n) y copia del DNI del adulto que acompaña al menor debe ser entregada antes de partir.",
    },
    {
      title: "Necesito información de mi viaje. ¿Dónde la puedo encontrar?",
      content:
        "Detalles como el punto de embarque, horario, tipo de servicio, número de asientos y recomendaciones importantes para tu viaje las puede encontrar en la confirmación de compra enviada a tu correo electrónico. En caso tengas una cuenta en redBus, podrás dirigirte a la opción mis viajes y obtener un resumen de tu viaje..",
    },
    {
      title: "¿Qué opciones de pago tengo?",
      content:
        "Las diferentes opciones de pago son: Tarjeta de crédito, Tarjeta de débito, PagoEfectivo.",
    },
    {
      title: "¿Qué documentos necesito para recoger encomiendas?",
      content:
        "Para brindarles seguridad a todos nuestros clientes, todo consignado deberá mostrar su DNI e ingresar su clave (clave indicada por el remitente al momento del envío).",
    },
    {
      title: "¿Si mi DNI esta vencido, puedo viajar?",
      content: "Si.",
    },
    {
      title: "¿Es posible embarcar con mi arma de fuego?",
      content:
        "Si, presentando de manera obligatoria su licencia. El pasajero deberá firmar un formato entregado por la administración y el arma viajará descargada en la cabina del conductor.",
    },
    {
      title: " ¿Cuál es la cantidad de equipaje permitida para mi viaje?",
      content:
        "Todo pasajero tiene derecho a 20 kilos de equipaje para transportar en bodega y 8 kilos en la cabina (bolsa de mano), dicho equipaje consta de maletas y/o maletines que contengan ropa o útiles de aseo personal.",
    },
    {
      title:
        "¿A partir de qué edad un menor de edad debe usar un asiento y pagar su pasaje?",
      content: "A partir de los 5 años.",
    },
    {
      title: "¿Puedo viajar con animales?",
      content:
        "El ingreso de animales al bus (salón o bodega) está prohibido, salvo lazarillos (animales especiales para discapacitados) debidamente acreditados por CONADIS.",
    },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
