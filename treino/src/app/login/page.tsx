"use client";
import React, { useState } from "react";

const Login: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!email) {
			setError("Error: o campo de email está vazio.");
			return;
		}
		if (password.length < 6) {
			setError("Error: a senha deve ter pelo menos 6 caracteres.");
			return;
		}
		setError("");
		window.location.href = "/dashboard";
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-800">
			<form
				onSubmit={submitForm}
				className="w-full max-w-md bg-white shadow-md p-6">
				<h1 className="text-2xl font-semibold text-sky-600 mb-4">Login</h1>
				{error && <p className="text-red-600 mb-4">{error}</p>}
				<div className="mb-4">
					<label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
					<input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 text-black border border-gray-300 mt-1"/>
				</div>
				<div className="mb-4">
					<label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
					<input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 text-black border border-gray-300 mt-1"/>
				</div>
				<button type="submit" className="w-full bg-sky-600 text-white py-2 hover:bg-sky-700">Entrar</button>
			</form>
		</div>
	);
};

export default Login;

