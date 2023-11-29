import "./Home.css"
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section className='home'>
			<Nav />
			<article>
				<div>
					<h2>Welcome to my Blog </h2>
					<Link to="/blog">Go to Articles</Link>
				</div>
			</article>
		</section>
	);
};

export default Home;

