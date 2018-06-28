import React from 'react';
import AddOption from './AddOption';
import Options from './Options.js';
import Action from './Action';
import Header from './Header';

//pull the state out of constructor
// convert all 4 event handlers  to arrow functions
// delete the constructo
//start with class properties end with methods


class IndecisionApp extends React.Component {
    state = {
        options :[]
    };
  

    handleDeleteOptions =() =>  {
        this.setState(()=>({ options: [] } ));
      };
      handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=>(
          {
            options: prevState.options.filter(
              (opt_from_array)=>{
                return optionToRemove!==opt_from_array;
                // arr.filter(callback[args])  method returns a subset of array matching
              }
            )
          }
        ));
      };
    
    
      handlePick =() => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
      };
      handleAddOption =(option)=>{
        if(!option){
          return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option)>-1){
          return 'This item already exists';
        }
        this.setState((prevState)=>({ options: prevState.options.concat([option] )}));
      };
    




    
 
  
    componentDidMount(){
      try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
          this.setState(()=>({options: options} ) );
        }
      }catch(err){
        // do nothing
      }
    }
    componentDidUpdate(prevProps, prevState){
      if(prevState.options.length!== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
    componentWillUnmount(){
      console.log('component will unmount');
    }
   
    render(){
      const title ="Indecision";
      const subTitle ="The robot can not hear you";
      return (
        <div>
          <Header />
          <Action 
            hasOptions={this.state.options.length>0}
            handlePick={this.handlePick}
          />
          <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}  
          />
          <AddOption 
          handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  }
  export default IndecisionApp;