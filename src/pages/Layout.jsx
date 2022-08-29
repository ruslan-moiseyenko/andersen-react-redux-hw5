import React, { useState, useEffect } from 'react';
import { Outlet, NavLink } from "react-router-dom";
import { Cart } from '../components/Cart/Cart';
import Modal from '../components/Modal/Modal';
import RegForm from '../components/RegForm/RegForm'
import styles from './Layout.module.css';

export const Layout = () => {
    const [showModal, setShowModal] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginButtonText, setLoginButtonText] = useState("Login");


    const onLoginButtonClick = () => {

        if (loggedIn) {
            setLoggedIn(false);
        } else {
            toggleModal();
        }
    };
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const onLogIn = () => {
        setLoggedIn(true)
    }

    useEffect(() => {
        if (loggedIn) {
            setLoginButtonText('Log out');
        } else {
            setLoginButtonText('Login');
        }
    }, [loggedIn])

    return (
        <>
            <header className={ styles.header }>
                <NavLink to="/" className={ ({ isActive }) =>
                    isActive ? styles.activeStyle : styles.inactiveStyle
                }>Home</NavLink>
                <NavLink to="about" className={ ({ isActive }) =>
                    isActive ? styles.activeStyle : styles.inactiveStyle
                }>About</NavLink>
                <Cart />
                <button className={ styles.button } onClick={ onLoginButtonClick }>{ loginButtonText }</button>
            </header>
            <Outlet />
            { showModal && (
                <Modal onClose={ toggleModal }>
                    <RegForm onClose={ toggleModal } onLogIn={ onLogIn } />
                </Modal>
            ) }
        </>
    );
}