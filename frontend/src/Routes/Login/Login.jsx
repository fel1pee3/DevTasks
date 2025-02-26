import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RxEyeOpen } from 'react-icons/rx';
import { LuEyeClosed } from 'react-icons/lu';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import LogoDT from '../../Components/LogoDT/Logo';
import style from './Login.module.css';

const Login = () => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleChanges = (e) => {
        setValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:3000/auth/login', values);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                navigate('/');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Erro ao fazer login');
        }
    };

    return (
        <div className={style.login}>
            <LogoDT />
            <div className={style.loginContainer}>
                <form onSubmit={handleSubmit} className={style.loginForm}>
                    <div className={style.boxInputLogin}>
                        <label className={style.label}>Email</label>
                        <div className={style.boxInputEmail}>
                            <MdOutlineAlternateEmail className={style.iconInput} />
                            <input 
                                required 
                                className={style.loginInput} 
                                type="email" 
                                placeholder='Email' 
                                name='email' 
                                autoComplete='username' 
                                onChange={handleChanges} 
                            />
                        </div>
                    </div>
                    <div className={style.boxInputLogin}>
                        <label className={style.label}>Senha</label>
                        <div className={style.boxInputPassword}>
                            <RiLockPasswordLine className={style.iconInput} />
                            <input 
                                required 
                                className={style.loginInput} 
                                type={showPassword ? 'text' : 'password'} 
                                placeholder='Senha' 
                                name='password' 
                                autoComplete='current-password' 
                                onChange={handleChanges} 
                            />
                            <button className={style.btnEye} type='button' onClick={togglePasswordVisibility}>
                                {showPassword ? <RxEyeOpen /> : <LuEyeClosed />}
                            </button>
                        </div>
                    </div>
                    {error && <p className={style.errorMessage}>{error}</p>}
                    <button className={style.btnCad}>Login</button>
                </form>
                <div className={style.loginRegister}>
                    <p>Não tem conta?</p>
                    <Link to='/Register' className={style.linkRegister}>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
