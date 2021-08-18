import React from 'react';


const Navigate = () => {
	return (
		<nav className="app-navigate">
			<ul className="app-navigate__list">
				<li className="app-navigate__link">
					<a href="#">Profile</a>
				</li>
				<li className="app-navigate__link">
					<a href="#">Messages</a>
				</li>
				<li className="app-navigate__link">
					<a href="#">News</a>
				</li>
				<li className="app-navigate__link">
					<a href="#">Music</a>
				</li>
				<li className="app-navigate__link">
					<a href="#">Settings</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navigate;