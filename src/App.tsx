import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Spinner";
import Dashboard from "./pages/Dashboard";
import { RootState } from "./store/store";

function App() {
	const isSpinnerOpen = useSelector((state: RootState) => state.spinner.isOpen);

	return (
		<>
			{isSpinnerOpen && <Loader />}
			<Header />
			<Container className="mt-5">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Dashboard />} />
					</Routes>
				</BrowserRouter>
			</Container>
		</>
	);
}

export default App;
