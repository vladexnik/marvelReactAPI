
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import AppBanner from "../../components/appBanner/AppBanner"
import decoration from '../../resources/img/vision.png';
import { useState } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from '../comicsList/ComicsList';
// switch чтоб не повторять то что в Route

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


const App=()=> {

    const[selectedCharacter, setCharacter]=useState(null);

    const onCharacterSelected=(id)=>{
       setCharacter(id);
    }
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch> 
                        <Route exact path="/">
                        <RandomChar/>
                        <div className="char__content">
                            <CharList onCharacterSelected={onCharacterSelected}/>
                            <ErrorBoundary>
                                <CharInfo characterId={selectedCharacter}/>
                            </ErrorBoundary> 
                        </div>
                        <img className ="bg-decoration" src={decoration} alt="vision"/>
                        </Route>
                        <Route exact path="/comics">
                            <AppBanner/>
                            <ComicsList/>
                        </Route>
                    </Switch>
                </main>       
            </div>
        </Router>
    )
}

export default App;