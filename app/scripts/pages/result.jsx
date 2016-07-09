import React from 'react';
import Fengxianbiao from '../components/fengxianbiao.jsx';
import Loading from '../components/loading.jsx';
import { Link } from 'react-router';
import request from 'superagent';

class Resutl extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      fnum : props.params.fnum,
      loading: true,
    };
  }
  componentDidMount() {
  	console.log(this.state.fnum);
    // var risk=[0.037,0.039,0.049,0.06,0.081,0.09,0.1,0.0109,0.119];

    // window.dr('trackUnstructEvent', {
    //     schema: 'fioshare',
    //     data: {
    //       growth: risk[this.props.fnum]
    //     }
    // });

    // request.post('/api/mvp/9g/v1/assets/record')
    //     .send({
    //         growth: risk[this.props.fnum]
    //     })
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //         dispatch({
    //             type: ActionTypes.SET_ADVISE_ASSET_LIST,
    //             data: getAssetBasedonAdvised(res.body, liquidity, extraCash)
    //         });
    //         if (err) {
    //             // console.log(err, res)
    //             window.console.log(err, res);
    //         }
    //     });
  	setTimeout(function() {
  	  this.setState({loading:false});
  	}.bind(this), 500);
  }

  render() {
  	var content = this.state.loading?<Loading />:
  								<div>
  								  <div className="result">
  								    <p className="title">根据你的测试，这里是您多元化的资产配置方案</p>
  								    <Link to="info" className="restart">&lt;重新测试</Link>
  								  </div>
								    <div className="ner">
  								    <p className="maydengji">您的风险承受等级</p>
  								    <Fengxianbiao fnum={this.props.params.fnum} result="1"/>
  								  </div>
  								</div>;
    return (
      <div>
      {content}
      </div>
    );
  }
}

export default Resutl;