import React from 'react';


 export default class AddOption extends React.Component {
   state ={
    error: undefined
   };

  
    handleAddOption =(event) => {
      event.preventDefault();
      const opt_value=event.target.elements.fieldA.value.trim();
      const error = this.props.handleAddOption(opt_value); 

      this.setState(()=>({error:error}));
      if(!error){
        event.target.elements.fieldA.value='';
      }
    }
    render (){ 
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="fieldA" />
            <button>press me</button>
          </form>
        </div>
      ); 
    }
  }

