import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ROOM } from '../constants/routes';

const Home = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const createRoom = useCallback(
    () => {
      history.push(`${ROOM}/${uuidv4()}`, { create: true });
    },
    [history],
  );

  return (
    <>
      <div>
        <h2>Create Room</h2>
        <button type="button" onClick={createRoom}>Create</button>
      </div>
      <div>
        <h2>Join Room</h2>
        <label htmlFor="name">Name</label>
        <input name="name" placeholder="Insert a name" value={name} onChange={(evt) => setName(evt.target.value)} />
        <button>Join</button>
      </div>
    </>
  );
}

export default Home;