
import AppHeader from "../appHeader/AppHeader";
// switch чтоб не повторять то что в Route

import { BrowserRouter as Router, Route, Switch,Routes} from "react-router-dom";
// import MainPage from "../pages/MainPage";
// import ComicsPage from "../pages/ComicsPage";
// import SingleComicPage from "../pages/SingleComicPage";
import {lazy,Suspense} from 'react';
import Spinner from "../spinner/Spinner";
import CharForm from "../charForm/CharForm";

const Page404=lazy(()=> import('../pages/404'));
const MainPage=lazy(()=> import('../pages/MainPage'));
const ComicsPage=lazy(()=> import('../pages/ComicsPage'));
const SingleComicPage=lazy(()=> import('../pages/SingleComicPage'));

const App=()=> {

    
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<span style={{'textAlign': 'center'}}>Loadinng....</span>}>
                        <Routes> 
                            <Route path="/" element={<MainPage/>}/>                           
                            <Route path="/comics" element={<ComicsPage/>}/>
                            <Route path="/comics/:comicId" element={<SingleComicPage/>} />
                            <Route path="*" element={<Page404/>} />
                        </Routes>
                    </Suspense>
                </main>       
            </div>
        </Router>
    )
}

// https://reactrouter.com/en/6.12.0/components/outlet

export default App;