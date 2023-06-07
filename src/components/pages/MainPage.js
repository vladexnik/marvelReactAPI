
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import { useState } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

// switch чтоб не повторять то что в Route

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const MainPage=()=>{

    const[selectedCharacter, setCharacter]=useState(null);

    const onCharacterSelected=(id)=>{
       setCharacter(id);
    }

    return (
        <>
        <RandomChar/>
        <div className="char__content">
            <CharList onCharacterSelected={onCharacterSelected}/>
            <ErrorBoundary>
                <CharInfo characterId={selectedCharacter}/>
            </ErrorBoundary> 
        </div>
        <img className ="bg-decoration" src={decoration} alt="vision"/>    
        </>
    )
}

export default MainPage; 