import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const generateRoomId = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Created new room");
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Room Id and Username required.");
      return;
    }

    navigate(`/editor/${roomId}`, { state: { username } });
  };

  return (
    <div className="homeWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/logo.png" alt=" logo" />
        <h4 className="mainLabel">Paste inviation Room Id</h4>

        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
            placeholder="ROOM ID"
          />
          <input
            type="text"
            className="inputBox"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="USERNAME"
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
        </div>

        <div className="createInfo">
          <span>
            If you don't have invitation link create &nbsp;
            {/* eslint-disable-next-line */}
            <a onClick={generateRoomId} href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>

      <footer>Have an nice coding ...</footer>
    </div>
  );
};

export default Home;
