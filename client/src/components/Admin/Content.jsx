import React from 'react'
import {useDispatch} from 'react-redux'
import classNames from 'classnames'

import { searchTitleManuf } from '../../utils/searchTitleManuf'
import {Filters, AdminCard, Popup} from '../index'
import {removeDataAdmin, postNewData, fetchMoreProducts} from '../../redux/actions/data'

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

    //pagination
    const [page, setPage] = React.useState(1);
    const pageHandler = () => {
        setPage(prev => prev + 1)
    }
    React.useEffect(() => {
        dispatch(fetchMoreProducts(activeFilters.type, activeFilters.manuf, page))
    }, [page])
    
    return (
        <main className='content'>
            {Object.values(state) &&  
                Object.values(state).map((category, index) => (
                    <div key={`category__${index}`} className="category">
                    <div className={classNames("category_heading", {'is-products': category.isProduct})}>
                        <h3>{category.heading}</h3>
                        {category.path === 'gallery' ? (    
                            <input className='add_btn-toGallery' type="file" name="imageUrl" onChange={(e) => checkedCategory(category, index, e)}/>
                        ) : (
                            <button className='add_btn' onClick={() => checkedCategory(category)}>Добавить</button>
                        )}
                    </div>
                    <div className={classNames('category_data', {'is-products': category.isProduct})}>
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
                    {category.isProduct &&
                    <div className="admin-filters is-visible">
                        <Filters 
                            manuf={filters.manufactured}
                            types={filters.types}
                            activeFilters={activeFilters}
                            handleFilters={handleFilters}/>
                            
                            <button 
                            onClick={pageHandler} 
                            className={classNames("getMoreProducts", {'visible': category.count / (16 * page) > 1})}>
                                <span>
                                    Посмотреть ещё!
                                </span>
                            </button>
                    </div>
                    }
                </div>
                ))}
                {popup.visible && <Popup {...popup} closePopup={() => setPopup({
                    visible: false,
                    isProduct: false,
                })} {...filters}/>}
        </main>
    )
}

export default Content