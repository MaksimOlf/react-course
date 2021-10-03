import React from 'react';
import styles from './AllUsers.module.css';

let Paginator = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	if (pagesCount <= 10) {
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}
	} else if (props.currentPage <= pagesCount) {
		if (props.currentPage > 500) { pages.push(Math.ceil((props.currentPage - 500) / 100) * 100); }
		if (props.currentPage > 100) { pages.push(Math.ceil((props.currentPage - 100) / 50) * 50); }
		if (props.currentPage > 30) { pages.push(Math.ceil((props.currentPage - 30) / 10) * 10); }
		if (props.currentPage > 4) { pages.push('...') }
		if (props.currentPage < 5) {
			for (let i = 1; i <= 10; i++) {
				pages.push(i);
			}
		} else {
			for (let i = props.currentPage - 3; i <= props.currentPage + 3 && i <= pagesCount; i++) {
				pages.push(i);
			}
		}
		if (pagesCount - props.currentPage > 3) { pages.push('...') }
		if (pagesCount - props.currentPage > 30) { pages.push(Math.floor((props.currentPage + 30) / 10) * 10); }
		if (pagesCount - props.currentPage > 100) { pages.push(Math.floor((props.currentPage + 100) / 50) * 50); }
		if (pagesCount - props.currentPage > 500) { pages.push(Math.floor((props.currentPage + 500) / 100) * 100); }
	}


	return (
			<div className={styles.paggination} >
				{pages.map(page => {
					return (
						<span onClick={(e) => { if (page !== '...') { props.onPageChanged(page) } }}
							className={props.currentPage === page && styles.selectedPage} >
							{page}
						</span>)
				})}
			</div>
	)
}

export default Paginator;