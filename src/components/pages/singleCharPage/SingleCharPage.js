import './singleCharPage.scss';
import {useParams, Link, useNavigate} from "react-router-dom";
import {useState,useEffect } from 'react';
import useMarvelService from '../../../services/service';
import Spinner from '../../spinner/Spinner';
import ErrorMessage from '../../errorMessage/ErrorMessage';

const SingleCharPage=()=>{
    const {charId}=useParams();
    const [char,setChar]=useState(null);
    const {loading,request,error,getCharacterByName, clearError}=useMarvelService();
    

    useEffect(()=>{
        updateChar();
    },[charId])

    const updateChar=()=>{
        clearError();
        getCharacterByName(charId)
            .then(onCharLoaded)
    }

    const onCharLoaded=()=>{
        console.log('updateChar');
        setChar(char);
    }

    const errorMess=error ? <ErrorMessage/> : null;
    const spinn=loading ? <Spinner/> : null;
    const content=!( loading || error || !char) ? <View char={char}/> : null;

    
    return (
        <>
            {errorMess}
            {spinn}
            {content}
        </>
    )

}

const View=({char})=>{
    const {title, description, pageCount, language, thumbnail,price}=char;
    // const navigate=useNavigate();
    return (
        <div className="single-char">
            <img src={thumbnail} alt={title} className="single-char__img"/>
            <div className="single-char__info">
                <h2 className="single-char__name">{title}</h2>
                <p className="single-char__descr">{description}</p>
            </div>
            {/* <Link to="/chars" className="single-char__back">Back to all</Link>
            <button onClick={() => navigate(-1)}>Go back</button> */}
        </div>
    )
}

export default SingleCharPage;