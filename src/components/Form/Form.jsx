import React, { useState } from 'react';

import uuid from 'uuid/dist/esm-node/v4';

function Form({ createRegister }) {
	// create state for register
	const [register, setRegister] = useState({
		id: '',
		username: '',
		phoneNumber: '',
		birthday: '',
	});

	// Function eject every time user writing on input
	const handleChange = (e) => {
		console.log(e.target.name);
		console.log(e.target.value);
		setRegister({
			...register,
			[e.target.name]: e.target.value,
		});
	};

	const [error, setError] = useState(false);

	//Extract values

	const { username, phoneNumber, birthday } = register;

	// When user press REGISTER ME!

	const submitRegister = (e) => {
		e.preventDefault();

		// validation

		if (
			username.trim() === '' ||
			phoneNumber.trim() === '' ||
			birthday.trim() === ''
		) {
			setError(true);
			// return;
		}

		//Delete previous message error

		register.id = uuid();

		//create register
		createRegister(register);

		//reste labels

		setRegister({
			id: '',
			username: '',
			phoneNumber: '',
			birthday: '',
		});
	};

	return (
		<>
			{error ? <p>All labels required</p> : null}

			<Form onSubmit={submitRegister}>
				<label>Full Name</label>
				<input
					type="text"
					name="username"
					className=""
					placeholder="Name user"
					onChange={handleChange}
					value={username}
				/>
				<label>Phone Number</label>
				<input
					type="phone"
					name="phoneNumber"
					placeholder="Phone Number"
					onChange={handleChange}
					value={phoneNumber}
					maxLength="9"
				/>
				<label>Birthday</label>
				<input
					type="date"
					name="birthday"
					className=""
					onChange={handleChange}
					value={birthday}
				/>

				<button type="submit" className="btn btn-primary btn-block">
					Register me!
				</button>
			</Form>
		</>
	);
}

export default Form;
