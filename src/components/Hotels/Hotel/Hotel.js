import React from 'react'
import style from './Hotel.module.scss'
import img from '../../../assets/images/hotel-1749602_1920.jpg'

function Hotel() {
	return (
		<div className='card mb-4'>
			<div className={`card-body pb-4 ${style.hotel}`}>
				<div className='row'>
					<div className='col-4'>
						<img src={img} alt='' className='img-fluid img-thumbnail' />
					</div>
					<div className='col-8'>
						<div className='row'>
							<div className='col'>
								<p className={style.title}>Pensjonat</p>
								<span className='badge bg-light text-dark'>Gdańsk</span>
							</div>
							<div className='col text-end'>
								<h5>Ocena: 8.3</h5>
								<a href='./' className='btn btn-primary mt-2 px-5 '>
									Pokaż
								</a>
							</div>
						</div>
					</div>
					<div className='col-12'>
						<p className={style.description}>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hotel
