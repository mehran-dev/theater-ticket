import React from 'react';
import Header from '../../components/header-footer/Header/Header';
import Footer from '../../components/header-footer/Footer/Footer';
import Ax from '../../hoc/Ax/Ax';



const Layout = (props) => {
    return (
        <Ax>
            <Header />

            {props.children}

            <Footer />
        </Ax>
    );
};

export default Layout;