import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>
                Welcome Mridul!
            </h1>
            <div>
                <label>
                    Number of Rounds :
                    <select name="Rounds">
                        <option value="3"> 3</option>
                        <option value="5"> 5</option>
                        <option value="7"> 7</option>
                    </select>
                </label>    
            </div>
            <div>
                <button type="button">Start Game</button>
            </div>

        </div>
    )
}

export default Home;
