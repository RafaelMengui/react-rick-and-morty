import React from 'react'

function Character({character}) {
    return (
        <div className='text-center p-5'>
            <h3>{character.name}</h3>
            <img className='img-fluid rounded-pill' src={character.image} />
            <p className='py-2 text-center'> Location: {character.location.name}</p>
        </div>
    )
}

export default Character