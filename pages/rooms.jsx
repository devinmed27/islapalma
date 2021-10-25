import React from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import BookBar from "../containers/BookBar/BookBar";
import s from "../styles/pages/Rooms.module.scss";
import Image from "next/image";
import RoomCard from "../containers/RoomCard/RoomCard";
import line from "../public/static/assets/line_icon.png";
import figure from "../public/static/assets/rooms_figure.png";
import figure2 from "../public/static/assets/figure.png"

import { createClient } from "contentful";

export const getServerSideProps = async (res) => {
  var client = await createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  try {
    const bannerRoom = await client
      .getEntries({ content_type: "bannerRoom" })
      .then((entries) => entries.items);

    const roomCard = await client
      .getEntries({ content_type: "roomCard" })
      .then((entries) => entries.items);

    return {
      props: {
        bannerRoom,
        roomCard,
        statusCode: 200,
      },
    };
  } catch (e) {
    res.statusCode = 503;
    return { props: { home: {}, statusCode: 503 } };
  }
};

const Rooms = ({bannerRoom, roomCard}) => {
  const data = roomCard.reverse();

  const img = "http:" + bannerRoom[0].fields.image.fields.file.url

  return (
    <div className={s.container}>
      <SubHeader text="Habitaciones" />
      <div className={s.main}>
        <div className={s.topContent}>
          <p>
            {bannerRoom[0].fields.title}
          </p>
          <Image
            src={img}
            alt="Foto del hotel"
            width={1440}
            height={610}
          />
          <div className={s.line}>
            <div className={s.iconContainer}>
              <Image src={line} alt="plant" />
            </div>
          </div>
          <div className={s.figure}>
            <Image src={figure} alt="figure" />
          </div>
          <div className={s.figure2}>
            <Image src={figure2} alt="figure" />
          </div>
        </div>
        <div className={s.roomsContainer}>
          {data.map(({fields}) => (
            <RoomCard
            key={fields.title}
              title={fields.title}
              description={fields.description}
              imgPath={fields.images}
              bannerPath={fields.banner.fields.file.url}
              features={fields.features}
            />
          ))}
        </div>
      </div>
      <BookBar />
    </div>
  );
};

export default Rooms;
