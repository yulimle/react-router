import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li>
            <Link to="/">홈 페이지로 이동</Link>
          </li>
          <li>
            <Link to="/Profile">프로필 페이지로 이동</Link>
          </li>
          <li>
            <Link to="/Board">게시판 페이지로 이동</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
