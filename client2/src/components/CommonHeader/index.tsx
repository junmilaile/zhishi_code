import React from 'react';
import IconMap from '../IconMap';

function index({Header,collapse,changeCollapse}) {
  return (
    <Header className="header-wrapper">
      <div className="button" onClick={() => changeCollapse(!collapse)}>
        {collapse ? IconMap.rightArrow : IconMap.leftArrow}
      </div>
    </Header>
  );
}

export default index;