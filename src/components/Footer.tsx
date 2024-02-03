'use client';
import {
  CallLogo,
  Desktop,
  Mic,
  NoDesktop,
  NoMic,
  NoVideo,
  Video,
} from '@/Icons';
import { useState } from 'react';
import Container from './Container';

export default function Footer() {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0') + ':';
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return (
    <div className='fixed items-center bottom-0 bg-black py-6 w-full'>
      <Container>
        <div className='grid grid-cols-3 '>
          <div className='flex items-center'>
            <p className='text-xl'>
              {hours}
              {minutes}
            </p>
          </div>
          <div className='flex space-x-6 justify-center '>
            {isMuted ? (
              <NoMic
                className='h-12 w-16 text-white p-2 cursor-pointer bg-red-500  rounded-md'
                onClick={() => setIsMuted(!isMuted)}
              />
            ) : (
              <Mic
                className='h-12 w-16 text-white p-2 cursor-pointer bg-gray-950  rounded-md'
                onClick={() => setIsMuted(!isMuted)}
              />
            )}
            {isCameraOff ? (
              <NoVideo
                className='h-12 w-16 text-white p-2 cursor-pointer bg-red-500 rounded-md'
                onClick={() => setIsCameraOff(!isCameraOff)}
              />
            ) : (
              <Video
                className='h-12 w-16 text-white p-2 cursor-pointer bg-gray-950 rounded-md'
                onClick={() => setIsCameraOff(!isCameraOff)}
              />
            )}

            {isScreenSharing ? (
              <NoDesktop
                className='h-12 w-16 text-white p-2 cursor-pointer bg-red-500 rounded-md'
                onClick={() => setIsScreenSharing(!isScreenSharing)}
              />
            ) : (
              <Desktop
                className='h-12 w-16 text-white p-2 cursor-pointer bg-gray-950 rounded-md'
                onClick={() => setIsScreenSharing(!isScreenSharing)}
              />
            )}

            <CallLogo className='h-12 w-16 text-white hover:bg-red-500 p-2 cursor-pointer bg-primary rounded-md' />
          </div>
        </div>
      </Container>
    </div>
  );
}
