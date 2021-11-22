import React from 'react';
import './App.css';
import GameOptions from '../GameOptions/GameOptions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generation: 0,
      gameOn: false,
      gameReset: false,
      currentGameState: Array(1214).fill(0),
    }
    this.handleColorSquare = this.handleColorSquare.bind(this);
    this.handleGameState = this.handleGameState.bind(this);
    this.handleResetAll = this.handleResetAll.bind(this);
    this.handleGameLogic = this.handleGameLogic.bind(this);
  }
  handleColorSquare = (event) => {
    const square = event.target.id;
    if(this.state.currentGameState[Number(square)] === 0) {
      const gameValue = [...this.state.currentGameState]
      gameValue[Number(square)] = 1
      this.setState({
        currentGameState: gameValue
      })
    } else {
      const gameValue = [...this.state.currentGameState]
      gameValue[Number(square)] = 0
      this.setState({
        currentGameState: gameValue
      })  
    } 
  }
  handleGameLogic() {
    const currGameState = [...this.state.currentGameState];
    let newArr = [];
    let index;
    let value;
    let squareCounter = 0;
    for(let i = 0; i < currGameState.length; i++) {
      squareCounter = 0;
      if(currGameState[i - 44] === 1) {
          squareCounter += 1
      } 
      if(currGameState[i - 45] === 1) {
        squareCounter += 1
      } 
      if(currGameState[i - 46] === 1) {
        squareCounter += 1
      } 
      if(currGameState[i - 1] === 1) {
        squareCounter += 1      
      } 
      if(currGameState[i + 1] === 1) {
        squareCounter += 1        
      } 
      if(currGameState[i + 44] === 1) {
        squareCounter += 1         
      } 
      if(currGameState[i + 45] === 1) {
        squareCounter += 1        
      } 
      if(currGameState[i + 46] === 1) {
        squareCounter += 1      
      } 
      if(currGameState[i] === 1) {
        if(squareCounter >= 2 && squareCounter <= 3) {
          index = i;
          value = 1;
          newArr.push(index);
          newArr.push(value);
        } else {
          index = i;
          value = 0;
          newArr.push(index);
          newArr.push(value);
        }
        
      } else {
        if(squareCounter === 3) {
          index = i;
          value = 1;
          newArr.push(index);
          newArr.push(value);
        }
      }
    }
    if(newArr.length > 0) {
      while(newArr.length > 0) {
        currGameState[newArr[0]] = newArr[1]
        newArr.splice(0, 2)
      }
    }
    this.setState({
      currentGameState: currGameState
    })
  }
  handleGenerations() {
    if(this.state.gameOn === true) {
      this.handleGameLogic()
      this.setState(prevState => ({
        generation: prevState.generation + 1
      }))
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
      generation: 0,
      gameOn: false,
      gameReset: true,
      currentGameState: Array(1214).fill(0)
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
  componentDidMount() {
      this.interval = setInterval(() => this.handleGenerations(), 150);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let squares = [];
    for(let i = 0; i < 1215; i++) {
      squares.push(
        <div className='square'
          style={this.state.currentGameState[i] === 1 ? {backgroundColor: '#FFEB4D'} : {}}
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
