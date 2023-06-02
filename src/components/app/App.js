
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';
import { useState } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from '../comicsList/ComicsList'

const App=()=> {

    const[selectedCharacter, setCharacter]=useState(null);

    const onCharacterSelected=(id)=>{
       setCharacter(id);
    }
    return (
        <div className="app">
            <AppHeader/>
            <main>
                {/* <RandomChar/>
                <div className="char__content">
                    <CharList onCharacterSelected={onCharacterSelected}/>
                    <ErrorBoundary>
                        <CharInfo characterId={selectedCharacter}/>
                    </ErrorBoundary> 
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/> */}
            </main>
            <ComicsList/>
        </div>
    )
}

export default App;