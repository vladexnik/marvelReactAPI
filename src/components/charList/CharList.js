import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import MarvelService from '../../services/service';
import {Component} from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

class CharList extends Component {
    // constructor(props){
    //     super(props);
    // }



    state={
        charlist: [],
        loading: true,
        error: false,
    }

    marvelService=new MarvelService();

    updateList=()=>{
        this.marvelService
            .getAllCharacters()
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    onCharListLoaded=(charList)=>{
        console.log('update');
        this.setState({
            charList,
            loading: false
        })
    }

    onError=()=>{
        this.setState({
            loading: false,
            error: true
        })
    }

    componentDidUpdate(){
       this.updateList();
    }

    // renderCharList=(arr)=>{
    //     arr.map((item)=>{
                
    //     })

    // }

    render(){
        console.log('render');
        const {charList, loading,error}=this.state;
        const errorMess=error ? <ErrorMessage/> : null;
        const spinn=loading ? <Spinner/> : null;
        const content=!(loading || error) ? items : null;

        // renderCharList(){}
        const items=(charList)=>{
            charList.map(item=>{
                let imgStyle={ 
                    'objectFit': 'cover'
                };
                if(item.thumbnail==='http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
                    imgStyle={ 
                        'objectFit': 'contain' }
                }
                return(
                    <li className="char__item" key={item.id}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                    </li>
                );
            })
            return(
                <ul className="char__grid">
                    {items}
                </ul>
            )
        }


        return (
            <div className="char__list">
            {errorMess}
                {spinn}
                
                <ul className="char__grid">
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item char__item_selected">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
   
}

export default CharList;