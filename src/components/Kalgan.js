import React from 'react'
import styled from 'styled-components/macro'

const Name = styled.h1`
	color: white;
	font-weight: bold;
`
const Image = styled.img`
	width: 100%;
	height: 100%;
`
// const initialState = {
// 	data: null,
// 	loading: false,
// 	error: null,
// }

// const reducer = (state = initialState, action) => {
// 	console.log(action)
// 	switch (action.type) {
// 		case 'LOADING':
// 			return { ...state, loading: true }
// 		case 'SUCCESS':
// 			return { ...state, loading: false, data: action.payload }
// 		case 'ERROR':
// 			return { ...state, loading: false, error: action.payload }
// 		default:
// 			return state
// 	}
// }

function Product({ data: { users, photos }, ...props }) {
	// const [{ data, loading, error }, dispatch] = useReducer(reducer, initialState)
	// useEffect(() => {
	// 	async function fetchData() {
	// 		await new Promise(resolve => setTimeout(resolve, 2000))
	// 		try {
	// 			const response = await fetch(
	// 				'https://jsonplaceholder.typicode.com/users',
	// 			)
	// 			const data = await response.json()
	// 			dispatch({ type: 'SUCCESS', payload: data })
	// 		} catch (error) {
	// 			dispatch({ type: 'ERROR', payload: error && error.message })
	// 		}
	// 	}
	// 	dispatch({ type: 'LOADING' })
	// 	fetchData()
	// }, [])
	// {loading && <h1>Loading...</h1>}
	// {error && error}
	// {data && data.map(el => <Name key={el.name}>{el.name}</Name>)}
	return (
		<article className="Product">
			<h1>KALGAN</h1>
			{photos &&
				photos.map(photo => (
					<Image src={photo.urls.regular} key={photo.urls.full} />
				))}
		</article>
	)
}

export default Product
