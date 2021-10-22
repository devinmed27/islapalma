import React, {useState, useEffect} from "react";
import s from "../styles/pages/Home.module.scss";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import BookBar from "../containers/BookBar/BookBar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Article from "../components/Article/Article";
import CarouselView from "../components/CarouselView/CarouselView";
import Button from "../components/Button/Button";
import circle from "../public/static/assets/circle.png";
import womanPath from "../public/static/assets/woman-vector.png";
import start from "../public/static/assets/stars.png";
import start2 from "../public/static/assets/stars2.png";
import arrow from "../public/static/assets/right-arrow.png"

import { createClient } from "contentful";

export const getServerSideProps = async (res) => {
  var client = await createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  try {
    const home = await client
      .getEntries({ content_type: "home" })
      .then((entries) => entries.items);
    
    return { props: { home, statusCode: 200 } };
  } catch (e) {
    res.statusCode = 503;
    return { props: { home: {}, statusCode: 503 } };
  }
};

const Index = ({home}) => {
  // console.log(home[0].fields.testImage.fields.file.url)
  // console.log(home[0].fields.homeCarousel)
  const router = useRouter();
  const articlesInfo = home[0].fields.articles;

  const data = home[0].fields.homeCarousel;

  const img = "http:" + home[0].fields.bannerImage.fields.file.url


  const [size, setSize] = useState(null)

  useEffect(() => {
    setSize(screen.width)
  }, [])

  return (
    <div className={s.container}>
      <HomeBanner img={img}/>
      <section className={s.sectionOne}>
        <p className={s.textOne}>
          {home[0].fields.section1.title}
        </p>
        <article className={s.magic}>
          <Image src={home[0].fields.section1.url} alt="banner image"  width= {260} height= {174}/>
          <div className={s.magicText}>
            <p>{home[0].fields.section1.text}</p>
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
          <CarouselView data = {data}/>
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
        <Image src={home[0].fields.section4.imagePath}  alt="tropical image"  width= {1440} height= {877}/>
        <div className={s.buttonPromotion}>
          <Button
            onClick={() => router.push("/promos")}
            text="Promociones"
            width={"154px"}
          />
        </div>
          {size < 768 ? (<p></p>) : (<p>{home[0].fields.section4.text}</p>)}
      </section>
      <BookBar />
    </div>
  );
};

export default Index;

