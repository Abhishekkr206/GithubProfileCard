import React, { useContext } from "react";
import Context from "../Context";

export default function Profile() {
    const { userData } = useContext(Context);

    return (
        <div className="bg-purple-300 dark:bg-[#380e38] flex flex-col justify-center items-center p-4 min-h-[400px] h-auto w-[350px] sm:w-[400px] rounded-2xl text-white overflow-hidden mb-3 transition-all duration-500 ease-in-out">
            <div className="flex flex-col items-center w-full space-y-2">
                {userData ? (
                    <>
                        {/* Clickable Username */}
                        <a 
                            href={userData.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-2xl text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            @{userData.login}
                        </a>

                        {/* Profile Picture */}
                        <img 
                            src={userData.avatar_url} 
                            alt="Profile Avatar"
                            className="w-42 h-42 sm:w-52 sm:h-52 rounded-full border-4 border-white shadow-lg transition-all duration-500 ease-in-out"
                        />
                        
                        {/* Name */}
                        <h2 className="text-4xl text-center font-bold text-black dark:text-white">
                            {userData.name || "No Name Available"}
                        </h2>
                        
                        {/* Bio */}
                        <p className="text-lg text-center text-gray-700 dark:text-gray-200 px-4">
                            {userData.bio || "No bio available"}
                        </p>

                        {/* Location */}
                        <div className="flex items-center space-x-2 text-lg text-gray-700 dark:text-gray-200">
                            <span>🌍</span>
                            <span>{userData.location || "Location not available"}</span>
                        </div>

                        {/* Followers & Public Repos */}
                        <div className="flex space-x-4 text-lg text-gray-700 dark:text-gray-200">
                            <span>Followers: {userData.followers}</span>
                            <span>Repos: {userData.public_repos}</span>
                        </div>
                    </>
                ) : (
                    "Loading username..."
                )}
            </div>
        </div>
    );
}