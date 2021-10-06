import React, {useState, useEffect} from "react";
import s from "../styles/pages/Home.module.scss";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import BookBar from "../containers/BookBar/BookBar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Article from "../components/Article/Article";
import CarouselView from "../components/CarouselView/CarouselView";
import muellePath from "../public/static/assets/muelle.jpg";
import tropicalBgPath from "../public/static/assets/tropical-bg.jpg";
import Button from "../components/Button/Button";
import circle from "../public/static/assets/circle.png";
import womanPath from "../public/static/assets/woman-vector.png";
import start from "../public/static/assets/stars.png";
import start2 from "../public/static/assets/stars2.png";
import arrow from "../public/static/assets/right-arrow.png"

import { homeTexts } from "../utils/texts";

const Index = () => {
  const router = useRouter();
  const articlesInfo = homeTexts;

  const [size, setSize] = useState(null)

  useEffect(() => {
    setSize(screen.width)
  }, [])

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
          <Image src={muellePath} placeholder="blur" alt="banner image"/>
          <div className={s.magicText}>
            <p>Desconéctate, vive y disfruta la magia de Isla palma</p>
          </div>
          <div className={s.stars}>
            <Image src={start} alt="Pequeñas estrellas" />
          </div>
          <div className={s.stars2}>
            <Image src={start2} alt="Pequeñas estrellas" />
          </div>
        </article>
      </section>
      <section className={s.middle}>
        <div className={s.womanContainer}>
          <Image src={womanPath} alt="woman icon"/>
        </div>
        <div className={s.circleLeft} alt="circle image">
          <Image src={circle} />
        </div>
        <div className={s.circleRight} alt="circle image">
          <Image src={circle} />
        </div>
        <p>¡ENAMÓRATE DE ISLA PALMA!</p>
      </section>
      <section className={s.sectionTwo}>
        <div className={s.bg}></div>
        {articlesInfo.map(({ text, title, align, imagePath, number }) => (
          <Article
            key={title}
            text={text}
            title={title}
            align={align}
            imagePath={imagePath}
            number={number}
          />
        ))}
      </section>
      <section className={s.sectionThree}>
        { size < 768 ? (<p>
          Olvídate de todo, Ven a vivir la experiencia de Isla palma, aquí te
          encontraras una aventura inolvidable
        </p>) : (
          <div className={s.bannerMessage}>
            <h2>EXPERIENCIAS</h2>
            <p>Olvídate de todo, Ven a vivir la experiencia de Isla palma, aquí te encontraras  una aventura inolvidable</p>
          </div>
        )}
        <div className={s.carouselContainer}>
          <CarouselView />
        </div>
        <Link href="/experiences">
          <a>
            Ver mas experiencias{" "}
            <Image
              src={arrow}
              alt="Flecha a la derecha"
            />
          </a>
        </Link>
      </section>
      <section className={s.sectionFour}>
        <Image src={tropicalBgPath} placeholder="blur" alt="tropical image"/>
        <div className={s.buttonPromotion}>
          <Button
            onClick={() => router.push("/promos")}
            text="Promociones"
            width={"154px"}
          />
        </div>
          {size < 768 ? (<p></p>) : (<p>DESCUBRE LAS OFERTAS QUE TENEMOS PREPARADAS SOLO PARA TI.</p>)}
      </section>
      <BookBar />
    </div>
  );
};

export default Index;
