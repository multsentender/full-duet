import axios from 'axios';

const Actions = {
  setIsAuth: bool => ({
    type: 'USER:SET_IS_AUTH',
    payload: bool,
  }),
  fetchUserLogin: postData => dispatch => {
    return axios.post(`${process.env.BASE_URL}/api/admin/auth`, postData)
      .then(({ data }) => {
        const { token } = data;
        axios.defaults.headers.common['Authorization'] = token
        window.localStorage['Authorization'] = token;
        dispatch(Actions.setIsAuth(true));
        return data;
      })
      .catch(({ response }) => {alert('Пароль неверный!')});
  },
};

export default Actions;
