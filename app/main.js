import React from 'react';
import ReactDOM from 'react-dom';

class View extends React.Component{
  constructor(){
    super();

    this.state = {
      board: [],
      alive: [],
      status: "alive"
    }
  }
  random(){

  }
  render(){

      var board = [];
      for(var i = 0; i<400; i++){
        this.state.alive.push("alive");
        board[i] = <Cell vis={this.state.alive[i]} />;

      }


    return(
        <div>
        {board}
        </div>
    );
  }
}

class Cell extends React.Component{
  render(){
    return(
      <div className="cell">
        <div className={this.props.vis}></div>
      </div>
      );
  }
}

ReactDOM.render(
  <View />,
  document.getElementById("app")

);
