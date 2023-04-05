// import logo from './logo.svg';
import './App.css';
// import Profile from './components/Profile';
// import Board from './components/Board';
// import { Link, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import NotFound from './components/NotFound';
// import BoardDetail from './components/BoardDetail';
// import TestRedux from './components/TestRedux';
// import ListContainer from './components/ListContainer';
import React from 'react';
import styled from 'styled-components';
import Start from './pages/Start';
import GlobalStyle from './components/GlobalStyle';
import { useSelector } from 'react-redux';
import Mbti from './pages/Mbti';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  return (
    <>
      <GlobalStyle />
      <Main>{page === 0 ? <Start /> : <Mbti />}</Main>
      {/* <ListContainer /> */}
      {/* <TestRedux />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<TestRedux />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  );
}

export default App;
