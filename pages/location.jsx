import React, { useState } from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import s from "../styles/pages/Location.module.scss";
import Image from "next/image";
import location_1 from "../public/static/assets/location-info.jpg";
import location_2 from "../public/static/assets/location-info2.jpg";


const location = () => {
  const info = [
    {
      title: "Para los navegantes",
      imgPath: location_1,
      subtitle: "Desde Cartagena",
      texts: [
        {
          text: "Te recomendamos que la primera noche la tomes en Cartagena, ya que la salida a la Isla es temprano.",
        },
        {
          text: "Duración del trayecto: 2 horas 30 Min:",
        },
        {
          text: "Ubicación: Muelle de la Bodeguita.",
        },
        {
          text: "Hora: Debes presentarte a las 6:45 AM o 7:45 AM (dependiendo el dia de operacion, esa información se te brinda cuando realices la reserva con las especificaciones del servicio).",
        },
        {
          text: "Estos servicios se deben reservar como mínimo 72 horas antes de su llegada, ya que están sujetos a cupos limitados. Reservas: +57 304 3499318 - +57 302 3200353.",
        },
        {
          text: "Valor: $150.000 pesos por trayecto, por persona.",
        },
        {
          text: "** Recomendación reservar con anterioridad los dos trayectos, el pago de estos servicios es directamente con los operadores.",
        },
      ],
      titleSct2 : "Desde Isla Palma a Tolú",
      textsSct2 : [
        {
          text : "1. Salida de las lanchas 3:30 PM servicios todos los días valor $55.000 por persona."
        },
        {
          text : "2. Salida especial 12:30 PM. Todos los días reserva con anterioridad cupos limitados comunícate 3126073492 - 318 2830001. Valor $60.000 por persona"
        },
        {
          text : "** Recomendación reservar con anterioridad los dos trayectos, el pago de estos servicios es directamente con los operadores."
        }
      ]
    },
    {
      title: "Viaja por tierra hasta Tolú",
      imgPath: location_2,
      subtitle: "Desde Tolú",
      texts: [
        {
          text: "Se opera mínimo con 3 pasajeros, se combina este servicio con un traslado terrestre carros o vans con aire acondicionado y buen servicio. Recogida en los hoteles a partir de las 5:00 AM, turistas hospedados en Bocagrande, zona norte y centro histórico) (Duración 2 horas). Traslado terrestre hasta Tolú y luego transbordo en lancha de 30 min hasta Isla Palma.",
        }
      ],
      titleSct2 : "Desde Montería o Corozal a Isla Palma",
      textsSct2 : [
        {
          text : "Desde tu ciudad de origen puedes tomar un vuelo nacional o internacional hasta el aeropuerto de Montería ó Corozal."
        },
        {
          text : "Traslado aeropuerto - Tolú: 3126073492 - 318 2830001."
        },
        {
          text : "Montería a Tolú (duración trayecto 2 horas). Corozal a Tolú (duración trayecto 1h 30 m). Ten en cuenta estos trayectos para tu conexión con la lancha. Duración del trayecto náutico 40 minutos."
        },
        {
          text : "Salida de las lanchas 8:30 AM servicios todos los días valor $55.000 por persona, existen diferentes opciones de club náuticos que te pueden brindar este servicio."
        },
        {
          text : "Salida especial 10:30 AM. Todos los días reserva con anterioridad cupos limitados comunícate 3126073492 - 318 2830001. Valor $55.000 por persona."
        },
        {
          text : " ** Recomendación reservar con anterioridad los dos trayectos, el pago de estos servicios es directamente con los operadores."
        },
      ],
      titleSct3 : "Desde Isla Palma a Tolú",
      textsSct3 : [
        {
          text : "1. Salida de las lanchas 3:30 PM servicios todos los días valor $55.000 por persona."
        },
        {
          text : "2. Salida especial 12:30 PM. Todos los días reserva con anterioridad cupos limitados comunícate 3126073492 - 318 2830001. Valor $60.000 por persona"
        },
        {
          text : "** Recomendación reservar con anterioridad los dos trayectos, el pago de estos servicios es directamente con los operadores."
        }
      ]
    }
  ];
  const [flagLeft, setFlagLeft] = useState(true);
  const [flagRight, setFlagRight] = useState(false);

  const handleLeft = () => {
    setFlagLeft(true);
    setFlagRight(false);
  };
  const handleRight = () => {
    setFlagLeft(false);
    setFlagRight(true);
  };

  return (
    <div className={s.container}>
      <SubHeader text="¿Cómo llegar?" />
      <div className={s.topButtons}>
        <div className={s.left}>
          <a className={s.title} id="left" onClick={() => handleLeft()}>
            DESDE CARTAGENA
          </a>
        </div>
        <div className={s.right}>
          <a className={s.title} id="right" onClick={() => handleRight()}>
            DESDE TOLÚ
          </a>
        </div>
      </div>
      {flagLeft && (
        <div className={s.infoPpal}>
          <h2> {info[0].title}</h2>
          <div className={s.imgContainer}>
            <Image src={info[0].imgPath} />
          </div>
          <h2 className={s.subTitle}>{info[0].subtitle}</h2>
          {info[0].texts.map((element) => {
            return <p>{element.text}</p>;
          })}
          <div className={s.line}></div>
          <h2>{info[0].titleSct2}</h2>
          {info[0].textsSct2.map((element) => {
            return <p>{element.text}</p>;
          })}
        </div>
      )}

      {flagRight && (
        <div className={s.infoPpal}>
        <h2> {info[1].title}</h2>
        <div className={s.imgContainer}>
          <Image src={info[1].imgPath} />
        </div>
        <h2 className={s.subTitle}>{info[0].subtitle}</h2>
        {info[1].texts.map((element) => {
          return <p>{element.text}</p>;
        })}
        <div className={s.line}></div>
        <h2>{info[1].titleSct2}</h2>
        {info[1].textsSct2.map((element) => {
          return <p>{element.text}</p>;
        })}
        <div className={s.line}></div>
        <h2>{info[1].titleSct3}</h2>
        {info[1].textsSct3.map((element) => {
          return <p>{element.text}</p>;
        })}
      </div>
      )}
    </div>
  );
};

export default location;
