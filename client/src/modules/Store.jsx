import React, {useState, useEffect} from 'react';
import classNames from 'classnames'
import {useSelector, useDispatch} from 'react-redux'

import {fetchData, fetchMoreProducts} from '../redux/actions/data'
import {addToCart} from '../redux/actions/cart'
import {ProductCard, LoadingCard, Filters} from '../components'
import {searchTitleManuf} from '../utils/searchTitleManuf'



const Store = () => {
    const dispatch = useDispatch()
    const {items, count} = useSelector(({data}) => data.products)
    const {manufactured, types} = useSelector(({data}) => data.filters)
    const {isLoaded} = useSelector(({data}) => data)
    const cartItems = useSelector(({ cart }) => cart.items);

    const [visible, setVisible] = useState(true)

    //Filters
    const [activeFilters, setActiveFilters] = useState({
        manuf: [],
        type: null
    })
    const handleFilters = (filters) => {
        setActiveFilters({...activeFilters, ...filters})
    }
    useEffect(() => 
        dispatch(fetchData(false, activeFilters.type, activeFilters.manuf, null)
    ), [activeFilters])

    //pagination
    const [page, setPage] = useState(1);
    const pageHandler = () => {
        setPage(prev => prev + 1)
    }
    useEffect(() => {
        dispatch(fetchMoreProducts(activeFilters.type, activeFilters.manuf, page))
    }, [page])


    const handleAddToCart = (obj) => {
        dispatch(addToCart(obj));
    };
    return (
        <div className={classNames('store-page', {'is-visible': visible})} id='products'>
            <Filters 
                manuf={manufactured} 
                activeFilters={activeFilters}
                types={types}
                handleFilters={handleFilters}
                isStore={true}
                />
            <button onClick={() => setVisible(!visible)} className={classNames("filters-toggle_btn", {'active': visible})}>
                <span>Filters</span>
                <svg
                    width="10"
                    height="6"
                    s
                    viewBox="0 0 10 6"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#fff"
                    />
                </svg>
            </button>
            <main className='products'>
                {isLoaded ? (
                    items.map((el, index) => {
                    return (
                    <ProductCard 
                        addedCount={cartItems[el._id] && cartItems[el._id].items.length}
                        onClickAddToCart={handleAddToCart}
                        key={`Product__${index}`}
                        manuf={searchTitleManuf(manufactured, el.manufacture)}
                        title={el.title}
                        imageUrl={el.imageUrl}
                        price={el.price}
                        description={el.description}
                        application={el.application}
                        id={el._id}
                        isStore={true}/>)})
                ) : Array(16).fill(null).map((_, index) => {
                    return (<LoadingCard key={`loadingProduct__${index}`}/>)
                    })
                }
            </main>
            <button onClick={pageHandler} className={classNames("getMoreProducts", {'visible': count / (16 * page) > 1})}>
                <span>
                    Посмотреть ещё!
                </span>
            </button>
        </div>
    )
}

export default Store