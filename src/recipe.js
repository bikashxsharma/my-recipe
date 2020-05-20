import React from 'react'

const Recipe = ({ data }) => {
	return (
		<div className='recipe-card'>
			<div className='recipe-image'>
				<img src={data.image} alt={data.label} />
			</div>
			<div className='recipe-content'>
				<h2>
					<a href={data.url} target='_blank'>
						{data.label}
					</a>
				</h2>
				<p className='time'>
					{data.totalTime > 0 ? 'Time: ' + data.totalTime : ''}
				</p>
				<p className='calorie'>Calorie: {data.calories} </p>
				<ul>
					{data.ingredients.slice(0, 3).map((ingredient, id) => (
						<div>
							<li key={id}>
								<strong>
									{ingredient.text.length > 20
										? ingredient.text.substring(0, 20) + '...'
										: ingredient.text}{' '}
								</strong>
							</li>
						</div>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Recipe
