import React from 'react';
import { useParams } from 'react-router-dom';

export default function BoardDetail() {
  // 구조분해할당
  const { boardID } = useParams();

  return (
    <>
      <h2>{boardID}번 게시글 내용입니다!</h2>
    </>
  );
}
