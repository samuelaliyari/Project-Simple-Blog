import Nav from "../components/Nav";
import { useLocation } from "react-router-dom";
import "./Posts.css"
const Posts = () => {
    const location = useLocation()
    const state = location.state

    return (
		<section>
			<Nav />
			<article className='posts'>
				<img
					src={state.image}
					alt={state.description}
				/>
				<div>
					<h3>{state.title}</h3>
					<p>{state.date}</p>
				</div>
				<p>{state.description}</p>
				<p>{state.author}</p>
			</article>
		</section>
	);
}

export default Posts ;