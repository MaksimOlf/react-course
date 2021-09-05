import React from 'react';

import styles from './ProfileStatus.module.css';




class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		userStatus: this.props.userStatus,
	}

	activateEditMode = () => {
		this.setState({
			editMode: true,
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false,
		})
		this.props.updateUserStatus(this.state.userStatus);
	}

	onStatusChange = (e) => {
		this.setState({
			userStatus: e.currentTarget.value,
		})
	}

	render() {
		return (
			<div className={styles.currentStatus} >
				{!this.state.editMode ?
					<div className={styles.status} onDoubleClick={this.activateEditMode}>
						<span>{this.state.userStatus || 'Статус не указан'}</span>
					</div>
					: <div className={styles.input}>
						<input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.userStatus} type="text" />
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus;