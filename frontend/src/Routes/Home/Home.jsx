import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import style from "./Home.module.css";
import { FaUserCircle } from "react-icons/fa";
import HeaderHome from '../../Components/HeaderHome/HeaderHome';

const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const fetchUser = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return navigate('/login');

            const response = await axios.get('http://localhost:3000/auth/home', {
                headers: { "Authorization": `Bearer ${token}` }
            });

            if (response.status === 200) {
                setUser(response.data.user);
            } else {
                navigate('/login');
            }
        } catch (err) {
            console.error("Erro ao buscar usuário:", err);
            navigate('/login');
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className={style.home}>
            <HeaderHome/>
            <div className={style.containerHome}>
                <h1 className={style.titleWelcome}>Bem Vindo de Volta, 
                    <span className={style.nameWelcome}> {user ? user.username :  'Carregando...'}</span>
                .</h1>
                <p className={style.textMsg}>
                    Continue de onde você parou em <span className={style.nomeApp}>DevTasks</span>
                </p>
                <div className={style.boxUserHome}>
                    <div className={style.boxImg}>FM</div>
                    <div className={style.boxInfo}>
                        <div className={style.boxMin}>
                            <span className={style.emailUser}>{user ? user.email : 'Carregando...'}</span>
                            <FaUserCircle className={style.iconUser}/>
                        </div>
                        <Link className={style.btnLinkHome} to='/ScreenYourWork'>Ir para o DevTasks</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
