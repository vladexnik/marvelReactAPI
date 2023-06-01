import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import useMarvelService from './services/service';
import './style/style.scss';


// const marvelService0=useMarvelService();
//marvelService0.getAllCharacters().then(res=> console.log(res));
//marvelService0.getCharacter(1011208).then(res=> console.log(res))


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

