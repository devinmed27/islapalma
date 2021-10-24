import React, { useState, useEffect } from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import s from "../styles/pages/Experiences.module.scss";
import Image from "next/image";
import banner from "../public/static/assets/experiences-banner.jpg";
import BookBar from "../containers/BookBar/BookBar";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";

import Button from "../components/Button/Button";

import { createClient } from "contentful";

export const getServerSideProps = async (res) => {
  var client = await createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  try {
    const bannerExperiences = await client
      .getEntries({ content_type: "bannerExperiences" })
      .then((entries) => entries.items);

      const experienceCard = await client
      .getEntries({ content_type: "experienceCard" })
      .then((entries) => entries.items);

      const experienceText = await client
      .getEntries({ content_type: "experienceText" })
      .then((entries) => entries.items);

    return {
      props: {
        bannerExperiences,
        experienceCard,
        experienceText,
        statusCode: 200,
      },
    };
  } catch (e) {
    res.statusCode = 503;
    return { props: { home: {}, statusCode: 503 } };
  }
};

const Experiences = ({bannerExperiences, experienceCard, experienceText}) => {
  const cardsInfo = experienceCard.reverse();
  const [url, setUrl] = useState(process.env.BOOK_URL_ES);
  const [size, setSize] = useState(null);

  let aux = []

  if (size < 768) {
    aux = ["column", "column", "column", "column", "column"];
  } else {
    aux = ["row", "row-reverse", "row", "row-reverse", "row"];
  }

  useEffect(() => {
    setSize(screen.width);
  }, []);

  return (
    <div className={s.container}>
      <SubHeader text="Experiencias" />
      <div className={s.banner}>
        <div className={s.imgContainer}>
          <Image src={banner} alt= "imagen de playa" objectFit="fill"/>
        </div>
        <p className={s.text}>
          {bannerExperiences[0].fields.title}
        </p>
      </div>
      <div className={s.sectionTwo}>
        {cardsInfo.map(
          ({ fields }, index) => (
            <ExperienceCard
              key={fields.title}
              text={fields.text}
              title={fields.title}
              service={fields.service}
              imagePath={fields.image.fields.file.url}
              iconPath={fields.icon.fields.file.url}
              align={aux[index]}
            />
          )
        )}
      </div>
      <div className={s.sectionThree}>
        <div className={s.title}>
          <div></div>
          <p>{experienceText[0].fields.title}</p>
          <div></div>
        </div>
        <p className={s.text}>
        {experienceText[0].fields.text}
        </p>
        <a href={url} target="_blank" rel="noreferrer">
          <Button text="Reserva" />
        </a>
      </div>
      <BookBar />
    </div>
  );
};

export default Experiences;
