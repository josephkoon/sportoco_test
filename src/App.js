import React, { Component } from 'react';
import Transition from "react-transition-group/Transition";
import TransitionGroup from "react-transition-group/TransitionGroup";





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

    var yellow = {backgroundColor:'yellow', borderRadius:'50px 50px 50px 50px', transition: "transform 2s ease", width: "100%", height: "100%" }
    var noYellow = {}


    return (
      <div>

        <div style={{cursor:'pointer', zIndex:'3', left:'460px', top:'146px', textAlign:'center', border:'4px solid black', position:'absolute', borderRadius:'50%', height:'60px', width:'60px', backgroundColor:'#2C8B42', background: 'linear-gradient(180deg, #2C8B42 50%, #206030 50%)'}}>
          <strong style={{fontSize:'46px', color:'white'}}>J</strong>
        </div>

        <div className="pulse-button" style={{ opacity:'.5', zIndex:'0', left:'434px', top:'120px', textAlign:'center', position:'absolute', borderRadius:'50%', height:'120px', width:'120px', backgroundColor:'black' }}>
        </div>

        <div style={{cursor:'pointer', zIndex:'2', position:'absolute', top:'75px', left:'25px', backgroundColor:'white', borderRadius:'50px 50px 50px 50px' }}>
          <div style={{position: 'absolute', borderRadius:'50px 50px 50px 50px', width: "320px", height: "100%", backgroundColor: 'yellow', transition: "transform 1.5s ease", zIndex: -1 }} className={ this.state.selected === 1 ? "test" : this.state.selected === 2 ?  "test1": "test2"} >
          </div>
          <div onClick={()=>this.select(0)} className='btn' style={{textAlign:'center', borderRadius:'50px 0 0 50px', fontSize:'36px', display:'inline-block', width:'320px', height:'100px', lineHeight:'100px'}}>
            <div style={{zIndex:5}}>
              <strong>OUT/BOUNDS</strong>
            </div>
          </div>
          
          <div style={{textAlign:'center', fontSize:'36px', display:'inline-block', width:'320px', height:'100px', lineHeight:'100px'}}>
            <div onClick={()=>this.select(1)} >
              <strong>TOUCHBACK</strong>
            </div>
          </div>
          
          <div className='btn' style={{textAlign:'center', borderRadius:'0 50px 50px 0',  fontSize:'36px', display:'inline-block', width:'320px', height:'100px', lineHeight:'100px'}}>
            <div onClick={()=>this.select(2)} >
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
