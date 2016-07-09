import React from 'react';
import { Link } from 'react-router';
import Fengxianbiao from '../components/fengxianbiao.jsx';

class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      num : 2,
      loading: false,
    };
  }

  render() {
    return (
      <div>
        <div className="newtu">
          <p className="title">根据风险承受等级<br/>进行资产配置</p>
          <Link to="info" className="start">开始测试</Link>
          <p className="hint">根据测试结果推荐资产配置方案</p>
          <p className="maydengji">你可能在此承受等级</p>
          <Fengxianbiao fnum={this.state.num} />
        </div>
      </div>
    );
  }
}

export default Home;