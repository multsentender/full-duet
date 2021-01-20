import React, {useState, useEffect, useReducer, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchData} from '../redux/actions/data'

import { Content } from '../components';

const filtersHeading = ['Типы', 'Произоводители'];
const galleryHeading = ['Причёски', 'Окрашивание', 'Зизи косички'];

const toObject = (headings, obj) => {
    return Object.keys(obj).map((el, index) => {
      return  {
          items: Object.values(obj)[index],
          heading: headings[index],
          path: el,
      };
    });
  };

  const galleryFilter = (arr) => {
    const obj = {};
    for (let i = 0; i < 3; i++) {
      obj[i] = {
        items: arr.filter((el) => el.type === i),
        path: 'gallery',
        heading: galleryHeading[i],
        isGallery: true,
      }
    }

    return obj;
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'PRODUCTS':
        return {
          products: {
            isProduct: true,
            path: 'products',
            items: action.payload.products.items,
            count: action.payload.products.count,
            heading: 'Товары',
          },
        };
      case 'FILTERS':
        return {
          ...toObject(filtersHeading, action.payload.filters),
        };
      case 'GALLERY':
        return {
          ...galleryFilter(action.payload.gallery.items)
        };
      default:
        return state
    }
  };



const Admin = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ data }) => data);

  const [localState, localDispatch] = useReducer(reducer, {}) 
  const [activeType, setActiveType] = useState('GALLERY')

  useEffect(() => {
    localDispatch({type: activeType, payload: state})
  },
  [state, activeType])


//filters
  const [activeFilters, setActiveFilters] = useState({
      manuf: [],
      type: null
  })
  const handleFilters = (filters) => {
      setActiveFilters({...activeFilters, ...filters})
  }
  useEffect(() => 
      dispatch(fetchData(null, activeFilters.type, activeFilters.manuf, true)
  ), [activeFilters])
  
  
  return (
    <div className="admin-page">
      <header className="admin-page_header">
        <h2>Duet</h2>
      </header>
      <main className="admin-page_main">
        <nav>
          <ul>
            <li onClick={() => setActiveType('PRODUCTS')}>Товары</li>
            <li onClick={() => setActiveType('FILTERS')}>Фильтры</li>
            <li onClick={() => setActiveType('GALLERY')}>Галерея</li>
          </ul>
        </nav>
        <Content 
          filters={state.filters} 
          activeFilters={activeFilters} 
          handleFilters={handleFilters} 
          state={localState}/>
      </main>
    </div>
  );
};

export default Admin;
