import './charList.scss';
import MarvelService from '../../services/service';
import {Component} from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import PropTypes from 'prop-types'


class CharList extends Component {
    // constructor(props){
    //     super(props);
    // }



    state={
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 1540,
        charEnded: false
    }

    marvelService=new MarvelService();

    componentDidMount(){
        this.marvelService
            .getAllCharacters()
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }


//////    
    onRequest=(offset)=>{
        this.onCharListLoading();
        this.marvelService
            .getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }
    // отвеч за запрос на сервер
    
    onCharListLoading=()=>{
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded=(newCharList)=>{
        let ended=false;
        if(newCharList.length<9) {
            ended=true;
        }

        console.log('update');
        this.setState(({charList, offset})=>({
            charList:[...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset+9,
            charEnded: ended
        }))
    } 
    // ({}) - возвр-ем объект из этой функции
///////

    onError=()=>{
        this.setState({
            loading: false,
            error: true
        })
    }

    renderItems(arr) {
        const items =  arr.map((item) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            
            return (
                <li 
                    className="char__item"
                    key={item.id}
                    onClick={()=>this.props.onCharacterSelected(item.id)}>
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

    render(){
        console.log('render');
        const {charList, loading, error, newItemLoading, offset, charEnded}=this.state;
        const items=this.renderItems(charList);

        const errorMess=error ? <ErrorMessage/> : null;
        const spinn=loading ? <Spinner/> : null;
        const content=!(loading || error) ? items : null;
        return (
            <div className="char__list">
                {errorMess}
                {spinn}
                {content}
                <button 
                onClick={()=>{this.onRequest(offset)}} 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block' }}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
   
}

CharList.propTypes={
    onCharacterSelected: PropTypes.string
}


export default CharList;