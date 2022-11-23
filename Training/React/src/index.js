import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './inher.js'
import './mfr.js'
import App from'./App.js'
import Usestate from './Usestate';
import Emailveri from './Emailveri';
import reportWebVitals from './reportWebVitals';
import UseEffect from './UseEffect';
//const myFirstElement = <h1>Hello React!</h1>
import UseEffectAdv from './UseEffectAdv';
import UseRef from './UseRef';
import Controlling from './Controlling';
import Componentdidcount from './Componentdidcount';
import Bubbling from './Bubbling';
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<mfr></mfr>);
root.render(<Bubbling/>)
//root.render(myFirstElement);
//root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
