// Header.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Header from './Header';
import HeaderBasic from './HeaderBasic';

const TheHeader = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
        {isLoggedIn ?  <Header></Header> : <HeaderBasic></HeaderBasic>}
    </>
  );
};

export default TheHeader;
