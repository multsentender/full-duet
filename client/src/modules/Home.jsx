import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-scroll'

import {fetchData} from '../redux/actions/data'
import {Gallery, ProductSlider} from '../components'

import image from '../assets/img/about.png'

const Home = () => {
    const dispatch = useDispatch();

    const {filters, products, gallery, isLoaded} = useSelector(({data}) => data)

    const [activeType, setActiveType] = useState(null)
    const activeTypeHandler = (val) => {
        setActiveType(val)
    }
    useEffect(() => {
        dispatch(fetchData(true, activeType, null, null))
    }, [activeType])

    return (
        <div className="home">
            <main className="page">
                <div className="main-back" id='main'>
                    <div className="maintext">
                        <h2 className="test">Место создания прекрасного</h2>
                        <p>Современное оборудование, професиональные косметические средства и умелые специалисты с большим опытом работы - то, что помогает достичь выдающихся результатов!</p>
                        <button>
                            <Link
                            to='contact'
                            duration={500}
                            smooth={true}
                            offset={-75}>
                            <span>Контакты</span>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="infopage container" id='about'>
                    <div className="infotext">
                        <h2>Кто мы?</h2>
                        <p>У нас работают специалисты высокого класса. Стилисты и парикмахеры помогут вам сохранить свою молодость и преумножить красоту. Мы предлагаем большой перечень услуг: стрижки, долговременная укладка, окрашивание любой сложности, маникюр, педикюр, мелирование, коррекция и окрашивание бровей.</p>
                    </div>
                    <img src={image} alt="masterpiece"/>
                </div>
                <div className="services-all" id="service">
                   <div className="services">
                        <div className="services_title">
                            <h3>Услуги</h3>
                        </div>
                        <div className="services_haircut">
                            <div className="services_haircut-man">
                                <h4>Мужские стрижки</h4>
                                <ul className="haircut_items">
                                    <li><p>Канадка</p><span>150</span></li>
                                    <li><p>Модельная</p><span>240</span></li>
                                    <li><p>Креативная</p><span>270</span></li>
                                    <li><p>Андеркат</p><span>300</span></li>
                                    <li><p>Окантовка</p><span>70</span></li>
                                    <li><p>Борода</p><span>100</span></li>
                                </ul>
                            </div>
                            <div className="services_haircut-woman">
                                <h4>Женские стрижки</h4>
                                <ul className="haircut_items">
                                    <li><p>"Если вам за 60" без фелировки</p><span>150</span></li>
                                    <li><p>Модельная</p><span>270</span></li>
                                    <li><p>Каскад</p><span>300-350</span></li>
                                    <li><p>Каре</p><span>300-350</span></li>
                                    <li><p>Челка</p><span>100</span></li>
                                    <li><p>Кончики</p><span>200-250</span></li>
                                    <li><p>Лечебная</p><span>от 300</span></li>
                                    <li><p>Полировка</p><span>300-700</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="services_another-block">
                            <h4>Остальные услуги</h4>
                            <div className="another">
                                <ul className="another_items">
                                    <li><p>Уладка</p><span>от 350</span></li>
                                    <li><p>Мелирование</p><span>от 600</span></li>
                                    <li><p>Договременная укладка</p><span>от 600</span></li>
                                    <li><p>Осветление</p><span>от 600</span></li>
                                </ul>
                                <ul className="another_items">
                                    <li><p>Брови</p><span>от 350</span></li>
                                    <li><p>Маникюр</p><span>200</span></li>
                                    <li><p>Педикюр</p><span>750</span></li>
                                    <li><p>Сложные техники окрашивания</p><span>от 1500</span></li>
                                </ul>
                                <ul className="another_items">
                                    <li><p>Окрашивание своей краской</p><span>от 350</span></li>
                                    <li><p>Окрашивание Matrix</p><span>от 750</span></li>
                                    <li><p>Окрашивание Estel</p><span>от  600</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    
                <Gallery active={activeType} setActive={activeTypeHandler} items={gallery.items} isLoaded={isLoaded}/>
                <ProductSlider items={products.items} count={products.count} manuf={filters.manufactured} isLoaded={isLoaded}/>
                <div className="text_block">
                    <p>Для тех, кто действительно любит свои волосы.</p>
                </div>
            </main>
        </div>
    )
}

export default Home
