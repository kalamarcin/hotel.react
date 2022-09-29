import React, { useState } from 'react'

function SerchBar() {
	const [term, setTerm] = useState('')
	const search = () => {
		console.log(term)
	}
	const onKeyHandler = e => {
		if (e.key === 'Enter') {
			search()
		}
	}

	return (
		<div className='d-flex'>
			<input
				value={term}
				onChange={e => {
					setTerm(e.target.value)
				}}
				onKeyDown={onKeyHandler}
				className='form-control'
				type='text'
				placeholder='Szukaj...'
			/>

			<button onClick={search} className='ms-2 btn btn-primary'>
				Szukaj
			</button>
		</div>
	)
}

export default SerchBar
