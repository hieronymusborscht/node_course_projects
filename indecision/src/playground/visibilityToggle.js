console.log('App.js is running!');

const app_obj = {
    toggle_state: false,
    toggle_message:'this is the hidden text'

};
const setVisible = ()=>{
    app_obj.toggle_state ? app_obj.toggle_state=false : app_obj.toggle_state=true;
    renderPage();
}


const renderPage = () =>{
    const template = (
      <div>
        <h1>Toggle Visibility</h1>
        <button  onClick={setVisible}>{app_obj.toggle_state? 'set Hidden' : 'set Visible' }</button>
        {app_obj.toggle_state && (
                <div><p>here are the hidden details</p></div>
        )}
      </div>
      );
      ReactDOM.render(template, document.getElementById('app'));
  }
  
  renderPage();

