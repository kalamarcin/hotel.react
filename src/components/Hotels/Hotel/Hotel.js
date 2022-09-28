import React from 'react'
import style from './Hotel.module.scss'
import img from '../../../assets/images/hotel-1749602_1920.jpg'

function Hotel() {
	return (
		<div className={`row ${style.hotel}`}>
			<div className='col-4'>
				<img src={img} alt='' className='img-fluid' />
			</div>
			<div className='col-8 margin'>
				<div className='row'>
					<div className='col'>
						<p>Tytuł</p>
						<p>miasto</p>
					</div>
					<div className='col'>
						<p>Ocena urzytkownikow</p>
						<p>Opinie: 233</p>
					</div>
				</div>
			</div>
			<div className='col-12'>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book. 
				</p>
				<a href='./' className='btn btn-primary'>
					Pokaz
				</a>
			</div>
		</div>
	)
}

export default Hotel
