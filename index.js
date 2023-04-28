import './index.css';
import img from './assets/JS.png';

const jsHeaderHTML = document.createElement('h1');
jsHeaderHTML.textContent = 'Webpack';

document.body.append(jsHeaderHTML);

const jsImageHTML = document.createElement('img');
jsImageHTML.src = img;

document.body.append(jsImageHTML);
