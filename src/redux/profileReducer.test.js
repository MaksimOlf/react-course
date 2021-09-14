import profileReducer, { addPostActionCreator, deleteostActionCreator } from "./profileReducer";

let state = {
		infoPosts: [
				{ id: 1, name: "Rocket", src: "https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg", text: 'Nds kmk mkllewkm  kwem kewm kwem wem ekw!!!', nLikes: 23 },
				{ id: 2, name: "Groot", src: "https://gamehag.com/static/avatar/5194053_max.jpg", text: 'I AM GROOT!!!', nLikes: 47 },
			],
	}

test('length of infoPosts should be incremented', () => {
	// 1. Test data
	let action = addPostActionCreator('dasdassada11!!!');
	// 2. Action
	let newState = profileReducer(state, action);
	// 3. Expectation
	expect (newState.infoPosts.length).toBe(3);
});

test('text  of infoPosts should be correct', () => {
	// 1. Test data
	let action = addPostActionCreator('dasdassada11!!!');
	// 2. Action
	let newState = profileReducer(state, action);
	// 3. Expectation
	expect (newState.infoPosts[2].text).toBe('dasdassada11!!!');
});

test('after deleting length of infoPosts should be decrement', () => {
	// 1. Test data
	let action = deleteostActionCreator(1);
	// 2. Action
	let newState = profileReducer(state, action);
	// 3. Expectation
	expect (newState.infoPosts.length).toBe(1);
});

test(`after deleting length of infoPosts should not be decrement if id is inccorect`, () => {
	// 1. Test data
	let action = deleteostActionCreator('dsd');
	// 2. Action
	let newState = profileReducer(state, action);
	// 3. Expectation
	expect (newState.infoPosts.length).toBe(2);
});