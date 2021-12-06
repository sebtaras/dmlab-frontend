import { useState } from "react";
import ArtistInfo from "./ArtistInfo";
import "./Dashboard.css";
//f9d45957168692bb80e1b88caf973c55
export default function Dashboard() {
  const [input, setInput] = useState("");
  const [artistName, setArtistName] = useState("");

  return (
    <div className="main-container">
      <div className="search-container">
        <input
          className="search-bar"
          placeholder="Artist name"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></input>
        <button
          className="search-button"
          onClick={async () => {
            setArtistName(input);
          }}
        >
          Okini
        </button>
      </div>
      <ArtistInfo name={artistName} />
    </div>
  );
}
//099 2667 419 - skorupan
