import React from 'react';
import {WrappedMap} from '.'
import telephone from '../assets/icon/telephone.svg'
import address from '../assets/icon/address.svg'
import clock from '../assets/icon/clock.svg'

const Footer = () => {
    return (
        <footer id='contact'>
        <div className="contacts container">
            <div className="contacts_text">
                <h4>Контакты</h4>
            </div>
            <div className="contacts_info">
                <h5>Телефон</h5>
                <p><img src={telephone} alt="Telephone"/><span>+7(961) 913-82-24</span></p>
                <h5>Адрес</h5>
                <p><img src={address} alt="Address"/><span>ул. 70 лет ВЛКСМ, д. 14</span></p>
                <h5>Часы работы</h5>
                <p><img src={clock} alt="Time"/><span>Пн-Вс: 10:00 - 20:00</span></p>
            </div>
        </div>
        <WrappedMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBF28TnyBFqo1YaucjW6-OpGSnj6P-mYcA"
            loadingElement={<div style={{ height: `40vh` }} />}
            containerElement={<div style={{ height: `40vh` }} />}
            mapElement={<div style={{ height: `40vh` }} />}
            isMarker
        />
    </footer>
    )
}

export default Footer