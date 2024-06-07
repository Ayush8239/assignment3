import React from "react";
import { clients } from "../data/dummyData.jsx";


const ClientProjects = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-slate-600 font-bold mb-4">Client Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map(client => (
            <div key={client.client_id} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
              <img className="w-16 h-16 rounded-full" src={client.image} alt={`${client.client_name} profile`} />
              <div>
                <h2 className="text-xl font-semibold text-slate-900">{client.client_name}</h2>
                <p className="text-gray-600">{client.email}</p>
                <p className="text-gray-600">{client.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ClientProjects;