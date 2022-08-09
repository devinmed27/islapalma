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
      <SubHeader text="NUESTRAS POLÍTICAS AMBIENTALES" />
      <div className={s.info}>
        {/* <h3>{politics[1].fields.title}</h3>
        <p>{politics[1].fields.paragraph}</p>
        <p>{politics[1].fields.paragraph2}</p>
        <p>{politics[1].fields.paragraph3}</p> */}
       <center> <h3>POLITICA AMBIENTAL</h3></center>
        <p>Nuestro modelo de gestión ambiental desarrolla y despliega nuestra Política Ambiental basada en los siguientes principios:</p>

<p>► Llevar a cabo una gestión ambiental adecuada a la realidad de nuestra organización y a nuestras actividades y servicios, intentado con ello mejorar nuestra gestión desde la sostenibilidad.<br />
<br />
► Dar formación continua y adecuada al personal para mejorar la implicación y capacitación de sus labores con criterios de respeto al medio ambiente.<br />
<br />
► Promover entre los contratistas y proveedores el cumplimiento de nuestra Política Ambiental.<br />
<br />
► Mejorar constantemente nuestra actuación ambiental y evaluarla periódicamente, consiguiendo con ello, la mejora ambiental de nuestra organización.<br />
<br />
► Cumplir con todos los requisitos establecidos por la legislación medioambiental vigente, los requisitos legales de aplicación específica al sector, requisitos voluntarios y otras exigencias establecidas por terceras partes.<br />
<br />
► Evaluar los aspectos ambientales asociados a nuestras actividades, indicando y llevando a cabo las medidas adecuadas, para maximizar los beneficios y evitar, minimizar o corregir los riesgos.<br />
<br />
► Aplicar el principio básico de prevención&nbsp; de la contaminación desde la planificación y evaluación de decisiones.<br />
<br />
► Practicar la utilización sostenible de los recursos naturales y materias primas, así como fomentar el uso eficiente de la energía y realizar prácticas de reutilización y reciclado de los residuos generados por la actividad.<br />
<br />
► Proporcionar la información medioambiental de nuestras actividades y difundir nuestra Política Ambiental a las personas que trabajen para la organización, clientes, al público en general y asegurar su actualización y adecuación.<br />
<br />
► Implementar, documentar y mantener esta política como marco para el establecimiento de nuestro Programa de Gestión Ambiental mediante los objetivos y metas correspondientes.</p>



      </div>
    </div>
  );
};

export default Politics;
