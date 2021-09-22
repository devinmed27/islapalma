import React from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import s from "../styles/pages/Terms.module.scss";

const politics = () => {
  return (
    <div className={s.container}>
      <SubHeader text="NUESTRAS POLÍTICAS" />
      <div className={s.info}>
        <h3>CANCELACIONES Y REEMBOLSO</h3>
        <p>
          Toda cancelación y solicitud de reembolso generará de forma automática
          y sin excepción, un cargo por gastos administrativos de $50.000,
          además de los cargos que correspondan según lo detallado en el párrafo
          de cancelaciones y penalidades. Los gastos financieros por comisiones
          y/o transferencias generados en los procesos de reintegros serán
          descontados del monto total del reintegro. Las tarifas de OFERTA no
          tienen desembolso, únicamente cambio de fecha con cargo administrativo
          Las reservas de grupos se aceptan cambios de fecha 60 días antes y
          aplican penalidad del 50% valor de la reserva.
        </p>
      </div>
    </div>
  );
};

export default politics;
