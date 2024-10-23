import React from "react";
import Navbar from "../NavBar";
import Footer from "../common/Footer";
import "../Estilos/Viaje.css";

function Viaje() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="titulo">
          <h1> Clausilas de viaje </h1>
          <div className="parrafo">
            <p>
              <span>1.</span> Para poder generar la compra de un Boleto de viaje
              por cualquier canal de venta en LA EMPRESA, será indispensable
              brindar un número de teléfono y correo electrónico del pasajero,
              para el envío de la confirmación de la compra y/o comunicaciones
              necesarias del servicio contratado.
            </p>
            <br />
            <p>
              <span>2.</span> El Pasajero es responsable de verificar al momento
              de la compra que todos los datos registrados en su Boleto de viaje
              que se le enviará mediante correo electrónico o imprimirá en
              Counter sean los correctos, la contratación del servicio implica
              plena conformidad.
            </p>

            <br />
            <p>
              <span>3.</span> Las compras en LA EMPRESA deben ser realizada en
              moneda nacional (Sol peruano).
            </p>

            <br />
            <p>
              <span>4.</span> LA EMPRESA no se hace responsable de las ventas
              online que no se logren concretar debido a fallas en comunicación
              de enlace (operador de internet).
            </p>

            <br />
            <p>
              <span>5.</span> Las compras por todos nuestros canales de venta
              emitirán un comprobante electrónico (boleta o factura) por cada
              pasajero. Las compras por internet tienen un límite de 5 Boletos
              de ida y 5 Boletos de retorno por transacción.
            </p>

            <br />
            <p>
              <span>6.</span> El Boleto de viaje es personal e intransferible,
              siendo el único documento válido para viajar en la fecha y hora
              impresa en el Boleto.
            </p>

            <br />
            <p>
              <span>7.</span> El pasajero debe presentarse 45 minutos antes de
              la hora de viaje; en caso de que no se presente a la hora de
              embarque de acuerdo con la fecha y hora señalada en su Boleto de
              viaje o no lleve consigo su Boleto de viaje físico o virtual y
              documento de identidad físico y original para embarcarse, además
              de los documentos migratorios de ser el caso (esta medida incluye
              a los menores de edad), el pasajero perderá el derecho a viajar y
              el valor del boleto de viaje pagado.
            </p>

            <br />
            <p>
              <span>8.</span> No se permitirá el embarque y/o desembarque en
              puntos diferentes al registrado en el Boleto de viaje. Nuestros
              servicios realizan escalas comerciales en la ruta, de acuerdo con
              la autorización del MTC.
            </p>

            <br />
            <p>
              <span>9.</span> Los niños mayores de cinco años pagan por Boleto
              de viaje, los menores de cinco años que no paguen Boleto de viaje
              no tienen derecho a un asiento.
            </p>

            <br />
            <p>
              <span>10.</span> El Pasajero no podrá viajar bajo la influencia de
              alcohol y/o estupefacientes. En este caso, perderá el valor total
              del Boleto de viaje.
            </p>
            <br />
            <p>
              <span>11.</span> El pasajero tiene derecho a transportar sin costo
              hasta 20 kilos de equipaje, entendiéndose como tal a todos los
              bienes nuevos o usados, que el pasajero pueda razonablemente
              necesitar, siempre que se advierta que son para su uso o consumo,
              de acuerdo con el propósito y duración del viaje (Decreto Supremo
              182-2013-EF).
            </p>
            <br />
            <p>
              <span>12.</span> El derecho de transportar equipaje aplica sólo
              para pasajeros que ocupen un asiento.
            </p>
            <br />
            <p>
              <span>13.</span> No está permitido transportar en bodega y/o
              cabina, animales, armas, explosivos, inflamables, químicos y
              sustancias que pongan en peligro la seguridad de los pasajeros.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Viaje;
