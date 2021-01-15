import React from 'react';
import PropTypes from 'prop-types'

const ProductCard = ({
    id, 
    manuf, 
    title, 
    imageUrl, 
    price, 
    description, 
    application, 
    isStore, 
    onClickAddToCart,
    addedCount}) => {
    const onAddToCart = () => {
        const obj = {
            id,
            title,
            manuf,
            imageUrl,
            description,
            application,
            price
        }
        onClickAddToCart(obj)
    }


    return(
        <div className="products--item">
            <div className="products--item_image">
                <img src={imageUrl} alt="product"/>
            </div>
            <div className="products--item_info">
                <h5 className='product-manuf'>{manuf}</h5>
                <h6 className='product-title'>{title}</h6>
                <p className='product-description'>{description}</p>
                {application && (
                    <span className='product-application'>{application}</span>
                )}
                {isStore && (
                    <div className="product--item_cart">
                        <span>₽{price}</span>
                        <button
                            onClick={onAddToCart}>
                             <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            {addedCount && <i>{addedCount}</i>}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    manuf: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number,
    description: PropTypes.string,
    application: PropTypes.string,
    isStore: PropTypes.bool,
    onClickAddToCart: PropTypes.func,
    addedCount: PropTypes.number
}

ProductCard.defaultProp = {
    manuf: '',
    title: '',
    imageUrl: '',
    price: 0,
    isStore: false
}

export default ProductCard;