import React from 'react';
import './App.css';
import GameOptions from '../GameOptions/GameOptions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squareID: [],
      generation: null,
      gameOn: false,
      gameReset: false,
      currentGameState: [],
    }
    this.handleColorSquare = this.handleColorSquare.bind(this);
    this.handleGameState = this.handleGameState.bind(this);
    this.handleResetAll = this.handleResetAll.bind(this);
  }
  handleColorSquare = (event) => {
    const square = event.target.id;
    const currState = this.state.squareID;
    if(currState.includes(square)) {
      event.target.style.backgroundColor = null;
      this.setState({
        squareID: currState.filter(e => e !== square)
      })
    } else {
      event.target.style.backgroundColor = '#FFEB4D';
      this.setState({
        squareID: [...currState, square]
      })
    }
    
  }
  handleGameState = (event) => {
    const gameState = this.state.gameOn;
    if(gameState === false) {
      this.setState({
        gameOn: true
      })
    } else {
      this.setState({
        gameOn:false
      })
    }
    event.preventDefault();
  }
  handleResetAll = (event) => {
    this.setState({
      squareID: [],
      generation: null,
      gameOn: false,
      gameReset: true,
    })
    event.preventDefault();
  }
  componentDidUpdate() {
    if(this.state.gameReset === true) {
      this.setState({
        gameReset:false
      })
    }
  }
  render() {
    let squares = [];
    for(let i = 0; i < 1215; i++) {
      /*if(this.state.generation === null) {
        this.state.currentGameState.push(0)
      }
      const currGameState = this.state.currentGameState;
      console.log(this.state.currentGameState)*/
      squares.push(
        <div className='square'
          style={this.state.gameReset === true ? {backgroundColor: null} : {}}
          title='You can select squares yourself'
          onClick={this.handleColorSquare}
          key={i}
          id={i} >
        </div>        
      )
    }
    return (
      <div className='app'>
        <h1 className='title'>Conway's Game of Life</h1>
        <div className='square-container'>
          {
            squares.map(square=> {
              return square
            })
          }
        </div>
        <GameOptions 
          generation={this.state.generation} 
          gameOn={this.handleGameState}
          resetGame={this.handleResetAll}
        />
      </div>
    )
  }
}


export default App;
