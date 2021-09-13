import React from "react";
import ContactCard from "../components/ContactCard/ContactCard";
import s from "../styles/pages/Contact.module.scss";
import location from "../public/static/assets/location.png";
import wpp from "../public/static/assets/whatsapp2.png";
import Image from "next/image";
import banner from "../public/static/assets/contact-banner.png"

const contact = () => {
  return (
    <div className={s.container}>
      <div className={s.bannerContainer}>
        <Image src={banner} />
      </div>
      <div className={s.title}>
        <h1>¡Escríbenos!</h1>
        <div></div>
      </div>
      <div className={s.cards}>
        <ContactCard
          img={wpp}
          title={"Whatsapp"}
          message={"Escríbenos desde cualquier lugar, y en cualquier momento"}
          phone={"+57 314 525 1610"}
          phone2={"+57 314 551 9353"}

        />
        <ContactCard
          img={location}
          title={"Colombia"}
          message={
            "Archipiélago de San Bernando Cartagena de indias Caribe Colombiano"
          }
          phone={"Info@hotelislapalma.com"}
        />
      </div>
    </div>
  );
};

export default contact;
