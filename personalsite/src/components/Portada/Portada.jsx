import React, { Fragment } from 'react'
import './portada.css'
import nube from '../../assets/rocket.png'
import planet from '../../assets/saturn.png'
import me from '../../assets/jessie.jpg'
import react from '../../assets/physics.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import nodejs from '../../assets/node-js.png'
import html from '../../assets/html.png'


const Portada = () => {
    return (
        <Fragment>
            <section className='top-container' id='top'>
                <div className='container-fluid'>
                    <img className="top-cloud" src={nube} alt="rocket" />
                    <h1 className='toph1'>I'm Jessie</h1>
                    <p className='topP'>a Web Developer</p>
                    <img className="bottom-cloud" src={nube} alt="cloudimage" />
                    <img src={planet} alt="planet" className='planet' />
                </div>
            </section>
            <section className='middle-container' id='middle'>
                <div className='container-fluid'>
                    <div className="profile">
                        <img className="perfil" src={me} alt="Jessie's profile pic" />
                        <h2>Hello</h2>
                        <p className="intro">I'm 4th year Systems Engineering student <br />
                            Research Assistant at <a className="lab" href="https://innovacion.galileo.edu/">Innovation Laboratory Galileo University</a>
                        </p>
                    </div>
                    <hr />
                    <div className="skills">
                        <h2>My Skills</h2>
                        <div className="skill-row">
                            <img className="reactjs-img" src={react} alt="" />
                            <h3>React Js</h3>
                            <p>⭐️⭐️⭐️⭐️⭐️</p>
                        </div>
                        <div className="skill-rowp">
                            <img className="css-img" src={css} alt="" />
                            <h3>CSS</h3>
                            <p>⭐️⭐️⭐️⭐️</p>
                        </div>
                        <div className="skill-row">
                            <img className="js-img" src={js} alt="" />
                            <h3>JavaS</h3>
                            <p>⭐️⭐️⭐️⭐️</p>
                        </div>
                        <div className="skill-rowp">
                            <img className="nodejs-img" src={nodejs} alt="" />
                            <h3>Node Js</h3>
                            <p>⭐️⭐️⭐️⭐️</p>
                        </div>
                        <div className="skill-row">
                            <img className="html-img" src={html} alt="" />
                            <h3>HTML</h3>
                            <p>⭐️⭐️⭐️⭐️⭐️</p>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <hr />
            <section className='contact' id='contact'>
                <div className="contact-me">
                    <h2>Get In Touch</h2>
                    <h3>If you love Web Development as much as I do</h3>
                    <p className="contacto">Let's talk about it </p>
                    <a className="btn" href="mailto:jessicaalejandra.hernandez@galileo.edu">CONTACT ME</a>
                </div>
            </section>
            <br />
            <hr />
            <section className='bottom-container' id='bottom'>
                <div className="bottom-container">
                    <a className="footer-link" href="https://www.linkedin.com/in/jessica-hern%C3%A1ndez-125678223">LinkedIn</a>
                    <a className="footer-link" href="https://twitter.com/heeyjessiee?t=QL6bEg3xAkuew3G-sBJahA&s=09">Twitter</a>
                    <a className="footer-link" href="https://instagram.com/heeyjessiee__?utm_medium=copy_link">Instagram</a>
                    <a className="footer-link" href="https://www.facebook.com/profile.php?id=100014098323170">Facebook</a>
                    <p className='copyright'>© 2022 Jessica Hernández.</p>
                </div>
            </section>
        </Fragment>
    )
}

export default Portada