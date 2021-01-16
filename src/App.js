import React, { useState, useEffect } from 'react';

import './components/App.css';

import Header from './components/Header/Header.jsx';
import Form from './components/Form/Form.jsx';
import Register from './components/Register/Register.jsx';

function App() {
	// Register on local storage
	let registersStarted = JSON.parse(localStorage.getItem('registers'));
	if (!registersStarted) {
		registersStarted = [];
	}

	// Array registers
	const [registers, saveRegisters] = useState(registersStarted);

	// Use effect

	useEffect(() => {
		let registersStarted = JSON.parse(localStorage.getItem('registers'));
		if (registersStarted) {
			localStorage.setItem('registers', JSON.stringify(registers));
		} else {
			localStorage.setItem('registers', JSON.stringify([]));
		}
	}, [registers]);

	// function take register and add new
	const createRegister = (register) => {
		saveRegisters([...registers, register]);
	};

	// function delete register
	const deleteRegister = (id) => {
		const newsRegisters = registers.filter(
			(register) => register.id !== id
		);
		saveRegisters(newsRegisters);
	};

	// message conditional

	const title = registers.length === 0 ? 'No Registers' : 'Manage Register';

	return (
		<>
			<Header />

			<div>
				<Form createRegister={createRegister} />
			</div>
			<div>
				<h1>{title}</h1>
				{registers.map((register) => (
					<Register
						key={register.id}
						register={register}
						deleteRegister={deleteRegister}
					/>
				))}
			</div>
		</>
	);
}

export default App;
