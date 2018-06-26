// stateless functional conponent

class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options :[]
    }
  }

  handleDeleteOptions(){
    this.setState(()=>{
      return { 
        options:[]
      }
    });
  }
  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }
  handleAddOption(option){
    if(!option){
      return 'Enter valid value to add item';
    }else if(this.state.options.indexOf(option)>-1){
      return 'This item already exists';
    }
    this.setState((prevState)=>{
      return {
        options: prevState.options.concat([option])
      };
    });
  }

  render(){
    const title ="Indecision";
    const subTitle ="The robot can not hear you";
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action 
          hasOptions={this.state.options.length>0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}  
        />
        <AddOption 
        handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

//==============================

const Header =(props) =>{
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  );
}

// Option, Options, header
const Action =(props)=>{
return (
  <div>
    <button 
    onClick={props.handlePick} 
    disabled={!props.hasOptions}
    >what does the button do?</button>
  </div>
);
}
const Options = (props) =>{
return (
  <div>
  <button onClick={props.handleDeleteOptions}>Remove All</button>
     dey be {props.options.length} Options here 
    {
      props.options.map((opt)=> <Option key={opt} optionText={opt} /> )
    }
  </div>
);
}
const Option = (props) =>{
return (
  <div>
  {props.optionText}
</div>
);
}


//==============================




class AddOption extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(event){
    event.preventDefault();
    const opt_value=event.target.elements.fieldA.value.trim();
    const error = this.props.handleAddOption(opt_value); 
    this.setState(()=>{
      return{
        error:error
      };
    })
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

// const User = (props)=>{
//   return (
//     <div>
//     <p> Name: {props.name}</p>
//     <p> Age: {props.age}</p>
//     </div>
//   )
// };


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))