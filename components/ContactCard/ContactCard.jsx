import React from "react";
import s from "./ContactCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const WppCard = ({img, title, message, phone}) => {
  return (
    <div className={s.card}>
      <div className={s.imgContainer}>
        <Image src={img} objectFit="cover" alt="logo"/>
      </div>
      <Link href="">
        <a target="_blank">
          <p className={s.title}>{title}</p>
          <p>{message}</p>
          <p className={s.phone}>{phone}</p>
        </a>
      </Link>
    </div>
  );
};

export default WppCard;
