interface Props {
	image: string;
	about: string;
}

function About({ image = "https://via.placeholder.com/215", about }: Props) {
	return (
		<aside>
			<img src={image} alt="blog logo" />
			<p>{about}</p>
		</aside>
	)
}

export default About;