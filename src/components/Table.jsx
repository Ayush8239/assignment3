import React from 'react';
import {tasksData} from '../data/dummyData.jsx';

const Table = () => {
  return (
    <div className="bg-slate-100 rounded-2xl p-2 mt-4 pt-4 ">
            <p className="border border-slate-700 w-full"></p>
            <div className="grid grid-cols-3 text-center ">
              <div className="col-span-1">
                <span>Tasks</span>
                <p className="border border-slate-700 w-full"></p>
              </div>
              <div className="col-span-1">
                <span>Deadline</span>
                <p className="border border-slate-700 w-full"></p>
              </div>
              <div className="col-span-1">
                <span>Status</span>
                <p className="border border-slate-700 w-full"></p>
              </div>
            </div>
            {tasksData.map((task, index) => (
              <div key={index} className="grid grid-cols-3 text-center mt-2">
                <div className="col-span-1">
                  <span>{task.task}</span>
                </div>
                <div className="col-span-1">
                  <span>{task.deadline}</span>
                </div>
                <div className="col-span-1">
                  <div className={`rounded-3xl text-sm p-1 mt-1 ${task.status === 'Completed' ? 'bg-green-300' : task.status === 'In Progress' ? 'bg-yellow-300' : 'bg-red-300'}`}>
                    {task.status}
                  </div>
                </div>
              </div>
            ))}
            </div>
  )
}

export default Table