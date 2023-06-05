import { useState } from "react";
import { Form } from "react-bootstrap";

export interface InputTextProps {
	value: string;
	label: string;
	name: string;
	type: string;
	onChange: (text: string) => void;
}

const InputText = ({ value, label, name, type, onChange }: InputTextProps) => {
	const [val, setVal] = useState(value);

	function onInputChange(text: string): void {
		setVal(text);
		onChange(text);
	}

	return (
		<>
			<Form.Label htmlFor={name}>{label}</Form.Label>
			<Form.Control
				type={type}
				id={name}
				value={val}
				onInput={(event) =>
					onInputChange((event.target as HTMLInputElement).value)
				}
			/>
		</>
	);
};

export default InputText;
