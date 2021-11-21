import React from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import s from "../styles/pages/Terms.module.scss";
import { createClient } from "contentful";

export const getServerSideProps = async (res) => {
  var client = await createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  try {
    const politics = await client
      .getEntries({ content_type: "politics" })
      .then((entries) => entries.items);

    return { props: { politics, statusCode: 200 } };
  } catch (e) {
    res.statusCode = 503;
    return { props: { politics: {}, statusCode: 503 } };
  }
};

const Politics = ({politics}) => {
  return (
    <div className={s.container}>
      <SubHeader text="NUESTRAS POLÍTICAS" />
      <div className={s.info}>
        <h3>{politics[0].fields.title}</h3>
        <p>{politics[0].fields.paragraph}</p>
        <p>{politics[0].fields.paragraph2}</p>
        <p>{politics[0].fields.paragraph3}</p>
      </div>
    </div>
  );
};

export default Politics;
