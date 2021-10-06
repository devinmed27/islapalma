import React from "react";
import s from "./ContactCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const WppCard = ({img, title, message, phone, phone2}) => {
  return (
    <div className={s.card}>
      <div className={s.imgContainer}>
        <Image src={img} objectFit="cover" alt="logo"/>
      </div>
      <Link href="https://wa.link/5x4d89">
        <a target="_blank" rel="noreferrer">
          <p className={s.title}>{title}</p>
          <p>{message}</p>
          <p className={s.phone}>{phone}</p>
          <p className={s.phone}>{phone2}</p>
        </a>
      </Link>
    </div>
  );
};

export default WppCard;
