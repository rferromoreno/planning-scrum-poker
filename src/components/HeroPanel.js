import React from 'react'

export default function HeroPanel({ onCreateRoom, onJoinRoom, onNameChange, onRoomChange, name, roomId }) {
  return (
    <div className="container flex flex-col lg:flex-row justify-center lg:justify-between font-sans mx-auto py-8">
      <div className="w-full lg:w-1/2 px-2 mb-6 lg:mb-0 ">
        <div className="bg-white shadow rounded-lg">
          <div className="border-b border-grey-lighter p-4">
            <h3 className="text-grey-darkest">
              Create Room
            </h3>
          </div>
          <div className="text-center p-4 mx-auto">
            <div className="py-8">
                  <div className="mb-4">
                    <svg className="inline-block fill-current text-grey h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z"></path></svg>
                  </div>
                  <p className="text-2xl text-grey-darker font-medium mb-4">Start here!</p>
                  <p className="text-grey max-w-xs mx-auto mb-6">Want to start a new planning poker session? After creating a room, share the link with your team members and enjoy!</p>
            </div>
          </div>
          <button type="button" onClick={onCreateRoom} className="uppercase font-bold w-full bg-green-light text-lg text-green-lightest rounded-b-lg p-3 opacity-50">
            Create
          </button>
        </div>
      </div>
      <div className="w-full min-h-full lg:w-1/2 px-2 mb-6 lg:mb-0 ">
        <div className="bg-white shadow rounded-lg">
          <div className="border-b border-grey-lighter p-4">
            <h3 className="text-grey-darkest">
              Join Room
            </h3>
          </div>
          <div className="text-center p-4 mx-auto">
            <div className="py-8">
              <p className="text-2xl text-grey-darker font-medium mb-4">or... join!</p>
              <p className="text-grey max-w-xs mx-auto mb-2">If you already have a Room ID, enter your name and your Room ID and start playing!</p>
            <div className="p-2 w-1/2 mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="uppercase text-sm tracking-wide font-semibold text-grey-darker px-2">
                Name
              </label>
              <input type="text" id="name" value={name} onChange={onNameChange} placeholder="Enter your name" className="no-appearance bg-grey-lighter w-full leading-normal py-2 px-3 rounded border-b border-grey-light mt-2 focus:outline-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="room" className="uppercase text-sm tracking-wide font-semibold text-grey-darker px-2">
                Room ID
              </label>
              <input type="text" id="room" value={roomId} onChange={onRoomChange} placeholder="Enter Room ID" className="no-appearance bg-grey-lighter w-full leading-normal py-2 px-3 rounded border-b border-grey-light mt-2 focus:outline-none" />
            </div>
          </div>
            </div>
          </div>
        
          <button type="button" onClick={onJoinRoom} className="uppercase font-bold w-full bg-blue-light text-lg text-blue-lightest rounded-b-lg p-3">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}