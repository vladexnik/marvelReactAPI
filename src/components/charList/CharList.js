import './charList.scss';
import useMarvelService from '../../services/service';
import { useState,useEffect,useRef } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import PropTypes from 'prop-types'
import { CSSTransition,TransitionGroup } from 'react-transition-group';
// import  setContent from '../../utils/setContent'

const setContent=(process, Component, newItemLoading)=>{
    switch(process){
        case 'waiting':
            return <Spinner/>;
            break;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
            break;
        case 'confirmed':
            return <Component/>;
            break;
        case 'error':
            return <ErrorMessage/>;
            break;
        default: 
            throw new Error('unexpected process state');

    }
}

const CharList =(props)=>{
   
    const [charList, setCharList]=useState([]);
    const [newItemLoading,setNewItemLoading]=useState(false);
    const [offset,setOffset]=useState(200);
    const [charEnded,setCharEnded]=useState(false);

    const {loading, error, getAllCharacters, process, setProcess}=useMarvelService();

    const marvelService= useMarvelService();

    // useffect запуск после рендера, после того как функция onRequest существует внутри комп-та
    useEffect(()=>  {
        onRequest(offset,true);
    },[])

//////    
    const onRequest=(offset,initial)=>{
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(()=> setProcess('confirmed'))
    }
    // отвеч за запрос на сервер
    
    const onCharListLoaded=(newCharList)=>{

        // const {logger, secondLog}=await import ('./someFunc');
        // logger();

        let ended=false;
        if(newCharList.length<9) {
            ended=true;
        }

        console.log('update');
        setCharList(charList=> [...charList, ...newCharList]); // важно что было в предыд charList
        setNewItemLoading(newItemLoading=> false)
        setOffset(offset=> offset+9)
        setCharEnded(charEnded=>ended)
    } 
    // ({}) - возвр-ем объект из этой функции
///////

    console.log('CharList!');
    const itemRefs=useRef([]);

    const focusOnItem = (id) => {
        // Я реализовал вариант чуть сложнее, и с классом и с фокусом
        // Но в теории можно оставить только фокус, и его в стилях использовать вместо класса
        // На самом деле, решение с css-классом можно сделать, вынеся персонажа
        // в отдельный компонент. Но кода будет больше, появится новое состояние
        // и не факт, что мы выиграем по оптимизации за счет бОльшего кол-ва элементов

        // По возможности, не злоупотребляйте рефами, только в крайних случаях
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
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
                <CSSTransition key={item.id} timeout={1000} classNames='char__item'>
                    <li 
                        className="char__item"
                        tabIndex={0}
                        ref={el=> itemRefs.current[i]=el}
                        key={item.id}
                        onClick={()=>{props.onCharacterSelected(item.id); focusOnItem(i); }}
                        onKeyDown={(e)=>{
                            if(e.key===' ' || e.key==='Enter'){
                                props.onCharacterSelected(item.id);
                                focusOnItem(i);
                            }
                        
                        }}>
                            <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                            <div className="char__name">{item.name}</div>
                    </li>
                </CSSTransition>
            )
        });
        return(
            
                <ul className="char__grid">
                    <TransitionGroup component={null}>
                        {items}
                    </TransitionGroup>
                </ul>
            
        )
    }   

        const items=renderItems(charList);

        // const errorMess=error ? <ErrorMessage/> : null;
        // const spinn=loading && !newItemLoading ? <Spinner/> : null;
        
        
        // const content=!(loading || error) ? items : null;

        return (
            <div className="char__list">
                {setContent(process, ()=> renderItems(charList), newItemLoading)}
                {/* {errorMess}
                {spinn}
                {items} */}
                <button 
                onClick={()=>onRequest(offset)}
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