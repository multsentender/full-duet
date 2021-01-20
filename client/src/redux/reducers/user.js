const initialState = {
    data: null,
    token: null,
    isAuth: false
  };
  
const user = (state = initialState, { type, payload }) => {
    switch (type) {
      case "USER:SET_IS_AUTH":
        return {
          ...state,
          isAuth: payload
        };
      default:
        return state;
    }
  };
  
export default user