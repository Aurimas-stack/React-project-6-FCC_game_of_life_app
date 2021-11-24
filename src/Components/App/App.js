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
      patterns:false,
    }
    this.handleColorSquare = this.handleColorSquare.bind(this);
    this.handleGameState = this.handleGameState.bind(this);
    this.handleResetAll = this.handleResetAll.bind(this);
    this.handleGameLogic = this.handleGameLogic.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.handleShowPatterns = this.handleShowPatterns.bind(this);
    this.handleChoosePattern = this.handleChoosePattern.bind(this);
  }
  handleColorSquare = (event) => {
    const square = event.target.id;
    const gameValue = [...this.state.currentGameState]
    if(this.state.currentGameState[Number(square)] === 0) { 
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
    let index, value;
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
  handleRandom(event) {
    const currState = [...this.state.currentGameState];
    for(let i = 0; i < currState.length; i++) {
      let randomNumb = Math.random();
      if(randomNumb < 0.5) {
        randomNumb = 0
      } else {
        randomNumb = 1
      }
      currState[i] = randomNumb;
    }
    this.setState({
      currentGameState: currState
    })
    event.preventDefault();
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
  handleShowPatterns = (event) => {
    if(this.state.patterns === false) {
      this.setState({
        patterns: true
      })
    } else {
      this.setState({
        patterns:false
      })
    }
    event.preventDefault();
  }
  handleChoosePattern = (event) => {
    const currState = Array(1214).fill(0);
    if(event.target.id === 'baby') {
      currState[288] = 1; currState[333] = 1 ; currState[334] = 1; currState[379] = 1; currState[424] = 1;
      currState[423] = 1; currState[422] = 1 ; currState[377] = 1; currState[468] = 1; currState[332] = 1;
      this.setState({
        currentGameState: currState
      })
    } else if(event.target.id === 'pulsar') {
      currState[195] = 1; currState[240] = 1 ; currState[241] = 1; currState[245] = 1; currState[246] = 1;
      currState[201] = 1; currState[156] = 1 ; currState[332] = 1; currState[331] = 1; currState[150] = 1;
      currState[377] = 1; currState[375] = 1 ; currState[420] = 1; currState[421] = 1; currState[334] = 1;
      currState[379] = 1; currState[335] = 1 ; currState[381] = 1; currState[426] = 1; currState[425] = 1;
      currState[383] = 1; currState[338] = 1 ; currState[340] = 1; currState[339] = 1; currState[373] = 1;
      currState[328] = 1; currState[326] = 1 ; currState[327] = 1; currState[510] = 1; currState[555] = 1;
      currState[511] = 1; currState[557] = 1 ; currState[602] = 1; currState[601] = 1; currState[515] = 1;
      currState[516] = 1; currState[561] = 1 ; currState[559] = 1; currState[604] = 1; currState[605] = 1;
      currState[553] = 1; currState[596] = 1 ; currState[598] = 1; currState[553] = 1; currState[597] = 1; 
      currState[563] = 1; currState[608] = 1; currState[609] = 1; currState[610] = 1; currState[691] = 1; 
      currState[690] = 1; currState[735] = 1; currState[780] = 1; currState[695] = 1; currState[696] = 1; 
      currState[741] = 1; currState[786] = 1; currState[515] = 1; currState[516] = 1; currState[561] = 1; 
      currState[559] = 1; currState[604] = 1; currState[605] = 1;
      this.setState({
        currentGameState: currState
      })
    } else if(event.target.id === 'glider') {
      currState[73] = 1; currState[116] = 1 ; currState[118] = 1; currState[151] = 1; currState[152] = 1;
      currState[159] = 1; currState[160] = 1 ; currState[173] = 1; currState[174] = 1; currState[195] = 1;
      currState[199] = 1; currState[229] = 1 ; currState[274] = 1; currState[275] = 1; currState[230] = 1;
      currState[239] = 1; currState[284] = 1 ; currState[329] = 1; currState[375] = 1; currState[421] = 1;
      currState[422] = 1; currState[245] = 1 ; currState[290] = 1; currState[335] = 1; currState[291] = 1;
      currState[205] = 1; currState[204] = 1 ; currState[296] = 1; currState[298] = 1; currState[343] = 1;
      currState[218] = 1; currState[219] = 1 ; currState[204] = 1; currState[250] = 1; currState[379] = 1;
      currState[249] = 1; currState[288] = 1;
      this.setState({
        currentGameState: currState
      })
    }
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
          random={this.handleRandom}
          showPatterns={this.handleShowPatterns}
          patterns={this.state.patterns}
          choosePattern={this.handleChoosePattern}
        />
      </div>
    )
  }
}


export default App;
