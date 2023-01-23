import React, {Fragment} from 'react'
import logo from '../assets/img/logo.svg'
import './header.css'

const Header = () => {

    const data = {

        h1: "La próxima revolución en el intercambio de criptomonedas.",
        p: "Batatabit te ayuda a navegar entre los diferentes precios y tendencias.",
        a: "Conoce Nuestros Planes",
        imagen: logo

    }

  return (
    <Fragment>
        <header>
            <img src={data.imagen} alt='Logotipo' />
            <div className='header--title-container'>
                <h1>{data.h1}</h1>
                <p>{data.p}</p>
                <a href='#plans' className='header--button'>{data.a} <span></span> </a>
            </div>
        </header>
    </Fragment>
  )
}

export default Header