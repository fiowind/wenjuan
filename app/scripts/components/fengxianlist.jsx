import React from 'react';


class Fengxianlist extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      num: props.fnum,
      peizhi:[[20,30,0,0,0,40,5,5],
              [10,30,0,0,0,50,5,5],
              [0,25,5,0,0,65,5,0],
              [0,10,5,5,10,60,10,0],
              [0,5,15,15,10,55,0,0],
              [0,5,20,15,20,35,5,0],
              [0,0,20,20,25,20,15,0],
              [0,0,20,30,20,20,10,0],
              [0,0,30,30,20,15,5,0],
              ],
      zhankai: -1,
      touzixiang:["现金类","债券","股票","混合基金","黄金","银行理财","P2P","外汇"],
      zkneirong:['现金类包括手持现金、货币基金、余额宝等“宝宝类”产品，货币宽松导致现金类产品的收益率不断下行',
                 '债券收益较稳定，风险较小。个人投资债券可以在商业银行柜台市场购买国债，也可以通过购买债券基金投资债券',
                 '股票波动性较大，收益率相对较高但风险性也相对较大。从长期来看，股票上涨的核心驱动力是企业盈利的增长',
                 '混合基金是同时投资于股票、债券和货币市场等工具，风险低于股票基金，预期收益则高于债券基金，为投资者提供了在不同资产之间进行分散投资的工具',
                 '黄金不创造价值，但是保值，保住的就是通胀的价值，所以经济没有增长而有通胀就应该投资黄金。黄金投资方式有实物黄金、纸黄金、黄金ETF、黄金QDII、黄金期货等，从便利性、流动性和专业要求角度推荐黄金ETF基金、黄金QDII基金。',
                 '安全性高、收益率高于储蓄和债券是银行理财的主要特点',
                 'P2P网络借贷，指通过有资质的第三方网络平台作为中介进行相互借贷，平台风险管理能力是核心，建议选择安全稳妥的P2P网贷平台',
                 '汇率波动瞬息万变，外汇交易全球化、24小时全天候，主要投资方式有外币兑换、外币理财产品、外汇实盘交易、外汇期权等，受每人每年5万美金额度限制。'
                 ],
      colors:['#61aeec','#6dcb81','#eb6e6a','#ef9268','#58beec','#35b1da','#6dcb81','#abdb60']
    };
  }

  zhankai(i){
  	console.log(this.state.num);
    if(i==this.state.zhankai){
      document.getElementsByClassName('zhankaixiang')[0].className += ' shouhui';
      setTimeout(function() {
        this.setState({zhankai:0});
      }.bind(this), 250);
    }else{
      this.setState({zhankai:i});
    }
  }

  render() {
    var fnum = this.state.num,
        list = this.state.touzixiang.map((item,index) => this.state.peizhi[fnum][index]!=0?
                <li key={index}>
                  <div onClick={this.zhankai.bind(this,index+1)}><span className={"yuanquan y"+index} style={{background: this.state.colors[index]}}></span>{this.state.peizhi[fnum][index]}%<span className="liubai">{item}</span><img src="./images/g2.png" className="g1"/>
                  </div>
                  {this.state.zhankai==index+1?<div className="zhankaixiang"><div className="sanjiao"></div>
                  <div className="neirong"><p>为什么是{item}?</p>{this.state.zkneirong[index]}</div></div>:''}
                </li>:''),
        zhuzi = this.state.touzixiang.map((item,index)=>this.state.peizhi[fnum][index]!=0?
                  <div key={index} className="zhu" style={{height:3.14*this.state.peizhi[fnum][index],background:this.state.colors[index]}}></div>:''
                  );

    return (
      <div>
	      <div className="zhuzi">
	      {zhuzi}
	      </div>
	      <ul className="list">
	      {list}
	      </ul>
      </div>
    );
  }
}

export default Fengxianlist;
