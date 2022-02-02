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

const sostenibility = ({ politics }) => {
  return (
      <div className={s.container}>
        <SubHeader text="POLÍTICAS DE SOSTENIBILIDAD" />
        <div className={s.info}>
          {/* <h3>{politics[0].fields.title}</h3>
        <p>{politics[0].fields.paragraphLong}</p> */}
          <h3>POLITICA DE SOSTENIBILIDAD, SEGURIDAD Y SALUD EN EL TRABAJO</h3>
          <p>
            El HOTEL ISLA PALMA RESERVA NATURAL a través de la Gerencia se
            compromete con la satisfacción de las necesidades y expectativas de
            los clientes y huéspedes en los servicios de hotelería, restaurante,
            recreación y eventos.
          </p>
          <p>
            La empresa se compromete con el mantenimiento y mejora de los
            impactos ambientales, socioculturales y económicos positivos y la
            prevención de la contaminación a través de la minimización y
            eliminación de impactos ambientales negativos generados con el
            desarrollo de nuestra actividad.
          </p>
          <p>
            El establecimiento y cumplimiento de los derechos y deberes de los
            colaboradores, proveedores, clientes y huéspedes hacen parte
            integral de la presente política y la gestión sostenible.
          </p>
          <p>
            La empresa se compromete con la prevención de accidentes de trabajo
            y enfermedades laborales en los colaboradores, y la implementación
            de actividades de prevención y promoción en seguridad y salud en el
            trabajo.
          </p>
          <p>
            La empresa se compromete con el cumplimiento de los requisitos
            legales aplicables y la mejora continua del Sistema de Gestión.
          </p>
          <p>
            La Gerencia dispone y asegura los recursos humanos, físicos,
            tecnológicos y financieros necesarios para el cumplimiento de los
            objetivos de la organización.
          </p>
        </div>
      </div>
  );
};

export default sostenibility;
