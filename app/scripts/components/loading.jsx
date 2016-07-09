import React from 'react';
import { Link } from 'react-router';

const Loading = (props) => {
  return (
    <div>
      <div className="loader">
        <div className="loader-inner ball-clip-rotate">
          <div></div>
        </div>
      </div>
      <p className="loaderp">我们正在寻找适合您的投资方案...</p>
    </div>
  )
};

export default Loading;