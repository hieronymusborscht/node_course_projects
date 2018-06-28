console.log('App.js is running!');


const appRoot = document.getElementById('app');

const numbers   = [55, 99, 1000];

const app_obj = {
title:'Indecision App',
  subtitle: 'Put your fate into the hands of your computer',
  options: []
};

const onFormSubmit = (event) =>{
  event.preventDefault();
  const option = event.target.elements.option.value;
  if(option){
    app_obj.options.push(option);
    event.target.elements.option.value='';
  }

  renderPage();
}
const removeAll = (event) =>{
  event.preventDefault();
  app_obj.options = [];
  renderPage();
}
const onMakeDecision = ()=>{
  const randomNum = Math.floor(Math.random() * app_obj.options.length);
  const option = app_obj.options[randomNum];
  
  console.log('opts length: ',app_obj.options.length, ' number selected:', randomNum);
  alert(option);
}

//create removeAll button
const renderPage = () =>{
  const template = (
    <div>
      <h1>{app_obj.title}</h1>
      {app_obj.subtitle && <p>{app_obj.subtitle}</p>}
    
      <p>
      {app_obj.options && app_obj.options.length>1 ? 'here are your options '  : 'no options'}
      </p>
      <p>{app_obj.options.length}</p>
      <button disabled={app_obj.options.length<1} onClick={onMakeDecision}>what should I do</button>
      <button  onClick={removeAll}> Remove All </button>
      {
        numbers.map( (number)=>{ return <p key={number}>{number}</p>})
      }
      {<p>1</p>}
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        {
          app_obj.options.map((item) => {
            return <li key={item}>{item}</li> 
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
    
    );
    ReactDOM.render(template, appRoot);

}

renderPage();

