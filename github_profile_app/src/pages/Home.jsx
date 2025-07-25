import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/github/githubThunk";

const Home = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.github);

  const handleSearch = () => {
    if (username.trim() !== "") dispatch(fetchUser(username));
  };

  return (
    <div className="bg-gray-900 text-white p-8 w-full max-w-md rounded-xl shadow-xl space-y-4">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Finder</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        className="w-full p-2 rounded text-white"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded font-semibold"
      >
        Search
      </button>

      {loading && <p className="text-yellow-400">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="mt-4 border-t pt-4 space-y-2">
          <img src={user.avatar_url} alt="avatar" className="w-20 rounded-full mx-auto" />
          <h2 className="text-center text-xl font-bold">{user.name || "No Name"}</h2>
          <p className="text-center">@{user.login}</p>
          <p className="text-center text-sm text-gray-400">{user.bio || "No Bio"}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
