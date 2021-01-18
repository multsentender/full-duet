import React from 'react';
import ContentLoader from "react-content-loader"
import PropTypes from 'prop-types'

const filter = [
    {type: 0, title: "Причёски"},
    {type: 1, title: "Окрашивания"},
    {type: 2, title: "Зизи косички"},
]

const Gallery = ({items, active, setActive, isLoaded}) => {
    return(
        <div className="gallery container">
            <div className="gallery_info">
                <h4>Галерея</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minima hic porro harum asperiores nulla molestias culpa. Perferendis, in harum.</p>
            </div>
            <div className="gallery_types">
                <button 
                    onClick={() => setActive(null)}
                    className={active === null ? 'active' : ''}
                    >Все</button>

                {filter.map((el, index) => {
                    return (
                        <button 
                            onClick={() => setActive(el.type)}
                            className={active === index ? 'active' : ''}
                            key={`galleryFilter__${el.type}`}>{el.title}</button>)
                })}
            </div>
            <div className="gallery_photos">
                {isLoaded ? items.map((el, index) => {
                    return(
                        <div key={`gallery-item__${index}`} className="gallery_photos--item"><img src={el.imageUrl} alt="gallery"/></div>
                    )
                }) : Array(6).fill(null).map((_, index) => {
                        return (
                            <ContentLoader 
                                speed={2}
                                width={'300'}
                                height={'300'}
                                viewBox="0 0 300 300"
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                                key={`loadingGalleryItem_${index}`}
                            >
                                <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" /> 
                            </ContentLoader>
                        )
                    })}

            </div>
            <div className="gallery_btn">
                <a src='#'><span>Instagram</span></a>
            </div>
        </div>
    )
}

Gallery.propTypes = {
    items: PropTypes.array,
    isLoaded: PropTypes.bool
}

Gallery.defaultProp = {
    items: [],
    isLoaded: false
}

export default Gallery