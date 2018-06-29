import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 


const Layout = (props)=>{
    
        return (
            <div>
                <p>Header</p>
                <div className='body-container'>
                
                <div id='right-container'>on the right </div>
                </div>
                <p>Footer</p>
            </div>
        );
}
const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is the page content</p>
    </div>
);


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

