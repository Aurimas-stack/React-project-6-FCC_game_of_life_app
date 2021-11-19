import './GameOptions.css';

const GameOptions = ({generation, gameOn, resetGame}) => {
    return (
        <div className='option-container'>
            <div className='generation-counter option'>
                <h2>Generation counter:</h2>
                <p>{generation}</p>
            </div>
            <div className='play-container option' onClick={gameOn}>
                <h2>Start/Pause/Resume</h2>
            </div>
            <div className='random option'>
                <h2>Randomize</h2>
            </div>
            <div className='clear-board option' onClick={resetGame}>
                <h2>Clear Board</h2>
            </div>
        </div>
    )
}
export default GameOptions;