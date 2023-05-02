import {Component} from 'react';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import MarvelService from '../../services/service';
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'

class RandomChar extends Component {
    constructor(props){
        super(props);
        // setInterval(this.updateChar,3000);

        console.log('constructor')
    }
    state={
        person: {},
        loading: true,
        error: false
    }

    marvelService=new MarvelService();

    componentDidMount(){
        this.updateChar();
        // this.timerID=setInterval(this.updateChar,3000);
        
        console.log('mount')
    }

    componentWillUnmount(){
       clearInterval(this.timerID)
        console.log('unmount');
    }

    onCharLoaded=(person)=>{
        console.log('update');
        this.setState({
            person,
            loading: false
        })
    }

    onError=()=>{
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar=()=>{
        const id=Math.floor(Math.random()*(1011400-1011000)+1011000);
        // this.onCharLoading();
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
            // .then(res=>{
            //     this.setState(res)
            // })
    }


    
    render(){
        console.log('render');
        const {person, loading,error}=this.state;
        const errorMess=error ? <ErrorMessage/> : null;
        const spinn=loading ? <Spinner/> : null;
        const content=!(loading || error) ? <View person={person}/> : null;

        // {loading ? <Spinner/> : <View person={person}/>}
        return (
            <div className="randomchar">
               {errorMess}
               {spinn}
               {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button onClick={this.updateChar} className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}

const View=({person})=>{
    let imgStyle={ 
        'objectFit': 'cover'
    };
    const {name,description, thumbnail,homepage,wiki}=person;
    if(thumbnail==='http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
        imgStyle={ 
            'objectFit': 'contain' }
    }
    return(     
                <div className="randomchar__block">
                    <img src={thumbnail} alt="Random character" className="randomchar__img" style={imgStyle}/>
                    <div className="randomchar__info">
                        <p className="randomchar__name">{name}</p>
                        <p className="randomchar__descr">
                           {description}
                        </p>
                        <div className="randomchar__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
    )
}


export default RandomChar;