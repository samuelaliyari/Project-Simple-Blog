import Nav from "../components/Nav";
import Post from "../components/Post";
import blogData  from "../components/data";

import "./Blog.css"
import Posts from "./Posts";
const Blog = () => {

	return (
		<>
			<Nav />
			<section className="blog">
				{blogData.map((post) => (
					<Post
						key={post.id}
						title={post.title}
						image={post.img_url}
                        date = {post.published_date}
                        description = {post.description}
                        author= {post.author}
                        
					/>
				))}
			</section>
		</>
	);
};

export default Blog;
