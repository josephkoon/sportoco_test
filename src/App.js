import React, { Component } from 'react';

class App extends Component {



  render() {


    var style2 = { opacity:'.5', zIndex:'0', left:'434px', top:'120px', textAlign:'center', position:'absolute', borderRadius:'50%', height:'120px', width:'120px', backgroundColor:'black'  }


    return (
      <div>


        <div style={{cursor:'pointer', zIndex:'3', left:'460px', top:'146px', textAlign:'center', border:'4px solid black', position:'absolute', borderRadius:'50%', height:'60px', width:'60px', backgroundColor:'#2C8B42', background: 'linear-gradient(180deg, #2C8B42 50%, #206030 50%)'}}>
          <strong style={{fontSize:'46px', color:'white'}}>J</strong>
        </div>

        <div style={style2}>
        </div>



        <div style={{zIndex:'2', position:'absolute', top:'75px', left:'20px', }}>
        <div className='btn' style={{textAlign:'center', borderRadius:'50px 0 0 50px', fontSize:'36px', display:'inline-block', width:'320px', height:'100px', lineHeight:'100px', backgroundColor:'white'}}>
          <strong>OUT/BOUNDS</strong>
        </div>

        <div className='btn' style={{textAlign:'center', fontSize:'36px', display:'inline-block', width:'320px', height:'100px', lineHeight:'100px',  backgroundColor:'white'}}>
          <strong>TOUCHBACK</strong>
        </div>

        <div className='btn' style={{textAlign:'center', borderRadius:'0 50px 50px 0',  fontSize:'36px', display:'inline-block', width:'320px', height:'100px', lineHeight:'100px',  backgroundColor:'white'}}>
          <strong>RETURN</strong>
        </div>
        </div>


        <div className='shadow' style={{zIndex:'1', top:'75px', left:'20px', position:'absolute', borderRadius:'50px 50px 50px 50px', width:'960px', height:'100px', lineHeight:'100px', textAlign:'center'}}>
        </div> 


        <div style={{zIndex:'-1', width:'1000px', height:'250px', backgroundColor:'#9B1B29'}}>
        </div>


      </div>
        

    );
  }
}

export default App;