console.log('App.js is running!');

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state ={
            visibility:false
        }
    }
    handleToggleVisibility(){
        
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            };
        });
    }
    
    render(){
        return (
            <div>
                <h1> Visibility Toggle </h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'hide details' : 'show details'}</button>
                {
                    this.state.visibility && 
                    (
                    <div>
                    here are some visible details
                    </div>
                    )
                }
            </div>
        );
    }
}    
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

   