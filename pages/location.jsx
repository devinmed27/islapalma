import React from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import s from "../styles/pages/Location.module.scss";

const location = () => {
  return (
    <div className={s.container}>
      <SubHeader text="¿Cómo llegar?" />
      <div className={s.topButtons}>
        <div className={s.right}>
          <p className={s.title}>DESDE CARTAGENA</p>
        </div>
        <div className={s.left}>
          <p className={s.title}>DESDE TOLÚ</p>
        </div>
      </div>
    </div>
  );
};

export default location;
