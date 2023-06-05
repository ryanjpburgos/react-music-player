import Spinner from "react-bootstrap/Spinner";

function Loader() {
	return (
		<div
			className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-secondary"
			style={{ zIndex: 2000, opacity: 0.5 }}
		>
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	);
}

export default Loader;
