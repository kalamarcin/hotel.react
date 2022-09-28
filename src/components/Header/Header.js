import React from 'react'
import SerchBar from './SerchBar/SerchBar'
import styles from './Header.module.scss'

function Header() {
	return (
		<header className={styles.header}>
			<div>
				<SerchBar/>
			</div>
		</header>
	)
}

export default Header
