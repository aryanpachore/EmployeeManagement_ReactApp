import React from "react";

const Createtask =()=>{
    return(
        <div className="mt-10 bg-gray-800 p-8 rounded-lg shadow-xl">
                <form action="" className="w-full flex flex-wrap items-start gap-8">
                    <div className="w-full md:w-1/2 space-y-6">
                        <div>
                            <label className="text-gray-300 mb-2 block font-semibold">Task Title</label>
                            <input
                                type="text"
                                name="tasktitle"
                                placeholder="Make a UI design"
                                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-all duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-gray-300 mb-2 block font-semibold">Date</label>
                            <input
                                type="date"
                                name="date"
                                placeholder="dd/mm/yyyy"
                                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-all duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-gray-300 mb-2 block font-semibold">Assign To</label>
                            <input
                                type="text"
                                name="assignee"
                                placeholder="Employee name"
                                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-all duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-gray-300 mb-2 block font-semibold">Category</label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Design, dev, etc."
                                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Description on the Right */}
                    <div className="w-full md:w-1/2">
                        <label className="text-gray-300 mb-2 block font-semibold">Description</label>
                        <textarea
                            name="description"
                            cols="30"
                            rows="8"
                            placeholder="Enter task description"
                            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-all duration-300"
                        ></textarea>
                    </div>

                    {/* Centered Create Task Button */}
                    <div className="w-full flex justify-center mt-8">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
    )
}

export default Createtask;