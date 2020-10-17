import React, { Component } from 'react';
import axios from 'axios';
import  './App.css'


class App extends Component {
    state =
    {
        fact: ''
    }

    componentDidMount()
    {
        this.getFacts();
    
    }

        getFacts = () =>
        {
            axios.get('	https://api.adviceslip.com/advice ')
            .then((response) =>
            { 
                const {advice} = response.data.slip;
                this.setState({fact:advice});
            })
            .catch((error)=> {
                console.log(error);
            })
        }

  
render() 
{
    const {fact} =  this.state;
    
    return(
       
        <div className='app'>
           <div className='card'>
               <h1 className='heading'>{fact}</h1>
                         <button className="button" onClick={this.getFacts}>
                            <span>Facts please!</span>
                            </button>
           </div>
        </div>
    );
}



}


export default App;