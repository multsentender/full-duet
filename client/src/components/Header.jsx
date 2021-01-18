import React from 'react';
import {Link as ScroleLink} from 'react-scroll'
import {Link} from 'react-router-dom'

const Header = () => {
    const [style, setStyle] = React.useState(0)

    const listenScrollEvent = () => {
        if (window.scrollY > 100) {
            setStyle(true)
        } else {
            setStyle(false)
        }
  }
    
    React.useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])


    return (
        <header id="header" className={style ? 'scroled' : ''}>
            <div className="contact-selector">
                <div className="selblock container">
                    <p><span className="bold">Наш номер: </span>+7(961) 913-82-24</p>
                    <p><span className="bold">Часы работы: </span>Пн-Вс 10-20</p>
                    <a href="https://www.instagram.com/">
                        <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="instagram">
                            <path
                                d="M17.875 0H8.125C3.63838 0 0 3.63838 0 8.125V17.875C0 22.3616 3.63838 26 8.125 26H17.875C22.3616 26 26 22.3616 26 17.875V8.125C26 3.63838 22.3616 0 17.875 0ZM23.5625 17.875C23.5625 21.0112 21.0112 23.5625 17.875 23.5625H8.125C4.98875 23.5625 2.4375 21.0112 2.4375 17.875V8.125C2.4375 4.98875 4.98875 2.4375 8.125 2.4375H17.875C21.0112 2.4375 23.5625 4.98875 23.5625 8.125V17.875Z"
                                fill="#F3F3F3" />
                            <path
                                d="M13 6.5C9.41037 6.5 6.5 9.41038 6.5 13C6.5 16.5896 9.41037 19.5 13 19.5C16.5896 19.5 19.5 16.5896 19.5 13C19.5 9.41038 16.5896 6.5 13 6.5ZM13 17.0625C10.7607 17.0625 8.9375 15.2393 8.9375 13C8.9375 10.7591 10.7607 8.9375 13 8.9375C15.2393 8.9375 17.0625 10.7591 17.0625 13C17.0625 15.2393 15.2393 17.0625 13 17.0625Z"
                                fill="#F3F3F3" />
                            <path
                                d="M19.9877 6.87861C20.4661 6.87861 20.8538 6.49083 20.8538 6.01249C20.8538 5.53414 20.4661 5.14636 19.9877 5.14636C19.5094 5.14636 19.1216 5.53414 19.1216 6.01249C19.1216 6.49083 19.5094 6.87861 19.9877 6.87861Z"
                                fill="#F3F3F3" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="main-header">
                <nav className="container">
                    <div className="logo">
                        <Link to='/'>
                            <h1>Duet</h1>
                        </Link>
                    </div>
                    <ul className='nav-links'>
                            <Link to="/">
                                Главная
                            </Link>
                        <Link to="/store">
                            Магазин
                        </Link>
                        <Link to="/cart">
                            Корзина
                        </Link>
                        <ScroleLink
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={500}>
                        Контакты
                        </ScroleLink>
                    </ul>
                    <div className="burger">
                        <div className="burger__item"></div>
                        <div className="burger__item"></div>
                        <div className="burger__item item_3"></div>
                    </div>
                </nav>
            </div>
    </header>
    )
}

export default Header