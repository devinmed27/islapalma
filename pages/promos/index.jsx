import React from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import s from "../../styles/pages/Promos.module.scss";
import Image from "next/image"
import PromotionCard from "../../components/PromotionCard/PromotionCard";
import banner from "../../public/static/assets/promBanner.png";
import subBanner from "../../public/static/assets/subBannerProm.png";

import {cardsInfoP} from "../../utils/texts"

const index = () => {




  return (
    <div className={s.container}>
      <SubHeader text="Planes" />
      <div className={s.bannerContainer}>
      <Image src = {banner} />
      </div>
      <div className={s.cardsContainer}>
        {cardsInfoP.map((card,index) => (
          <PromotionCard
            key={card.title}
            text={card.text}
            title={card.title}
            subtitle={card.subtitle}
            info={card.info}
            imagePath={card.imagePath}
            bannerPath={card.bannerPath}
            features = {card.features}
            description = {card.description}
            price1 = {card.price1}
            price2 = {card.price2}
            index = {index}
          />
        ))}
      </div>
      <div className={s.bannerContainer}>
      <Image src = {subBanner} />
      </div>
    </div>
  );
};

export default index;
