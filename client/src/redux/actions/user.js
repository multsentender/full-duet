import { openNotification } from 'utils/helpers';
import { userApi } from 'utils/api';

const Actions = {
  setIsAuth: bool => ({
    type: 'USER:SET_IS_AUTH',
    payload: bool,
  }),
  fetchUserLogin: postData => dispatch => {
    return userApi
      .signIn(postData)
      .then(({ data }) => {
        const { token } = data;
        openNotification({
          title: 'Отлично!',
          text: 'Авторизация успешна.',
          type: 'success',
        });
        window.axios.defaults.headers.common['token'] = token;
        window.localStorage['token'] = token;
        dispatch(Actions.setIsAuth(true));
        return data;
      })
      .catch(({ response }) => {
        openNotification({
          title: 'Ошибка при авторизации',
          text: 'Неверный пароль',
          type: 'error',
        });
      });
  },
};

export default Actions;
