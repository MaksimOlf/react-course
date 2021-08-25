import React from 'react';
import ReactDOM from 'react-dom';

import { addPost, textareaChange } from './redux/state.js';
import './index.css';
import App from './App';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
	<React.StrictMode>
		<App state={state} addPost={addPost} textareaChange={textareaChange}/>
	</React.StrictMode>,
	document.getElementById('root')
	);
}
