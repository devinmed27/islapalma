import React, { useState, useEffect } from 'react'
import s from '../styles/pages/Home.module.scss'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import BookBar from '../containers/BookBar/BookBar'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Article from '../components/Article/Article'
import CarouselView from '../components/CarouselView/CarouselView'
import Button from '../components/Button/Button'
import circle from '../public/static/assets/circle.png'
import start from '../public/static/assets/stars.png'
import start2 from '../public/static/assets/stars2.png'
import arrow from '../public/static/assets/right-arrow.png'
import lagunaLogo from '../public/static/assets/lagunalogo.png'

import { createClient } from 'contentful'

export const getServerSideProps = async (res) => {
  var client = await createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
  try {
    const bannerHome = await client.getEntries({ content_type: 'bannerHome' }).then((entries) => entries.items)

    const sectionOneHome = await client.getEntries({ content_type: 'sectionOneHome' }).then((entries) => entries.items)

    const sectionMiddleHome = await client
      .getEntries({ content_type: 'sectionMiddleHome' })
      .then((entries) => entries.items)

    const sectionThreeHome = await client
      .getEntries({ content_type: 'sectionThreeHome' })
      .then((entries) => entries.items)

    const sectionFourHome = await client
      .getEntries({ content_type: 'sectionFourHome' })
      .then((entries) => entries.items)

    const articleHome = await client.getEntries({ content_type: 'articleHome' }).then((entries) => entries.items)

    const carouselHome = await client.getEntries({ content_type: 'carouselHome' }).then((entries) => entries.items)

    return {
      props: {
        bannerHome,
        sectionOneHome,
        sectionMiddleHome,
        sectionThreeHome,
        sectionFourHome,
        articleHome,
        carouselHome,
        statusCode: 200,
      },
    }
  } catch (e) {
    res.statusCode = 503
    return { props: { home: {}, statusCode: 503 } }
  }
}

const Index = ({
  bannerHome,
  sectionOneHome,
  sectionMiddleHome,
  sectionThreeHome,
  sectionFourHome,
  articleHome,
  carouselHome,
}) => {
  const router = useRouter()

  let carousel = []

  carouselHome.map(({ fields }) => {
    carousel.push('http:' + fields.image.fields.file.url)
  })

  const data = carousel

  const img = 'http:' + bannerHome[0]?.fields?.image?.fields?.file?.url
  const img2 = 'http:' + sectionOneHome[0].fields.image.fields.file.url
  const img3 = 'http:' + sectionMiddleHome[0].fields.image.fields.file.url
  const img4 = 'http:' + sectionFourHome[0].fields.image.fields.file.url

  const [size, setSize] = useState(null)

  useEffect(() => {
    setSize(screen.width)
  }, [])

  return (
    <div className={s.container}>
      {/* <HomeBanner text={bannerHome[0].fields.text} img={img} /> */}
      <section className={s.sectionOne}>
        <p className={s.textOne}>{sectionOneHome[0].fields.title}</p>
        <article className={s.magic}>
          <Image src={img2} alt='banner image' width={260} height={174} />
          <div className={s.magicText}>
            <p>{sectionOneHome[0].fields.text}</p>
          </div>
          <div className={s.stars}>
            <Image src={start} alt='Pequeñas estrellas' />
          </div>
          <div className={s.stars2}>
            <Image src={start2} alt='Pequeñas estrellas' />
          </div>
        </article>
      </section>
      <section className={s.middle}>
        <div className={s.womanContainer}>
          <Image src={img3} alt='woman icon' width={1040} height={544} />
        </div>
        <div className={s.circleLeft} alt='circle image'>
          <Image src={circle} />
        </div>
        <div className={s.circleRight} alt='circle image'>
          <Image src={circle} />
        </div>
        <p>{sectionMiddleHome[0].fields.text}</p>
      </section>
      <section className={s.sectionTwo}>
        <div className={s.bg}></div>
        {articleHome.map(({ fields }) => (
          <Article
            key={fields.title}
            text={fields.description}
            title={fields.title}
            align={fields.align}
            imagePath={fields.image.fields.file.url}
            number={fields.number.fields.file.url}
          />
        ))}
      </section>
      <section className={s.sectionThree}>
        {size < 768 ? (
          <p>{sectionThreeHome[0].fields.text1}</p>
        ) : (
          <div className={s.bannerMessage}>
            <h2>{sectionThreeHome[0].fields.title}</h2>
            <p>{sectionThreeHome[0].fields.text2}</p>
          </div>
        )}
        <div className={s.carouselContainer}>
          <CarouselView data={data} />
        </div>
        <Link href='/experiences'>
          <a>
            Ver mas experiencias <Image src={arrow} alt='Flecha a la derecha' />
          </a>
        </Link>
      </section>
      <section className={s.sectionFour}>
        <Image src={img4} alt='tropical image' width={1440} height={877} />
        <div className={s.buttonPromotion}>
          <Button onClick={() => router.push('/promos')} text='Promociones' width={'154px'} />
        </div>
        {size < 768 ? <p></p> : <p>{sectionFourHome[0].fields.text}</p>}
      </section>
      <section className={s.sectionFive}>
        <div className={s.lagunaLogo}>
          <Image src={lagunaLogo} alt='tropical image' />
        </div>
        <div>
          <h3>Conoce esta gran oportunidad de inversión altamente rentable</h3>
          <p>Un espectacular proyecto eco sostenible en Tolú, ingresa a nuestra página para más información</p>
          <a target='_blank' rel="noreferer noreferrer" href='https://ecohotellagunabeach.com' className={s.buttonLaguna}>
            Conocer proyecto
          </a>
        </div>
      </section>

      <BookBar />
    </div>
  )
}

export default Index
