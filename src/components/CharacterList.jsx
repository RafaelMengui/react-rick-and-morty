import React from 'react'
import { useEffect, useState } from 'react'
import Character from './Character';
import PageNav from './PageNav';

function CharacterList() {

    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchCharacterData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();
            setLoading(false)
            setCharacter(data.results);
        }
        fetchCharacterData();
    }, [page]);

    return (
        <div className='container'>

            <PageNav page={page} setPage={setPage}/>

            {
                loading ? (<h1>Loading...</h1>) :
                    (<div className='row'>
                        {character.map(character => {
                            return (
                                <div key={character.id} className='col-md-4'>
                                    <Character character={character} />
                                </div>
                            )
                        })}
                    </div>
                    )}
        </div>
    )
}

export default CharacterList