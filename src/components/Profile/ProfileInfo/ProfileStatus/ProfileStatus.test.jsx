import React from "react";
import {create} from "react-test-renderer";

import ProfileStatus from './ProfileStatus';

describe("ProfileStatusConponent", () => {
	test("Status from props should be in the state", () => {
		const component = create(<ProfileStatus userStatus='dsadasdsa' />);
		const instance = component.getInstance();
		expect(instance.state.userStatus).toBe("dsadasdsa")
	})
	test("After creation <span> should be displayed", () => {
		const component = create(<ProfileStatus userStatus='dsadasdsa' />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span).not.toBeNull();
	})
	test("After creation <input> should not be displayed", () => {
		const component = create(<ProfileStatus userStatus='dsadasdsa' />);
		const root = component.root;
		
		expect(() => {let input = root.findByType("input")}).toThrow();
	})
	test("After creation <span> should contains correct status", () => {
		const component = create(<ProfileStatus userStatus='dsadasdsa' />);
		const root = component.root;
		let span = root.findByType("span");
		expect(span.children[0]).toBe("dsadasdsa");
	})
	test("Callback chould be called", () => {
		const mockCallback = jest.fn();
		const component = create(<ProfileStatus userStatus='dsadasdsa' updateUserStatus={mockCallback} />);
		const instance = component.getInstance();
		instance.deactivateEditMode();
		expect(mockCallback.mock.calls.length).toBe(1);
	})
})