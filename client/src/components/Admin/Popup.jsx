import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { postNewData, fetchUpdCurrentData } from '../../redux/actions/data';


const Popup = ({ isProduct, currentData, path, manufactured, types }) => {
    console.log(currentData)
    const dispatch = useDispatch();
    const initialState = isProduct ? {
        title: '',
        type: '',
        description: '',
        price: 0,
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
  };

  return (
    <div className="modal">
      <div className="popup">
        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          encType="multipart/form-data">
          <input type="text" placeholder="Title" value={state.title} name="title" />
          {isProduct && (
              <div>
                <input type="number" placeholder="Price" value={state.price} name="price" />
                <input type="text" placeholder="Description" value={state.description} name="description" />
                <input type="text" placeholder="Application" value={state.application} name="application" />
                <input type="file" name="imageUrl"/>
                <input type="checkbox" placeholder="Favorite" checked={state.favorite} name="favorite" />
                <select name="manufacture">
                    {manufactured.map((item, index) => {
                    return (
                        <option value={item._id} key={`${item._id}_${index}`}>
                            {item.title}
                        </option>
                    );
                    })}
                </select>
                <select name="type">
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
          <input type="submit" value="Create new item" />
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