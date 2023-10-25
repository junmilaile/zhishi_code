import React from 'react';
import './index.less';
import classNames from 'classnames';

function Loading({isShow}) {
  return (
    <div className={classNames('loader','fullScreen', {hidden: !isShow})}>
      <div className="wrapper">
        <div className="inner"></div>
        <div className="text"></div>
      </div>
    </div>
  );
}

export default Loading;