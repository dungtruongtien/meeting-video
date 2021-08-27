import io from 'socket.io-client';

const socket = io('https://meeting-video-backend.herokuapp.com');

export default socket;
