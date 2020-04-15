import React, { useEffect, useMemo } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import { HOME } from '../../constants/routes';
import AdminPanel from './AdminPanel';
import UserPanel from './UserPanel';

const socket = io('http://localhost:3001');

const Main = () => {
  const history = useHistory();
  const { roomId } = useParams();
  const { state: locationState = {} } = useLocation();
  const isAdmin = useMemo(() => locationState.create, [locationState]);

  useEffect(() => {
    if (!roomId) history.push(HOME);
  }, [roomId, history])

 useEffect(() => {
   socket.on('room:created', ({ roomId: newRoomId }) => {
     console.log('Room created with id ', newRoomId)
   });

   if (isAdmin) {
     socket.emit('room:create', roomId, () => {
       console.log('Creating room...');
     });
   } else {
      socket.emit('room:join', roomId, () => {
        console.log('I joined bitches');
     });
    }
 }, [isAdmin, roomId]);

  return isAdmin ? <AdminPanel /> : <UserPanel />;
}

export default Main;