import { useState } from "react";

export default function Team() {
  const [team, setteam] = useState(11);
  const teamStyle = {
    border: "5px solid blue",
    margin: "15px",
    padding: "15px",
    borderRadius: "10px"
  };

  const handeladd = () => {
    const newteam = team + 1;
    setteam(newteam);
  };

  const handelRemove = () => {
    setteam(team - 1);
  };

  return (
    <div style={teamStyle}>
      <h3>Player: {team}</h3>
      <button onClick={handeladd}>Add Player</button>
      <button onClick={handelRemove}>Remove player</button>
    </div>
  );
}
