"use client";
import { Input, Textarea } from '@/app/components/Input';
import React, { useState } from 'react';

const Login: React.FC = () => {

	const [email, setEmail] = useState<string>("");

	const onChangeEmail = (e) => {
		const {name, value} = e.target;
		setEmail(value);

	}

	const [password, setPass] = useState<string>("");

	const onChangePass = (e) => {
		const {name, value} = e.target;
		setPass(value);
	}

	const submitForm = (e) => {
		e.preventDefault();
		console.log(email)
		console.log(password)
	}


	return <div>
		<form onSubmit={submitForm}>
			<p className='text-sky-600'>Login</p>
			<input type="text" value={email} name='email' onChange={onChangeEmail}  />
			<p className='text-sky-600'>Password</p>
			<input type="text" value={password} name='password' onChange={onChangePass}  />
			<button type='submit' className='bg-red-600'>Enviar</button>
		</form>
	</div>
}

export default Login;
