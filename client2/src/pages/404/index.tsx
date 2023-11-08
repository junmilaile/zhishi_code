import React from 'react';
import unImg from '@/common/img/not_found.png';

function index(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <img src={unImg} alt="" />
    </div>
  );
}

export default index;