import { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { RiCloseLine, RiRepeatLine, RiRepeatOneFill } from "react-icons/ri";
import { MusicModel } from "../models/Music.model";

const MusicPlayer = ({
	username,
	name,
	previews,
	onClosePlayer,
}: MusicModel & { onClosePlayer: () => void }) => {
	const musicPlayer = useRef<HTMLAudioElement>(null);
	const [isLoopActive, setIsLoopActive] = useState<boolean>(false);

	useEffect(() => {
		musicPlayer.current?.play();
	});

	return (
		<Card className="position-fixed fixed-bottom w-100 p-2">
			<RiCloseLine
				className="position-absolute top-1 end-0"
				onClick={onClosePlayer}
			/>
			<Row
				className="d-flex justify-content-center align-items-center w-100"
				style={{ height: "100px" }}
			>
				<Col
					md={6}
					xs={12}
					className="d-flex flex-column justify-content-center align-items-center"
				>
					<Card.Subtitle>User Name: {username}</Card.Subtitle>
					<Card.Text>Track Name: {name}</Card.Text>
				</Col>
				<Col md={6} xs={12} className="d-flex justify-content-evenly">
					<audio
						ref={musicPlayer}
						src={previews["preview-hq-mp3"]}
						loop={isLoopActive}
						controls
					></audio>
					<Button
						variant="success"
						className="rounded-circle"
						style={{ width: "50px", height: "50px" }}
						onClick={() => setIsLoopActive((previousValue) => !previousValue)}
					>
						{isLoopActive ? <RiRepeatLine /> : <RiRepeatOneFill />}
					</Button>
				</Col>
			</Row>
		</Card>
	);
};

export default MusicPlayer;
