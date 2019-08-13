import React,{Component} from 'react';

class App extends Component{

  constructor(){
    super();
    this.state = {name:'React App',status:''}
  }

  componentDidMount(){
    this.setState({status:'App has mounted'});
  }

  render(){
    return(
      <div>
        <h1>{this.state.status}</h1>
      </div>
    )
  }
}
 export default App;