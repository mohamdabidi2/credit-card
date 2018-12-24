import React, { Component } from 'react';
import logo from '../image/caer.png';
import img from '../image/carte.PNG';
import back from '../image/background.jpg';
import '../App.css';

class Card extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        CardNumber:"",
        CardCode:"",
        Month: "",
        Year: "",
        Name: ""
    
    }
    }
    UpdateN= (e)=>{
        if(e.id==='CardNumber'){
        
           if(!isNaN(Number(e.value))){
               if(e.value.length<17){
            this.setState({
                CardNumber:e.value
            })}
        }
        }
        if(e.id==='CardCode'){
        
            if(!isNaN(Number(e.value))){
                if(e.value.length<5){
             this.setState({
                CardCode:e.value
             })}
            }
         }
         if(e.id==='Month'){
        
            if(!isNaN(Number(e.value))){
                if((e.value.length<3)&&(e.value<13)){
             this.setState({
                Month:e.value
             })}
            }
         }
         if(e.id==='Year'){
        
            if(!isNaN(Number(e.value))){
                if(e.value.length<3){
             this.setState({
                Year:e.value
             })}
            }
         }
         if(e.id==='Name'){
        
            if(e.value.split('').every(x=>!Number(x))){
                if(e.value.length<11){
             this.setState({
                Name:e.value
             })}
            }
         }
         
        

        }

    render() {
        return (
            <div className="cardti">
                <div  >
                    <img src={back} className="background" alt="background" />
                    <div className="credit-card">
                        <h1 className='title'> credit card</h1>
                        <div className='card'>
                            <div className='parte-one'>
                                <img src={logo} className='logo' alt="logo" />
                                <p className="craditNumber">{this.state.CardNumber.padEnd(16,"*").split("").map((x,i)=> (i===0 || i%4===0)? " "+x:x )   }</p>
                                <div className='codeTwo'>
                                    <div className='secrCode'>
                                        <h2 className="code">{this.state.CardCode.padEnd(4,"*").split("").map((x,i)=> (i===0 || i%4===0)? " "+x:x )   }</h2>
                                    </div>
                                    <div className="validation">
                                        <p className="valid">valid <br /> thru</p>
                                        <p className='month'>month/year <br /><span> {this.state.Month.padEnd(2,'-')}/{this.state.Year.padEnd(2,'-')}</span></p>
                                    </div>
                                </div>
                                <p className="fin">{this.state.Name.padEnd(10,'A')}</p>
                            </div>
                            <img className='visa' src={img} alt='visa' />
                        </div>
                    </div>
                </div>
                <div className='input'>
                    <label>Card Number</label>
                    <input className="tape" id="CardNumber" onChange={(e)=>this.UpdateN(e.target)} value={this.state.CardNumber} type='text' />
                    <label>Card code</label>
                    <input className="tape" id="CardCode"   onChange={(e)=>this.UpdateN(e.target)} value={this.state.CardCode} type='text' />
                    <div className='montha'>
                        <div className='manga'>
                            <label>Expiration Month</label>
                            <input className="tapez" id="Month"  onChange={(e)=>this.UpdateN(e.target)} value={this.state.Month} type='text' />
                        </div>
                        <div className='manga ziz'>
                            <label>Expiration Year</label>
                            <input className="tapez" id="Year"  onChange={(e)=>this.UpdateN(e.target)} value={this.state.Year} type='text' />
                        </div>
                    </div>
                    <label>Card owner Name</label>
                    <input className="tape" id="Name"  onChange={(e)=>this.UpdateN(e.target)} value={this.state.Name} type='text' />
                </div>
            </div>
        );
    }
}

export default Card;