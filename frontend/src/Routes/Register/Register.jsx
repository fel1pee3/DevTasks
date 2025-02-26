import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RxEyeOpen } from 'react-icons/rx';
import { LuEyeClosed } from 'react-icons/lu';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';
import LogoDT from '../../Components/LogoDT/Logo';
import style from './Register.module.css';

const Register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/register', values);
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={style.register}>
            <LogoDT />
            <div className={style.registerContainer}>
                <form onSubmit={handleSubmit} className={style.registerForm}>
                    <div className={style.boxInputRegister}>
                        <label className={style.label}>Nome de Usuário</label>
                        <div className={style.boxInputUser}>
                            <FaRegUserCircle className={style.iconInput} />
                            <input required className={style.registerInput} type="text" placeholder='Felipe Maia' name='username' onChange={handleChanges} />
                        </div>
                    </div>
                    <div className={style.boxInputRegister}>
                        <label className={style.label}>Email</label>
                        <div className={style.boxInputEmail}>
                            <MdOutlineAlternateEmail className={style.iconInput} />
                            <input required className={style.registerInput} type="email" placeholder='email@gmail.com' name='email' autoComplete="username" onChange={handleChanges} />
                        </div>
                    </div>
                    <div className={style.boxInputRegister}>
                        <label className={style.label}>Senha</label>
                        <div className={style.boxInputPassword}>
                            <RiLockPasswordLine className={style.iconInput} />
                            <input required className={style.registerInput} type={showPassword ? 'text' : 'password'} placeholder='Senha123@' name='password' autoComplete="new-password" onChange={handleChanges} />
                            <button className={style.btnEye} type="button" onClick={togglePasswordVisibility}>
                                {showPassword ? <RxEyeOpen /> : <LuEyeClosed />}
                            </button>
                        </div>
                    </div>
                    <button className={style.btnCad}>Cadastrar</button>
                </form>
                <div className={style.registerLogin}>
                    <p>Já tem conta?</p>
                    <Link to='/Login' className={style.linkLogin}>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
