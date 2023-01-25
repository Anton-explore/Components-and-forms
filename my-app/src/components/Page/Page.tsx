import React from 'react';
import './Page.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Photos, { dataBase } from '../Photos';
import MyForm from '../Form';

const Page = () => {
  return (
    <>
      <Header title='My Photo Site'></Header>
      <Main title='My photo album'>
        <Photos photos={dataBase} />
        <MyForm/>
      </Main>
      <Footer title='My contacts'></Footer>
    </>
  );
}

export default Page;
