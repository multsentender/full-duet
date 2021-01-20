import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { postNewData, fetchUpdCurrentData } from '../../redux/actions/data';


const Popup = ({ closePopup, isProduct, currentData, path, manufactured, types }) => {
    const dispatch = useDispatch();
    const initialState = isProduct ? {
        title: '',
        type: '',
        description: '',
        application: '',
        price: '',
        manufacture: '',
        imageUrl: {},
        application: '',
        favorite: false,
    } : {
        title: ''
    }

  const [state, setState] = useState(initialState);
  React.useEffect(() => {
      if(currentData._id) {
          setState(currentData)
      } else {
          setState(initialState)
      }
  }, [path, currentData])

  const handleChange = ({ target }) => {
    setState((prevState) => ({
      ...prevState,
      [target.name]:
        target.type === 'checkbox'
          ? target.checked
          : target.files
          ? target.files[0]
          : target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(currentData._id) {
        dispatch(fetchUpdCurrentData(state, path));
    } else{
        dispatch(postNewData(state, path));
    }
    setState(initialState)
    closePopup()
  };

  return (
    <div className="modal">
      <div className="popup">
        <div className="popup-close_btn" onClick={closePopup}></div>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data">
          <input type="text" placeholder="Title" value={state.title} onChange={handleChange} name="title" />
          {isProduct && (
              <div>
                <input type="number" placeholder="Price" value={state.price} onChange={handleChange} name="price" />
                <input type="text" placeholder="Description" value={state.description} onChange={handleChange} name="description" />
                <input type="text" placeholder="Application" value={state.application} onChange={handleChange} name="application" />
                <input type="file" name="imageUrl" onChange={(e) => handleChange(e)}/>
                <div>
                  <input type="checkbox" placeholder="Favorite" checked={state.favorite} onChange={handleChange} name="favorite" />
                  <label for='Favorite'>Favorite</label>
                </div>
                <select name="manufacture" value={state.manufacture} onChange={handleChange}>
                    {manufactured.map((item, index) => {
                    return (
                        <option value={item._id} key={`${item._id}_${index}`}>
                            {item.title}
                        </option>
                    );
                    })}
                </select>
                <select name="type" value={state.type} onChange={handleChange}>
                    {types.map((item, index) => {
                    return (
                        <option value={item._id} key={`${item._id}_${index}`}>
                            {item.title}
                        </option>
                    );
                    })}
                </select>
              </div>
          )}
          <input type="submit" value={currentData._id ? 'Изменить' : "Добавить новый"} />
        </form>
      </div>
    </div>
  );
};

Popup.propTypes = {
  currentData: PropTypes.object,
  manufactured: PropTypes.array,
  types: PropTypes.array,
};

export default Popup;