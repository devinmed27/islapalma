import React, { useState } from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import s from "../styles/pages/Location.module.scss";
import Image from "next/image";
import BookBar from "../containers/BookBar/BookBar";

import { locationInfo } from "../utils/texts";

const Location = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div className={s.container}>
      <SubHeader text="¿Cómo llegar?" />
      <div className={s.topButtons}>
        <div className={s.left}>
          <a
            className={flag ? s.selectedTitle : s.title}
            onClick={() => setFlag(true)}
          >
            DESDE CARTAGENA
          </a>
        </div>
        <div className={s.right}>
          <a
            className={flag ? s.title : s.selectedTitle}
            onClick={() => setFlag(false)}
          >
            DESDE TOLÚ
          </a>
        </div>
      </div>
      {flag ? (
        <div className={s.infoPpal}>
          <div className={s.leftInfo}>
            <h2 className={s.title}> {locationInfo[0].title}</h2>
            <div className={s.imgContainer}>
              <Image src={locationInfo[0].imgPath} alt="map image"/>
            </div>
          </div>
          <div className={s.rightInfo}>
            <h2 className={s.subTitle}>{locationInfo[0].subtitle}</h2>
            {locationInfo[0].texts.map((element) => {
              return <p key={element.text}>{element.text}</p>;
            })}
            <div className={s.line}></div>
            <h2>{locationInfo[0].titleSct2}</h2>
            {locationInfo[0].textsSct2.map((element) => {
              return <p key={element.text}>{element.text}</p>;
            })}
          </div>
        </div>
      ) : (
        <div className={s.infoPpal}>
          <div className={s.leftInfo}>
            <h2 className={s.title}> {locationInfo[1].title}</h2>
            <div className={s.imgContainer}>
              <Image src={locationInfo[1].imgPath} alt="map image"/>
            </div>
          </div>
          <div className={s.rightInfo}>
            <h2 className={s.subTitle}>{locationInfo[0].subtitle}</h2>
            {locationInfo[1].texts.map((element) => {
              return <p key={element.text}>{element.text}</p>;
            })}
            <div className={s.line}></div>
            <h2>{locationInfo[1].titleSct2}</h2>
            {locationInfo[1].textsSct2.map((element) => {
              return <p key={element.text}>{element.text}</p>;
            })}
            <div className={s.line}></div>
            <h2>{locationInfo[1].titleSct3}</h2>
            {locationInfo[1].textsSct3.map((element) => {
              return <p key={element.text}>{element.text}</p>;
            })}
          </div>
        </div>
      )}
      <BookBar />
    </div>
  );
};

export default Location;
