import React from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';

export default function Profile() {
  const weight = useSelector((state) => state);
  return (
    <>
      <Header />
      <h1>프로필 페이지입니다!</h1>
    </>
  );
}
