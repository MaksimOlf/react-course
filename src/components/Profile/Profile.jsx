import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';



const Profile = (props) => {
	return (
		<div>
			<ProfileInfo profile={props.profile} userStatus={props.userStatus} updateUserStatus={props.updateUserStatus} />
			<PostsContainer {...props} />
		</div>
	)
}

export default Profile;