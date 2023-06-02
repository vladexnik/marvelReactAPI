import './comicsList.scss';

import {useState, useEffect} from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../../services/service';

const ComicsList = () => {

    const [comicsList,setComicsList]=useState([]);
    const [offset, setOffset] = useState(55);
    const [newItemLoading,setNewItemLoading]=useState(false);
    const [comicsEnded,setComicsEnded]=useState(false);


    const {loading, error, getAllComics}=useMarvelService();

    useEffect(()=>  {
        onRequest(offset);
    },[]);
    
//////    

    const onRequest=(offset,initial)=>{
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
            .then(res=> console.log(res))
    }

    const onComicsListLoaded=(newComicsList)=>{
        let ended=false;
        if(newComicsList.length<8) {
            ended=true;
        }

        // console.log('update');
        setComicsList(comicsList=> [...comicsList, ...newComicsList]); // важно что было в предыд charList
        setNewItemLoading(false)
        setOffset(offset=>offset+4)
        setComicsEnded(ended)
    } 

    function renderComics(arr){
        const items=arr.map((item,i)=>{
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            return(
                <li className="comics__item"
                    tabIndex={0}
                    key={i}>
                    <a href={item.homepage}>
                        <img src={item.thumbnail} style={imgStyle} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </a>
                </li>
            )   
    });

        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

        const items=renderComics(comicsList);

        const errorMess=error ? <ErrorMessage/> : null;
        const spinn=loading && !newItemLoading ? <Spinner/> : null;
        return(
            <div className="comics__list">
                {errorMess}
                {spinn}
                {items}

                <button className="button button__main button__long"
                    // disabled={setNewItemLoading}
                    onClick={()=> onRequest(offset)}
                    style={{'display': comicsEnded ? 'none' : 'block'}}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )    
}

export default ComicsList;