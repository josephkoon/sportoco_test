import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()

    this.state = {
      selected:0
    }
  }

  select(select){
    this.setState({selected:select})
  }

  render() {

    var yellow = {backgroundColor:'yellow', borderRadius:'50px 50px 50px 50px'}
    var noYellow = {}


    return (
      <div>


        <div style={{cursor:'pointer', zIndex:'3', left:'460px', top:'146px', textAlign:'center', border:'4px solid black', position:'absolute', borderRadius:'50%', height:'60px', width:'60px', backgroundColor:'#2C8B42', background: 'linear-gradient(180deg, #2C8B42 50%, #206030 50%)'}}>
          <strong style={{fontSize:'46px', color:'white'}}>J</strong>
        </div>

        <div style={{ opacity:'.5', zIndex:'0', left:'434px', top:'120px', textAlign:'center', position:'absolute', borderRadius:'50%', height:'120px', width:'120px', backgroundColor:'black' }}>
        </div>

        <div style={{zIndex:'2', position:'absolute', top:'75px', left:'25px', }}>
          <div onClick={()=>this.select(0)} className='btn' style={{textAlign:'center', borderRadius:'50px 0 0 50px', fontSize:'36px', display:'inline-block', width:'320px', height:'100px', lineHeight:'100px', backgroundColor:'white'}}>
          <div style={this.state.selected == 0 ? yellow : noYellow}>
            <strong>OUT/BOUNDS</strong>
          </div>
          </div>

          <div className='btn' style={{textAlign:'center', fontSize:'36px', display:'inline-block', width:'320px', height:'100px', lineHeight:'100px',  backgroundColor:'white'}}>
          <div onClick={()=>this.select(1)} style={this.state.selected == 1 ? yellow : noYellow}>
            <strong>TOUCHBACK</strong>
          </div>
          </div>

          <div className='btn' style={{textAlign:'center', borderRadius:'0 50px 50px 0',  fontSize:'36px', display:'inline-block', width:'320px', height:'100px', lineHeight:'100px',  backgroundColor:'white'}}>
          <div onClick={()=>this.select(2)} style={this.state.selected == 2 ? yellow : noYellow}>
            <strong>RETURN</strong>
          </div>
          </div>
        </div>

        <div className='shadow' style={{zIndex:'1', top:'75px', left:'25px', position:'absolute', borderRadius:'50px 50px 50px 50px', width:'960px', height:'100px', lineHeight:'100px', textAlign:'center'}}>
        </div> 

        <div style={{zIndex:'-1', width:'1000px', height:'250px', backgroundColor:'#9B1B29'}}>
        </div>

      </div>
    );
  }
}

export default App;
