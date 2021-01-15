import React from 'react'
import {useDispatch} from 'react-redux'

import { searchTitleManuf } from '../../utils/searchTitleManuf'
import {Filters, AdminCard, Popup} from '../index'
import {removeDataAdmin} from '../../redux/actions/data'

const Content = ({state, activeFilters, handleFilters, filters}) => {
    const dispatch = useDispatch()
    const removeCurrentData = (cat, item) => {
        if (window.confirm('Вы действительно хотите удалить элемент?')) {
            dispatch(removeDataAdmin(item, cat.path));
        }
    };
    const [popup, setPopup] = React.useState({
        visible: false,
        isProduct: false,
    })
    const checkedCategory = (cat, item) => {
        if(!cat.isGallery){
            setPopup({
                visible: true, 
                isProduct: cat.isProduct, 
                currentData: {...item},
                path: cat.path
            })
        }
    }

    return (
        <main className='content'>
            {Object.values(state) &&  
                Object.values(state).map((category, index) => (
                    <div key={`category__${index}`} className="category">
                    <div className="category_heading">
                        <h3>{category.heading}</h3>
                        <button className='add_btn' onClick={() => checkedCategory(category)}>Добавить</button>
                    </div>
                    <div className="category_data">
                        {
                            category.items.map((el, index) => {
                                if(category.isProduct){
                                    el.manuf = searchTitleManuf(filters.manufactured, el.manufacture)
                                }
                                return (
                                    <AdminCard 
                                    key={`Admin-card__${index}`}
                                    el={el}
                                    isGallery={category.isGallery}
                                    removeCard={() => removeCurrentData(category, el)}
                                    category={category}
                                    updateCard={checkedCategory}
                                    />
                                    )
                                })
                        }
                    </div>
                </div>
                ))}
                {popup.visible && <Popup {...popup} {...filters}/>}
        </main>
    )
}

export default Content