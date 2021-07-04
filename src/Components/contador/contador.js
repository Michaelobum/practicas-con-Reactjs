import React, {Component} from 'react'
class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    if(this.state.count>=0){
      return (
        <div className='position-sticky row-sm-8'>
          <h1>Contador</h1>
          <p className='fs-2'>{this.state.count}</p>
          <button className="btn btn-primary" onClick={() => this.setState({ count: this.state.count - 1 })}>
            - 1
          </button>
          <button className="btn btn-dark" onClick={() => this.setState({ count: this.state.count + 2 })}>
            2
          </button>
          <button className="btn btn-primary" onClick={() => this.setState({ count: this.state.count + 1 })}>
            + 1
          </button>
        </div>
      );    
    }else if (this.state.count==-1){
      this.setState({ count: this.state.count +1 })
      return (
        <div className='position-sticky row-sm-5'>
          
          <button  onClick={() => this.setState({ count: this.state.count - 1 })}>
            - 1
          </button>
          <button onClick={() => this.setState({ count: this.state.count + 2 })}>
            2
          </button>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            + 1
          </button>
        </div>
      );
    }
    
  }
}
export default Contador