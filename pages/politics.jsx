import React from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import s from "../styles/pages/Terms.module.scss";
import { createClient } from "contentful";

export const getServerSideProps = async (res) => {
  var client = await createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  try {
    const politics = await client
      .getEntries({ content_type: "politics" })
      .then((entries) => entries.items);

    return { props: { politics, statusCode: 200 } };
  } catch (e) {
    res.statusCode = 503;
    return { props: { politics: {}, statusCode: 503 } };
  }
};

const Politics = ({politics}) => {
  return (
    <div className={s.container}>
      <SubHeader text="NUESTRAS POLÍTICAS" />
      <div className={s.info}>
        {/* <h3>{politics[1].fields.title}</h3>
        <p>{politics[1].fields.paragraph}</p>
        <p>{politics[1].fields.paragraph2}</p>
        <p>{politics[1].fields.paragraph3}</p> */}
        <h3>CANCELACIONES Y REEMBOLSO</h3>
        <p>Toda cancelación y solicitud de reembolso generará de forma automática y sin excepción, un cargo por gastos administrativos de $50.000, además de los cargos que correspondan según lo detallado en el párrafo de cancelaciones y penalidades.</p>
        <p>Los gastos financieros por comisiones y/o transferencias generados en los procesos de reintegros serán descontados del monto total del reintegro. Las tarifas de OFERTA no tienen desembolso, únicamente cambio de fecha con cargo administrativo.</p>
        <p>Las reservas de grupos se aceptan cambios de fecha 60 días antes y aplican penalidad del 50% valor de la reserva.</p>
      </div>
    </div>
  );
};

export default Politics;
