import './GameOptions.css';

const GameOptions = ({generation, gameOn, resetGame, random, showPatterns, patterns, choosePattern}) => {
    return (
        <div className='option-container'>
            {
                patterns === false ?
                <div>
                <div className='generation-counter option'>
                    <h2>Generation counter:</h2>
                    <p>{generation}</p>
                </div>
                <div className='play-container option' onClick={gameOn}>
                    <h2>Start/Pause/Resume</h2>
                </div>
                <div className='random option' onClick={random}>
                    <h2>Randomize</h2>
                </div>
                <div className='clear-board option' onClick={resetGame}>
                    <h2>Clear Board</h2>
                </div>
                <div className='patterns option' onClick={showPatterns}>
                    <h2>Patterns</h2>
                </div>
            </div>
            :
            <div className='pattern-options option'>
                <h2 className='pattern-option' id='pulsar'onClick={choosePattern}>Pulsar</h2>
                <h2 className='pattern-option' id='glider'onClick={choosePattern}>Glider Gun</h2>
                <h2 className='pattern-option' id='baby' onClick={choosePattern}>Baby Pulsar</h2>
                <h2 className='pattern-option' onClick={showPatterns}>Back</h2>
            </div>            
            }
        </div>
    )
}
export default GameOptions;