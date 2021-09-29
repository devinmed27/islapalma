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
import article1Path from "../public/static/assets/article1.png";
import article2Path from "../public/static/assets/article2.png";
import article3Path from "../public/static/assets/article3.png";
import article4Path from "../public/static/assets/article4.png";
import tropicalBgPath from "../public/static/assets/tropical-bg.png";
import Button from "../components/Button/Button";

const index = () => {
  const router = useRouter();
  const articlesInfo = [
    {
      title: "Naturaleza",
      text: "Tenemos el privilegio de ver avifauna en nuestra isla, disfruta de su variedad y los colores de las aves y vegetación",
      align: "center",
      imagePath: article1Path,
    },
    {
      title: "Experiencias",
      text: "Caminatas ecológicas, ejercicio al aire libre, buceo, Kayak y una exquisita gastronomía; son algunas de las experiencias que tenemos para ti.",
      align: "flex-end",
      imagePath: article2Path,
    },
    {
      title: "Playa",
      text: "Conéctate con tus sentidos, escucha los sonidos del mar y las aves, además disfruta de unos paisajes que no olvidarás.",
      align: "flex-start",
      imagePath: article3Path,
    },
    {
      title: "Privacidad",
      text: "Vive la experiencia de estar en una de las mejores playas privadas de nuestro país, brindándote tranquilidad y exclusividad.",
      align: "center",
      imagePath: article4Path,
    },
  ];

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
