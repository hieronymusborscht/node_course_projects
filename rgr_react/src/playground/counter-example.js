
class Counter extends React.Component {

  
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
          this.state = {
              count:0
          };
    }
   

    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            };
        });
        console.log(this.state);
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            };
        });
        console.log(this.state);
    }
    resetCounter(){
        this.setState(()=>{
            return {
                count: 0
            };
        });
    }
    render(){
        return (
            <div>
                <h1> Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.resetCounter}>reset</button>
            </div>
        );
    }
     componentDidMount(){
        try{
            const new_count = localStorage.getItem('count');
            if (!isNaN(new_count)){
                this.setState(()=>({'count': parseInt(new_count,10)} ) );
            }
        }catch(err){
            console.log(err);
        }
     }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count!== this.state.count){
            localStorage.setItem('count', parseInt(this.state.count,10));
            console.log('upd: count: ', this.state.count);
        }
    }
}
Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter count='2'/>, document.getElementById('app'))