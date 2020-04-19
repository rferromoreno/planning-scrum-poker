import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ROOM } from '../constants/routes';
import HeroPanel from '../components/HeroPanel';

export default function Home() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [roomId, setRoom] = useState('');
  const changeName = useCallback((evt) => setName(evt.target.value), [setName]);
  const changeRoom = useCallback((evt) => setRoom(evt.target.value), [setRoom]);
  const createRoom = useCallback(
    () => {
      history.push(`${ROOM}/${uuidv4()}`, { create: true });
    },
    [history],
  );
  const joinRoom = useCallback(() => {  history.push(`${ROOM}/${roomId}`)}, [history, roomId]);

  return (
      <HeroPanel onCreateRoom={createRoom} onJoinRoom={joinRoom} onRoomChange={changeRoom} onNameChange={changeName} name={name} roomId={roomId} />
  );
}