"use client";
import React from "react";

const Dashboard: React.FC = () => {
	const statuses: number[] = [200, 404, 500, 403, 418];

	const handleLogout = () => {
		window.location.href = "/login";
	};

	return (
		<div className="p-6 bg-gray-800 min-h-screen">
			<h1 className="text-2xl font-semibold text-sky-600 mb-6">Dashboard</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{statuses.map((status) => ( <div key={status} className="bg-white shadow-md p-4">
						<img src={`https://http.dog/${status}.jpg`} alt={`HTTP Dog ${status}`} className="w-full h-auto"/>
						<img src={`https://http.cat/${status}.jpg`} alt={`HTTP Cat ${status}`} className="w-full h-automt-4"/>
					</div>))}
			</div>
			<button onClick={handleLogout} className="mt-6 px-4 py-2 bg-red-600 text-white hover:bg-red-700">Sair</button>
		</div>
	);
};

export default Dashboard;
