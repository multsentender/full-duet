import axios from 'axios'

export const SETDATA = 'SET_DATA'
export const SETLOADED = 'SET_LOADED'
export const GETMORE = 'GET_MORE_DATA'

export const DELETECURRENTDATA = 'DELETE_CURRENT_DATA';
export const UPDCURRENTDATA = 'UPD_CURRENT_DATA';
export const SENDNEWDATA = 'SEND_NEW_DATA';

// * POST запрос на добавление нового значения

const sendNewData = (obj, path) => ({
    type: SENDNEWDATA,
    obj,
    path
});
export const postNewData = (data, path) => (dispatch) => {
  let formData;
  if (path === 'products' || path === 'gallery'){
    formData = new FormData();
    for (let key of Object.keys(data)) {
      formData.append(key, data[key]);
    }
  } else{
    formData = data
  }
  axios.post(`http://localhost:3003/api/admin/${path}`, formData).then(({ data }) => {
      dispatch(sendNewData(data, path))
  });
};



// * PATCH запрос на обновление

const updCurrentData = (obj, path) => ({
  type: UPDCURRENTDATA,
  obj,
  path
});
export const fetchUpdCurrentData = (obj, path) => (dispatch) => {
  axios
    .patch(`http://localhost:3003/api/admin/${path}?id=${obj._id}`, obj)
    .then(() => {
      dispatch(updCurrentData(obj, path));
    });
};



// * DELETE запрос на удаление

const removeCurrentData = (_id, path ) => ({
  type: DELETECURRENTDATA,
  _id,
  path
});
export const removeDataAdmin = (obj, path) => (dispatch) => {
  axios
    .delete(`http://localhost:3003/api/admin/${path}?id=${obj._id}`)
    .then(() => {
      dispatch(removeCurrentData(obj._id, path));
    });
};

export const setData = ({filters, gallery, products}) => {
    return{
        type: SETDATA,
        filters,
        gallery,
        products
    }
}

export const setLoaded = (payload) => {
    return {
        type: SETLOADED,
        payload
    }
}

export const fetchData = (favorite, type, manuf, admin) => (dispatch) => {
    dispatch(setLoaded(false))
    const manufactured = (manuf && manuf.length < 1) ? null : manuf

    axios.post(`http://localhost:3003/api/store`, {
        favorite,
        manufactured,
        type,
        admin
    }).then(({data}) => {
        dispatch(setData(data))})
}

export const fetchMoreProducts = (type, manuf, page) => dispatch => {
    axios.post(`http://localhost:3003/api/store`, {
        type,
        manuf,
        page})
        .then(({data}) => dispatch(getMoreProducts(data.products.items)))
}

export const getMoreProducts = (payload) => {
    return {
        type: GETMORE,
        payload
    }
}
