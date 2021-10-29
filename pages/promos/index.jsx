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

import { createClient } from "contentful";

export const getServerSideProps = async (res) => {
  var client = await createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  try {
    const promoCard = await client
      .getEntries({ content_type: "promoCard" })
      .then((entries) => entries.items);

    const datesCard = await client
      .getEntries({ content_type: "datesCard" })
      .then((entries) => entries.items);

    return {
      props: {
        promoCard,
        datesCard,
        statusCode: 200,
      },
    };
  } catch (e) {
    res.statusCode = 503;
    return { props: { home: {}, statusCode: 503 } };
  }
};

const Index = ({promoCard, datesCard}) => {
  const cardsInfoP = promoCard;
  const cardsInfoP2 = datesCard.reverse();

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
          {cardsInfoP.map(({fields}, index) => (
            <PromotionCard
              key={fields.title}
              text={fields.text}
              title={fields.title}
              subtitle={fields.subtitle}
              info={fields.info}
              imagePath={fields.image.fields.file.url}
              bannerPath={fields.banner.fields.file.url}
              features={fields.features}
              description={fields.description}
              price1={fields.price1}
              price2={fields.price2}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className={s.cardsContainerDesktop}>
          {cardsInfoP.map(({fields},index) => (
            <PromotionCardDesktop
              key={fields.title}
              text={fields.text}
              title={fields.title}
              subtitle={fields.subtitle}
              info={fields.info}
              imagePath={fields.image.fields.file.url}
              bannerPath={fields.banner.fields.file.url}
              features={fields.features}
              description={fields.description}
              price1={fields.price1}
              price2={fields.price2}
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
          {cardsInfoP2.map(({fields},index) => (
            <DatesCard
              key={fields.title}
              title={fields.title}
              imagePath={fields.image.fields.file.url}
              description={fields.description}
              price1={fields.price1}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className={s.cardsContainerDesktop}>
          {cardsInfoP2.map(({fields},index) => (
            <DatesCardDesktop
              key={fields.title}
              title={fields.title}
              imagePath={fields.image.fields.file.url}
              description={fields.description}
              price1={fields.price1}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
