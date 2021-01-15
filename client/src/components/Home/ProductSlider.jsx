import React from 'react';
import PropTypes from 'prop-types'
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'
import {searchTitleManuf} from '../../utils/searchTitleManuf'

import {ProductCard, LoadingCard} from '..'

SwiperCore.use([Navigation, Autoplay]);

const ProductSlider = React.memo(({items, manuf, isLoaded}) => {
    return (
        <div id="products" className="slider">
            <div className="slider_info">
                <h4>Наша продукция</h4>
            </div> 
            <Swiper
                    className='slider_block'
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    scrollbar={{ draggable: true }}
                    >
                    {isLoaded ?
                        items.map((el, index) => (
                            <SwiperSlide 
                                key={`Product-slider__${index}`}
                                className="slider_block--items">
                                <ProductCard 
                                    id={el._id}
                                    manuf={searchTitleManuf(manuf, el.manufacture)}
                                    title={el.title}
                                    imageUrl={el.imageUrl}
                                    price={el.price}
                                    description={el.description}
                                    application={el.application}
                                    isStore={false}/>
                                </SwiperSlide>
                        )) : 
                        Array(6).fill(null).map((_, index) => (
                            <SwiperSlide 
                                key={`loadingProduct__${index}`}
                                className="slider_block--items">
                                <LoadingCard/>
                            </SwiperSlide>
                        ))
                    } 
                    </Swiper>
            <div className="slider_btn">
                <Link to="/store">
                    <div>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>	
                        <span>Магазин</span>
                    </div>
                </Link>
            </div>
        </div>
    )
},
    (prevState, nextState) => {
        if (prevState.count !== nextState.count){
            return false
        } else {
            return true
        }
    })

ProductSlider.propTypes = {
    items: PropTypes.array,
    manuf: PropTypes.array,
    isLoaded: PropTypes.bool
}

ProductSlider.defaultProp = {
    items: [],
    manuf: [],
    isLoaded: false
}

export default ProductSlider
