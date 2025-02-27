import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from "./Home.module.css";
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
            <h1>Bem Vindo de Volta, 
                <span>{user ? user.username : 'Carregando...'}</span>
            .</h1>
        </div>
    );
};

export default Home;
