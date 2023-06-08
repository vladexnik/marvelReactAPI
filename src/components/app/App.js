
import AppHeader from "../appHeader/AppHeader";
// import RandomChar from "../randomChar/RandomChar";
// import CharList from "../charList/CharList";
// import CharInfo from "../charInfo/CharInfo";
// import AppBanner from "../../components/appBanner/AppBanner"
// import decoration from '../../resources/img/vision.png';
// import { useState } from "react";
// import ErrorBoundary from "../errorBoundary/ErrorBoundary";
// import ComicsList from '../comicsList/ComicsList';

// switch чтоб не повторять то что в Route

import { BrowserRouter as Router, Route, Switch,Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";
import Page404 from "../pages/404";
import SingleComicPage from "../pages/SingleComicPage";

const App=()=> {

    
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes> 
                        <Route path="/" element={<MainPage/>}/>                           
                        <Route path="/comics" element={<ComicsPage/>}/>
                        <Route path="/comics/:comicId" element={<SingleComicPage/>} />
                        <Route path="*" element={<Page404/>} />
                    </Routes>
                </main>       
            </div>
        </Router>
    )
}

// https://reactrouter.com/en/6.12.0/components/outlet

export default App;