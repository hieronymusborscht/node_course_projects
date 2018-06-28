// stateless functional conponent

class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options :props.options
    }
  }


  componentDidMount(){
    try{
      //console.log('fetching data');
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
  handleDeleteOptions(){
    this.setState(()=>({ options: [] } ));
  }
  handleDeleteOption(optionToRemove){
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
    this.setState((prevState)=>({ options: prevState.options.concat([option] )}));
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
IndecisionApp.defaultProps ={
  options: ['Alice','Betty', 'Cheryl']

}

//==============================

const Header =(props) =>{
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: 'Indecision',
  subTitle: 'The Robots can not hear you'
}

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
    {props.options.length==0 && <p>Please add an option to get started</p>}  
    {
      props.options.map((opt)=>{ 
      return (
        <Option 
        key={opt} 
        optionText={opt}
        handleDeleteOption={props.handleDeleteOption} 
        />) 
    })
    }
  </div>
);
}
const Option = (props) =>{
return (
  <div>
  {props.optionText}
  <button 
  onClick={(e)=>{
    props.handleDeleteOption(props.optionText);
  }}
  >
  del
  </button>
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

ReactDOM.render(<IndecisionApp options={['a man','a plan','a canal', 'panama']}/>, document.getElementById('app'))