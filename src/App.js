import React, { Component } from 'react';

import { TweenMax, Elastic, Bounce, Back, Power3, Power2, Power1 } from 'gsap'


class App extends Component {


  componentDidMount(){
    //Infinite circle fading
    TweenMax.to("#circle-fade1", .5, {transform: 'scale(.7)', repeat:-1, ease: Power3.easeOut, yoyo:true });
    TweenMax.to("#circle-fade2", .5, {transform: 'scale(.8)', repeat:-1, ease: Power3.easeOut, yoyo:true });
    TweenMax.to("#circle-fade3", .5, {transform: 'scale(.9)', repeat:-1, ease: Power1.easeOut, yoyo:true });
  }



  tween(x, item){
    //Move
    TweenMax.to("#selector", .75, {left:x});
    TweenMax.to("#circle", .75, {left:x+75});

    TweenMax.to("#circle-fade1", .75, {left:x+53});
    TweenMax.to("#circle-fade2", .75, {left:x+53});
    TweenMax.to("#circle-fade3", .75, {left:x+53});


    //Change color
    TweenMax.to("#background", .25, {backgroundColor:'#D3D3D3'});
    TweenMax.to("#selector", .25, {backgroundColor:'yellow'});


    //Change font size
    if(item == '#one'){
      TweenMax.to('#one', .25, {fontSize:'24px'});
      TweenMax.to('#two', .25, {fontSize:'18px'});
      TweenMax.to('#three', .25, {fontSize:'18px'});
    }
   
    if(item == '#two'){
      TweenMax.to('#one', .25, {fontSize:'18px'});
      TweenMax.to('#two', .25, {fontSize:'24px'});
      TweenMax.to('#three', .25, {fontSize:'18px'});
    }

    if(item == '#three'){
      TweenMax.to('#one', .25, {fontSize:'18px'});
      TweenMax.to('#two', .25, {fontSize:'18px'});
      TweenMax.to('#three', .25, {fontSize:'24px'});
    }
  }



  render() {
    return (
      <div>

      <div style={{position:'absolute', top:'60px'}}>
        <div id='one' onClick={() => this.tween(200, '#one')} style={{zIndex:'5', fontSize:'18px', position:'absolute', left:'200px', width:'200px', height:'60px', lineHeight:'60px', borderRadius:'30px 0px 0px 30px', }}>OUT/BOUNDS</div>
        <div id='two' onClick={() => this.tween(400, '#two')} style={{zIndex:'5', fontSize:'18px', position:'absolute', left:'400px', width:'200px', height:'60px', lineHeight:'60px' }}>TOUCHBACK</div>
        <div id='three' onClick={() => this.tween(600, '#three')} style={{zIndex:'5', fontSize:'18px', position:'absolute', left:'600px', width:'200px', height:'60px', lineHeight:'60px', borderRadius:'0px 30px 30px 0px'}}>RETURN</div>

        <div id='circle' style={{color:'white', backgroundColor:'#9B1B29', zIndex:'4', fontSize:'30px', position:'absolute', borderRadius:'50%', top:'40px', left:'475px', width:'50px', height:'50px', lineHeight:'50px'}}>J</div>
        
        <div id='selector' style={{zIndex:'3', backgroundColor:'white', position:'absolute', left:'400px', width:'200px', height:'60px',  borderRadius:'30px 30px 30px 30px'}}></div>

        <div id='background' style={{zIndex:'2', backgroundColor:'white', position:'absolute', left:'200px', width:'600px', height:'60px',  borderRadius:'30px 30px 30px 30px'}}></div>

        <div id='circle-fade1' style={{background:"radial-gradient(circle,rgba(0, 0, 0, 0),rgba(0, 0, 0, .4))", zIndex:'1', position:'absolute', borderRadius:'50%', top:'18px', left:'453px', width:'100px', height:'100px'}}></div>
        <div id='circle-fade2' style={{background:"radial-gradient(circle,rgba(0, 0, 0, 0),rgba(0, 0, 0, .4))", zIndex:'1', position:'absolute', borderRadius:'50%', top:'18px', left:'453px', width:'100px', height:'100px'}}></div>
        <div id='circle-fade3' style={{background:"radial-gradient(circle,rgba(0, 0, 0, 0),rgba(0, 0, 0, .4))", zIndex:'1', position:'absolute', borderRadius:'50%', top:'18px', left:'453px', width:'100px', height:'100px'}}></div>
      </div>  


        <div style={{zIndex:'0', backgroundColor:'#9B1B29', height:'200px', width:'1000px'}}></div>

      </div>
    );
  }
}

export default App;


