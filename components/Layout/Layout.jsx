import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import s from './Layout.module.scss'
// import Context from "../../context/index";
import Modal from 'react-modal'
import img from '../../public/static/assets/comunicado.jpg'
import Image from 'next/image'
const Layout = ({ children }) => {
  const [modal, setModal] = useState(false)

  const closeModal = () => {
    //save variable in local Storage
    localStorage.setItem('modal', 'true')
    setModal(false)
  }

  useEffect(() => {
    //get variable from local Storage
    const modal = localStorage.getItem('modal')
    if (modal === 'true') {
      setModal(false)
    } else {
      setModal(true)
    }
  }, [])

  return (
    <div className={s.container}>
      {modal && (
        <div className={s.modal}>
          <Image src={img} objectFit='contain' className={s.img} />
          <button className={s.closeBtn} onClick={closeModal}>
            Cerrar
          </button>
        </div>
      )}
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
