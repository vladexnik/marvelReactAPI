import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarvelService from './services/service';
import './style/style.scss';


// const marvelService0=new MarvelService();// экземпляр класса
// marvelService0.getCharacterApi().then(res=> console.log(res));
// marvelService.getCharacter().then(res=> console.log(res))


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

