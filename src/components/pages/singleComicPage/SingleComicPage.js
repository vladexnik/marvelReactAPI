import './singleComicPage.scss';
import {useParams, Link, useNavigate} from "react-router-dom";
import {useState,useEffect } from 'react';
import useMarvelService from '../../../services/service';
import Spinner from '../../spinner/Spinner';
import ErrorMessage from '../../errorMessage/ErrorMessage';


const SingleComicPage = () => {
    const {comicId}=useParams();
    const [comic,setComic]=useState(null);
    const {loading,request,error,getComic, clearError}=useMarvelService();
    
    
    useEffect(()=>{
        updateComic();
    },[comicId])

    const updateComic=()=>{
            clearError();
            getComic(comicId)
                .then(onComicLoaded)  
    }

    const onComicLoaded=(comic)=>{
        console.log('updateComic');
        setComic(comic);
    }
    
    const errorMess=error ? <ErrorMessage/> : null;
    const spinn=loading ? <Spinner/> : null;
    const content=!( loading || error || !comic) ? <View comic={comic}/> : null;

    return (
        <>
            {errorMess}
            {spinn}
            {content}
        </>
    )
}

const View=({comic})=>{
    const {title, description, pageCount, language, thumbnail,price}=comic;
    const navigate=useNavigate();
    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">{language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
}

export default SingleComicPage;