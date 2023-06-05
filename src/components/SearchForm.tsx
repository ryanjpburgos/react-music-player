import { FormEvent, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import InputText from "./InputText";

export interface SearchFormProps {
	handleSearch: (event: FormEvent<HTMLFormElement>, searchText: string) => void;
}

const SearchForm = ({ handleSearch }: SearchFormProps) => {
	const [searchText, setSearchText] = useState<string>("");
	return (
		<form onSubmit={async (event) => handleSearch(event, searchText)}>
			<Row className="d-flex justify-content-center align-items-end">
				<Col md={4} xs={9}>
					<InputText
						value={searchText}
						label="Search Text"
						name="searchText"
						type="text"
						onChange={setSearchText}
					/>
				</Col>
				<Col md={2} xs={3}>
					<Button variant="primary" type="submit">
						Search
					</Button>
				</Col>
			</Row>
		</form>
	);
};

export default SearchForm;
