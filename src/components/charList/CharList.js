import './charList.scss';
import MarvelService from '../../services/service';
import { useState,useEffect,useRef } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import PropTypes from 'prop-types'


const CharList =(props)=>{
    // constructor(props){
    //     super(props);
    // }
    const [charList, setCharList]=useState([])
    const [loading, setLoading]=useState(true);
    const [error,setError]=useState(false);
    const [newItemLoading,setNewItemLoading]=useState(false)
    const [offset,setOffset]=useState(1540)
    const [charEnded,setCharEnded]=useState(false);



    const marvelService=new MarvelService();

    // useffect запуск после рендера, после того как функция onRequest существует внутри комп-та
    useEffect(()=>  {
        onRequest();
    },[])

//////    
    const onRequest=(offset)=>{
        onCharListLoading();
        marvelService
            .getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError)
    }
    // отвеч за запрос на сервер
    
    const onCharListLoading=()=>{
       setNewItemLoading(true);
    }

    const onCharListLoaded=(newCharList)=>{
        let ended=false;
        if(newCharList.length<9) {
            ended=true;
        }

        console.log('update');
        setCharList(charList=> [...charList, ...newCharList]); // важно что было в предыд charList
        setLoading(false)
        setNewItemLoading(false)
        setOffset(offset=> offset+9)
        setCharEnded(ended)
    } 
    // ({}) - возвр-ем объект из этой функции
///////

    const onError=()=>{
        setLoading(false);
        setError(true);
    }

    const itemRefs=useRef([]);

    const focusOnItem = (id) => {
        // Я реализовал вариант чуть сложнее, и с классом и с фокусом
        // Но в теории можно оставить только фокус, и его в стилях использовать вместо класса
        // На самом деле, решение с css-классом можно сделать, вынеся персонажа
        // в отдельный компонент. Но кода будет больше, появится новое состояние
        // и не факт, что мы выиграем по оптимизации за счет бОльшего кол-ва элементов

        // По возможности, не злоупотребляйте рефами, только в крайних случаях
       // itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    function renderItems(arr) {
        const items =  arr.map((item,i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            
            return (
                <li 
                    className="char__item"
                    ref={el=> itemRefs.current[i]=el}
                    key={item.id}
                    onClick={()=>props.onCharacterSelected(item.id)}
                    onKeyDown={(e)=>{
                        if(e.key===' ' || e.key==='Enter'){
                            props.onCharacterSelected(item.id);
                            focusOnItem(i);
                        }
                    }}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                </li>
            )
        });
        return(
            <ul className="char__grid">
                {items}
            </ul>
        )
    }   

        const items=renderItems(charList);

        const errorMess=error ? <ErrorMessage/> : null;
        const spinn=loading ? <Spinner/> : null;
        const content=!(loading || error) ? items : null;
        return (
            <div className="char__list">
                {errorMess}
                {spinn}
                {content}
                <button 
                onClick={()=>{onRequest(offset)}} 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block' }}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    
   
}

CharList.propTypes={
    onCharacterSelected: PropTypes.string
}


export default CharList;