import React from "react";
import s from "../../styles/pages/Date.module.scss";
import formatterPeso from "../../utils/formatterPeso";
import Image from "next/image";
import leaf from "../../public/static/assets/rbleaft.png"

import { cardsInfoP2 } from "../../utils/texts";

// // posible getStatic paths
export const getServerSideProps = async (ctx) => {
  const idx = ctx.params.id;
  const promo = cardsInfoP2[idx];
  return {
    props: {
      promo,
    },
  };
};

const promo = ({ promo }) => {

  return (
    <div className={s.container}>
      <div className={s.cardContainer}>
        <Image src={promo.imagePath} />
      </div>
        <div className={s.info}>
            <div className={s.iconContainer}>
                <Image src={leaf} />
            </div>
          <h3 className={s.title}>{promo.title}</h3>
          <p className={s.description}>{promo.description}</p>
          <p className={s.amount}>Desde: {formatterPeso(promo.price1)}</p>
        </div>
    </div>
  );
};

export default promo;
