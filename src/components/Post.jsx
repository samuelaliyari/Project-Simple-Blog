import { Link } from "react-router-dom";
import "./Post.css"
const Post = (props) => {

    const postObject = {
        "title" : props.title,
        "id" : props.id,
        "image" : props.image,
        "date" : props.date,
        "description" : props.description,
        "author" : props.author
    }

	return (
		<section className='post'>
			<img
				src={postObject.image}
				alt=''
			/>
			<h3>{postObject.title}</h3>
			<Link
				to='/posts'
				state={{
					title: props.title,
					id: props.id,
					image: props.image,
					date: props.date,
					description: props.description,
					author: props.author
				}}>
				Read more
			</Link>
		</section>
	);
};

export default Post;
