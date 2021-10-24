import React from "react";
import Image from "next/image";
import s from "./Article.module.scss";
import rbleaf from "../../public/static/assets/rbleaft.png";
import ltleaf from "../../public/static/assets/ltleaft.png";
import lbleaf from "../../public/static/assets/lbleaft.png";

const Article = ({ text, title, imagePath, align, number }) => {
  const alignItem = {
    alignSelf: align,
  };
  const image = "http:" + imagePath
  const icon = "http:" + number

  return (
    <article className={s.container}>
      <div className={s.numberContainer}>
        <Image src={icon} alt="number" width= {364} height= {294}/>
      </div>
      <div className={s.bannerContainer}>
        <Image src={image} alt="banner image" width= {750} height= {447}/>
      </div>
      <div className={s.textContainer} style={alignItem}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={s.rbleaft} >
          <Image src={rbleaf} alt="leaf icon" />
        </div>
        <div className={s.ltleaft} >
          <Image src={ltleaf} alt="leaf icon" />
        </div>
        <div className={s.lbleaft} >
          <Image src={lbleaf} alt="leaf icon" />
        </div>
      </div>
    </article>
  );
};

export default Article;
