import React from "react";
import s from "../styles/pages/Home.module.scss";
// import Button from "../components/Button/Button";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import BookBar from "../containers/BookBar/BookBar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Article from "../components/Article/Article";
import CarouselView from "../components/CarouselView/CarouselView";
import muellePath from "../public/static/assets/muelle.png";
import tropicalBgPath from "../public/static/assets/tropical-bg.png";
import Button from "../components/Button/Button";

import {homeTexts} from "../utils/texts"

const index = () => {
  const router = useRouter();
  const articlesInfo = homeTexts;

  return (
    <div className={s.container}>
      <HomeBanner />
      <section className={s.sectionOne}>
        <p className={s.textOne}>
          Vivir la magia de Isla Palma es conectarse con la naturaleza,
          sorprenderse inmensidad de un majestuoso mar, es disfrutar cada
          instante dentro de nuestro maravilloso hotel.
        </p>
        <article className={s.magic}>
          <Image src={muellePath} placeholder="blur" />
          <div className={s.magicText}>
            <p>Desconéctate, vive y disfruta la magia de Isla palma</p>
          </div>
          <img
            className={s.stars}
            src="/static/assets/stars.png"
            alt="Pequeñas estrellas"
          />
        </article>
      </section>
      <section className={s.sectionTwo}>
        <div className={s.bg}></div>
        {articlesInfo.map(({ text, title, align, imagePath }) => (
          <Article
            key={title}
            text={text}
            title={title}
            align={align}
            imagePath={imagePath}
          />
        ))}
      </section>
      <section className={s.sectionThree}>
        <p>
          Olvídate de todo, Ven a vivir la experiencia de Isla palma, aquí te
          encontraras una aventura inolvidable
        </p>
        <div className={s.carouselContainer}>
          <CarouselView />
        </div>
        <Link href="/experiences">
          <a>
            Ver mas experiencias{" "}
            <img
              src="/static/assets/right-arrow.png"
              alt="Flecha a la derecha"
            />
          </a>
        </Link>
      </section>
      <section className={s.sectionFour}>
        <Image src={tropicalBgPath} placeholder="blur" />
        <div className={s.buttonPromotion}>
          <Button
            onClick={() => router.push("/promotions")}
            text="Promociones"
            width={"154px"}
          />
        </div>
      </section>
      <BookBar />
    </div>
  );
};

export default index;
