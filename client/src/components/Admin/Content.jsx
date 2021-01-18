import React from 'react'
import {useDispatch} from 'react-redux'

import { searchTitleManuf } from '../../utils/searchTitleManuf'
import {Filters, AdminCard, Popup} from '../index'
import {removeDataAdmin, postNewData} from '../../redux/actions/data'

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
    const checkedCategory = (cat, item, e) => {
        if(!cat.isGallery){
            setPopup({
                visible: true, 
                isProduct: cat.isProduct, 
                currentData: {...item},
                path: cat.path
            })
        } else {
            e.preventDefault();
            dispatch(postNewData({imageUrl: e.target.files[0], type: item}, 'gallery'))
            e.target.value = null;
        }
    }
    
    return (
        <main className='content'>
            {Object.values(state) &&  
                Object.values(state).map((category, index) => (
                    <div key={`category__${index}`} className="category">
                    <div className="category_heading">
                        <h3>{category.heading}</h3>
                        {category.path === 'gallery' ? (    
                            <input className='add_btn-toGallery' type="file" name="imageUrl" onChange={(e) => checkedCategory(category, index, e)}/>
                        ) : (
                            <button className='add_btn' onClick={() => checkedCategory(category)}>Добавить</button>
                        )}
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
                        {category.isProduct &&
                    <Filters 
                    manuf={filters.manufactured}
                    types={filters.types}
                    activeFilters={activeFilters}
                    handleFilters={handleFilters}/>}
                    </div>
                </div>
                ))}
                {popup.visible && <Popup {...popup} {...filters}/>}
        </main>
    )
}

export default Content