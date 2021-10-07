import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';



const Profile = (props) => {
	return (
		<div>
			<ProfileInfo isOwner={props.isOwner}
			profile={props.profile}
			userStatus={props.userStatus}
			updateUserStatus={props.updateUserStatus}
			saveAvatar={props.saveAvatar}
			saveProfile={props.saveProfile}/>
			<PostsContainer {...props} />
		</div>
	)
}

export default Profile;