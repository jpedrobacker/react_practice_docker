"use client"
import React, { useState } from "react"

const Chat: React.FC = () => {
	const [input, setInput] = useState<string>("");
	const [response, setResponse] = useState<string>("");

	const handleInput = (e) => {
		setInput(e.target.value);
	}

	const generateResponse = (e) => {
		e.preventDefault();
		if (!input)
			setResponse('Please enter something!');
		else if (input.toLowerCase() == 'hello')
			setResponse('Hi there!');
		else if (input.toLowerCase() == 'name the group')
			setResponse('Joao, Allan, Bruno');
		else if (input.toLowerCase() == 'bye')
			setResponse('See ya!');
		else
			setResponse(`You typed "${input}"`);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-4 bg-white rounded shadow-md">
				<h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">Select the right choise</h1>
				<input type="text" placeholder="Type something..." value={input} onChange={handleInput} className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200 mb-4"/>
				<button onClick={generateResponse} className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">choise</button>
				{response && (
					<div className="mt-4 p-3 border border-gray-300 rounded text-black bg-gray-50">
						<p className="text-gray-700">{response}</p>
					</div>
				)}
				<div className="flex justify-between mt-4">
					<button className="bg-black hover:bg-green-500 rounded py-2 px-4 transition">A</button>
				</div>
				<div className="flex justify-between mt-4">
					<button className="bg-black hover:bg-green-500 rounded py-2 px-4 transition">B</button>
				</div>
				<div className="flex justify-between mt-4">
					<button className="bg-black hover:bg-green-500 rounded py-2 px-4 transition">C</button>
				</div>
			</div>
		</div>
	);
};

export default Chat;
