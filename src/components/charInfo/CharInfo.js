import './charInfo.scss';
import {useState,useEffect } from 'react';
import useMarvelService from '../../services/service';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton'
import PropTypes from 'prop-types'


const CharInfo=(props)=>{

    const [char,setChar]=useState(null);
    // const [loading,setLoading]=useState(false);
    // const [error,setError]=useState(false);

    const {loading, error, getCharacter, clearError}=useMarvelService();


    useEffect(()=>{
        updateChar()
    },[props.characterId])
    // componentDidCatch(error,info){
    //     console.log(error, info);
    //     this.setState({
    //         error: true
    //     });
    // }

    const updateChar=()=>{
        
        const {characterId}=props;
            if(!characterId){
                return;
            }
            clearError();
            getCharacter(characterId)
                .then(onCharLoaded)    
        // this.foo.bar=0;          
    }

    const onCharLoaded=(char)=>{
        console.log('update');
        setChar(char);
    }

    const skeleton = char || loading || error ? null : <Skeleton/>;
    const errorMess=error ? <ErrorMessage/> : null;
    const spinn=loading ? <Spinner/> : null;
    const content=!( loading || error || !char) ? <View char={char}/> : null;

    return (
        <div className="char__info">
        {skeleton}
        {errorMess}
        {spinn}
        {content}
        </div>
    )
   
}


const View=({char})=>{
    const {name,description,thumbnail,homepage,wiki,comics}=char;
    // if(comics.length>11){
    //     comics.slice(comics.length-9, comics.length);
    // }
    if(comics.length===null){
        
    }

    let imgStyle={ 
        'objectFit': 'contain'
    }
    if(thumbnail==='http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
            imgStyle={ 
            'objectFit': 'contain' }
    }


    return (
        <>
        <div className="char__basics">
            <img src={thumbnail} alt={name} style={imgStyle}/>
            <div>
                <div className="char__info-name">{name}</div>
                <div className="char__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
        <div className="char__descr">
            {description}   
        </div>
        <div className="char__comics">Comics:</div>
        <ul className="char__comics-list">
            {comics.length> 0 ? null :               
                            <li className="char__comics-item" >
                                 Sorry. There is no comics with this character. U can create it :|
                            </li> 
                          
            }
            
            {   
                comics.map((item, i)=>{
                    if(i>4) return;
                    return(                     
                            <li key={i} className="char__comics-item" >
                                 {item.name}
                            </li> 
                        )  
                    })
            }  
        </ul>
        </>
    )
}


// CharInfo.propTypes={
//     characterId: PropTypes.func.isRequired
// }

export default CharInfo;