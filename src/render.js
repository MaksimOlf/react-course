import React from 'react';
import ReactDOM from 'react-dom';

import { addPost, addMessage, messageChange, textareaChange } from './redux/state.js';
import './index.css';
import App from './App';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
	<React.StrictMode>
		<App state={state} addPost={addPost} textareaChange={textareaChange} addMessage={addMessage} messageChange={messageChange}/>
	</React.StrictMode>,
	document.getElementById('root')
	);
}
