class Options extends React.Component {

    render(){
      return (
        <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
          there are {this.props.options.length} Options here 
          {
            this.props.options.map((opt)=> <Option key={opt} optionText={opt} /> )
          }
        </div>);
    }
}
export default Options;