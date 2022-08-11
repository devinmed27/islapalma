import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import s from './Header.module.scss'
import { es_lang } from '../../utils/translations/home'
import logoPath from '../../public/static/assets/logo.png'
import barsPath from '../../public/static/assets/menu.png'
import Link from 'next/link'
import wppIcon from '../../public/static/assets/whatsappHeader.png'
import igIcon from '../../public/static/assets/instagramHeader.png'
import fbIcon from '../../public/static/assets/facebookHeader.png'
// import logoPath from "../../public/static/assets/logoFooter.png";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [path, setPath] = useState('')
  const handleMenuToggle = () => {
    setOpenMenu(!openMenu)
  }

  useEffect(() => {
    setPath(window.location.pathname)
  }, [])

  return (
    <header className={s.atomcontainerheader}>
      <div className={s.topContent}>
        {/* <div className={s.lang}>{`${es_lang.header.lang_selector}`} </div> */}
        <div className={s.lang}></div>
        <Link href='/'>
          <a className={s.logoContainer} onClick={() => setOpenMenu(false)}>
            <Image layout='responsive' src={logoPath} placeholder='blur' alt='logo icon' />
          </a>
        </Link>
        <div className={s.contact}>
          <p>CONTÁCTANOS</p>
          <div className={s.iconsContainer}>
            <div className={s.iconContainer}>
              <a href='https://wa.link/a8rrwf' target='_blank' rel='noreferrer'>
                <Image src={wppIcon} alt='whatsapp icon' />
              </a>
            </div>
            <div className={s.iconContainer}>
              <a href='https://instagram.com/hotel_islapalma?utm_medium=copy_link' target='_blank' rel='noreferrer'>
                <Image src={igIcon} alt='whatsapp icon' />
              </a>
            </div>
            <div className={s.iconContainer}>
              <a href='https://es-la.facebook.com/HotelIslaPalma/' target='_blank' rel='noreferrer'>
                <Image src={fbIcon} alt='facebook icon' />
              </a>
            </div>
          </div>
        </div>
        <div className={s.icon}>
          <Image onClick={handleMenuToggle} className={s.barsImage} src={barsPath} alt='bars icon' />
          <nav className={[s.navMenu, openMenu ? s.navMenuOpen : s.navMenuClose].join(' ')}>
            <Link href='/'>
              <a className={s.logoContainer} onClick={handleMenuToggle}>
                <Image height={90} width={120} src={logoPath} placeholder='blur' alt='logo image' />
              </a>
            </Link>
            <ul>
              <li onClick={handleMenuToggle}>
                <Link href='/rooms'>
                  <a>Habitaciones</a>
                </Link>
              </li>
              <li onClick={handleMenuToggle}>
                <Link href='/experiences'>
                  <a>Experiencias</a>
                </Link>
              </li>
              <li onClick={handleMenuToggle}>
                <Link href='/promos'>
                  <a>Planes</a>
                </Link>
              </li>
              <li onClick={handleMenuToggle}>
                <Link href='/gallery'>
                  <a>Galería</a>
                </Link>
              </li>
              <li className={s.btnReserva}>
                <a href={process.env.BOOK_URL_ES} target='_blank' rel='noreferrer'>
                  Reserva ahora
                </a>
              </li>
              <li onClick={handleMenuToggle}>
                <Link href='/location'>
                  <a>¿Cómo llegar?</a>                                   
                </Link>
              </li>
              <li onClick={handleMenuToggle}>
                <Link href='/contact'>
                  <a>Contácta</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={s.bottomContent}>
        <Link href='/rooms'>
          <a className={path.includes('rooms') ? s.selected : s.noSelected}>HABITACIONES</a>
        </Link>

        <Link href='/experiences'>
          <a className={path.includes('experiences') ? s.selected : s.noSelected}>EXPERIENCIAS</a>
        </Link>

        <Link href='/promos'>
          <a className={path.includes('promos') ? s.selected : s.noSelected}>PLANES</a>
        </Link>

        <Link href='/gallery'>
          <a className={path.includes('galery') ? s.selected : s.noSelected}>GALERÍA</a>
        </Link>
        <Link href='/location'>
          <a className={path.includes('location') ? s.selected : s.noSelected}>¿CÓMO LLEGAR?</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
