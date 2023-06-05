import { Button, Col, Row } from "react-bootstrap";

export interface PageNavigatorProps {
	previousPageUrl?: string;
	nextPageUrl?: string;
	onPreviousPage: () => void;
	onNextPage: () => void;
}

const PageNavigator = ({
	previousPageUrl,
	nextPageUrl,
	onPreviousPage,
	onNextPage,
}: PageNavigatorProps) => {
	return (
		<Row className="mt-3">
			<Col
				className={`d-flex ${
					previousPageUrl ? "justify-content-between" : "justify-content-end"
				}`}
			>
				{previousPageUrl && (
					<Button variant="secondary" onClick={onPreviousPage}>
						Previous
					</Button>
				)}
				{nextPageUrl && (
					<Button variant="secondary" onClick={onNextPage}>
						Next
					</Button>
				)}
			</Col>
		</Row>
	);
};

export default PageNavigator;
