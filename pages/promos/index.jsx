import React, { useState, useEffect } from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import s from "../../styles/pages/Promos.module.scss";
import Image from "next/image";
import PromotionCard from "../../components/PromotionCard/PromotionCard";
import DatesCard from "../../components/DatesCard/DatesCard";
import banner from "../../public/static/assets/promBanner.png";
import bannerDesktop from "../../public/static/assets/promBanner2.png";
import subBanner from "../../public/static/assets/subBannerProm.png";
import subBannerDesktop from "../../public/static/assets/subBannerProm2.png";
import PromotionCardDesktop from "../../components/PromotionCardDesktop/PromotionCardDesktop";
import DatesCardDesktop from "../../components/DatesCardDesktop/DatesCardDesktop";

import { cardsInfoP, cardsInfoP2 } from "../../utils/texts";

const Index = () => {
  const [size, setSize] = useState(null);

  useEffect(() => {
    setSize(screen.width);
  }, []);

  return (
    <div className={s.container}>
      <SubHeader text="Planes" />
      <div className={s.bannerContainer}>
        {size < 768 ? <Image src={banner} alt="banner image"/> : <Image src={bannerDesktop} alt="banner image"/>}
      </div>
      {size < 768 ? (
        <div className={s.cardsContainer}>
          {cardsInfoP.map((card, index) => (
            <PromotionCard
              key={card.title}
              text={card.text}
              title={card.title}
              subtitle={card.subtitle}
              info={card.info}
              imagePath={card.imagePath}
              bannerPath={card.bannerPath}
              features={card.features}
              description={card.description}
              price1={card.price1}
              price2={card.price2}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className={s.cardsContainerDesktop}>
          {cardsInfoP.map((card, index) => (
            <PromotionCardDesktop
              key={card.title}
              text={card.text}
              title={card.title}
              subtitle={card.subtitle}
              info={card.info}
              imagePath={card.imagePath}
              bannerPath={card.bannerPath}
              features={card.features}
              description={card.description}
              price1={card.price1}
              price2={card.price2}
              index={index}
            />
          ))}
        </div>
      )}
      <div className={s.bannerContainer}>
        {size < 768 ? (
          <Image src={subBanner} alt="banner image" />
        ) : (
          <Image src={subBannerDesktop} alt="banner image"/>
        )}
      </div>
      {size < 768 ? (
        <div className={s.cardsContainer}>
          {cardsInfoP2.map((card, index) => (
            <DatesCard
              key={card.title}
              title={card.title}
              imagePath={card.imagePath}
              description={card.description}
              price1={card.price1}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className={s.cardsContainerDesktop}>
          {cardsInfoP2.map((card, index) => (
            <DatesCardDesktop
              key={card.title}
              title={card.title}
              imagePath={card.imagePath}
              description={card.description}
              price1={card.price1}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
