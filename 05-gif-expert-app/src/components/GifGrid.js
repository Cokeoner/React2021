import React from 'react'

export const GifGrid = ({category}) => {
   
    const getGif = () => {

        const url = 'api.giphy.com/v1/gifs/search?q=molotov&limit=10&api_key=GHgZQdqpRTEGzf8fzjkIXul7DwP2krj1';

    }
   
    return (
        <div>
            <li key = { category }> { category } </li>
        </div>
    )
}
