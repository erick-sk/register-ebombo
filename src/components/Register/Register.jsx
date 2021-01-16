import React from 'react';

const Register = ({ register, deleteRegister }) => {
	return (
		<div className="">
			<p>
				Username: <span>{register.username}</span>
			</p>
			<p>
				Phone Number: <span>{register.phonenumber}</span>
			</p>
			<p>
				Birthday: <span>{register.birthday}</span>
			</p>

			<button className="" onClick={() => deleteRegister(register.id)}>
				Delete
			</button>
		</div>
	);
};

export default Register;
