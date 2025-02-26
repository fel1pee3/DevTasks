import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LogoDT from '../../Components/LogoDT/Logo';
import style from "./Home.module.css";

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

            console.log("Resposta da API:", response.data);

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
            <div className={style.homeContainer}>
                <h1 className={style.welcomeMessage}>
                    Bem-vindo {user ? user.username : "!"}
                </h1>
            </div>
        </div>
    );
};

export default Home;
