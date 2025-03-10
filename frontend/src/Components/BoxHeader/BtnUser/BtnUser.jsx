import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FaUserCircle } from "react-icons/fa";
import style from "./BtnUser.module.css";
import "./HeaderConfirmAlert.css";

const BtnUser = () => {
    const [user, setUser] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            try {
                const response = await axios.get('http://localhost:3000/auth/home', {
                    headers: { "Authorization": `Bearer ${token}` }
                });
                
                if (response.status === 200) {
                    setUser(response.data.user);
                }
            } catch (error) {
                console.error("Erro ao buscar usuário", error);
            }
        };

        fetchUser();
    }, []);

    const handleConfirmLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleLogout = () => {
        confirmAlert({
            title: 'Desconectar',
            message: 'Você tem certeza que deseja sair?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => handleConfirmLogout()
                },
                {
                    label: 'Não',
                    onClick: () => {}
                }
            ]
        });
    };

    return (
        <div className={style.btnUser}>
            <button className={style.btnSelect} onClick={toggleVisibility}>
                <FaUserCircle className={style.iconUser}/>
            </button>
            {isVisible && (
                <div className={style.boxItensSelect}>
                    <h4 className={style.gmailSelect}>
                        {user ? user.email : 'Carregando...'}
                    </h4>
                    <div className={style.boxBtnsItensSelect}>
                        <Link to='/perfil' className={style.btnBoxSelect}>Perfil</Link>
                        <button className={style.btnBoxSelect} onClick={handleLogout}>Sair</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BtnUser;
