import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { MusicModel } from "../models/Music.model";

const MusicCard = (
	props: MusicModel & { onPlayClick: (id: MusicModel) => void }
) => {
	const { name, username, tags, onPlayClick } = props;
	return (
		<>
			<Card className="mt-2 w-100">
				<Card.Body>
					<Card.Title>Track Name: {name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						User Name: {username}
					</Card.Subtitle>
					<Card.Text className="text-wrap">
						Tags: {tags.map((el) => `#${el}`).join(", ")}
					</Card.Text>
					<Button variant="success" onClick={() => onPlayClick(props)}>
						Play
					</Button>
				</Card.Body>
			</Card>
		</>
	);
};
export default MusicCard;
