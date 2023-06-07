
import AppBanner from "../../components/appBanner/AppBanner"
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from '../comicsList/ComicsList';



const ComicsPage=()=>{

    return(
        <>
            <AppBanner/>
            <ComicsList/>
        </>
    )
}

export default ComicsPage;