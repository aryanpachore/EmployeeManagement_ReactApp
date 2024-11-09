import React from "react";

const CreateTask = () => {
    return (
        <div className="relative mt-10">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute -top-40 -right-32 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            </div>

            {/* Main container with glass effect */}
            <div className="relative p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-800 bg-gray-900/50">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl -z-10" />

                <form className="w-full flex flex-wrap items-start gap-8">
                    {/* Left Column */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="group">
                            <label className="text-gray-300 mb-2 block font-semibold">Task Title</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="tasktitle"
                                    placeholder="Make a UI design"
                                    className="w-full p-3 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                                />
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </div>

                        <div className="group">
                            <label className="text-gray-300 mb-2 block font-semibold">Date</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    name="date"
                                    className="w-full p-3 rounded-lg bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                                />
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </div>

                        <div className="group">
                            <label className="text-gray-300 mb-2 block font-semibold">Assign To</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="assignee"
                                    placeholder="Employee name"
                                    className="w-full p-3 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                                />
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </div>

                        <div className="group">
                            <label className="text-gray-300 mb-2 block font-semibold">Category</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="category"
                                    placeholder="Design, dev, etc."
                                    className="w-full p-3 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                                />
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Description */}
                    <div className="w-full md:w-1/2">
                        <label className="text-gray-300 mb-2 block font-semibold">Description</label>
                        <div className="group relative">
                            <textarea
                                name="description"
                                cols="30"
                                rows="12"
                                placeholder="Enter task description"
                                className="w-full p-3 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 resize-none"
                            ></textarea>
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    </div>

                    {/* Create Task Button */}
                    <div className="w-full flex justify-center mt-8">
                        <button
                            type="submit"
                            className="relative px-8 py-3 group bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 hover:shadow-xl hover:shadow-purple-900/20"
                        >
                            {/* Animated gradient border */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-200" />
                            
                            {/* Button content */}
                            <span className="relative flex items-center gap-2">
                                Create Task
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Add the blob animation to your global CSS or style tag
const style = document.createElement('style');
style.textContent = `
    @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob {
        animation: blob 7s infinite;
    }
    .animation-delay-2000 {
        animation-delay: 2s;
    }
`;
document.head.appendChild(style);

export default CreateTask;