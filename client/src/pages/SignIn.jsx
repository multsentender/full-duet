import React from 'react'
import Actions from '../redux/actions/user'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'

function SignIn() {
    const dispatch = useDispatch()
    const [password, setPassword] = React.useState('')
    const passwordHandler = ({target}) => {
        setPassword(target.value)
    }
    const setUser = () => {
        dispatch(Actions.fetchUserLogin({password: password}))
    }

    return (
        <div className='signIn'>
            <div className="signIn-block">
                <input type="password" placeholder='Password' name="password" value={password} onChange={passwordHandler}/>
                <button onClick={setUser} className='signIn_btn'>
                    {/* <Link to='/admin-data'> */}
                        Войти
                    {/* </Link> */}
                </button>
            </div>
        </div>
    )
}

export default SignIn
