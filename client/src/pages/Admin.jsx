import React, {useState, useEffect, useReducer} from 'react';
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
          path: el
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
        isGallery: true
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
            items: action.payload.items,
            count: action.payload.count,
            heading: 'Товары',
          },
        };
      case 'FILTERS':
        return {
          ...toObject(filtersHeading, action.payload),
        };
      case 'GALLERY':
        return {
          ...galleryFilter(action.payload)
        };
      default:
        return state
    }
  };



const Admin = () => {
  const dispatch = useDispatch();
  const { filters, products, gallery } = useSelector(({ data }) => data);

  const [state, localDispatch] = useReducer(reducer, {}) 
  const actionCreate = (type, payload) => {
    localDispatch({type, payload})
  }

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

      </header>
      <main className="admin-page_main">
        <nav>
          <ul>
            <li onClick={() => actionCreate('PRODUCTS', products)}>Товары</li>
            <li onClick={() => actionCreate('FILTERS', filters)}>Фильтры</li>
            <li onClick={() => actionCreate('GALLERY', gallery)}>Галерея</li>
          </ul>
        </nav>
        <Content 
          filters={filters} 
          activeFilters={activeFilters} 
          handleFilters={handleFilters} 
          state={state}/>
      </main>
    </div>
  );
};

export default Admin;
