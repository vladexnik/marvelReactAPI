
import { Helmet } from "react-helmet";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import { useState } from "react";
import CharForm from "../charForm/CharForm";
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

        <Helmet>
            <meta
                name="description"
                content="Marvel information portal"
            />
            <title>Marvel information</title>
        </Helmet>
        <RandomChar/>
        <div className="char__content">
            <CharList onCharacterSelected={onCharacterSelected}/>
            <div>
                <ErrorBoundary>
                    <CharInfo characterId={selectedCharacter}/>
                </ErrorBoundary>
                
                <ErrorBoundary>
                    <CharForm/>
                </ErrorBoundary>
            </div>
        </div>
        <img className ="bg-decoration" src={decoration} alt="vision"/>    
        </>
    )
}

export default MainPage; 