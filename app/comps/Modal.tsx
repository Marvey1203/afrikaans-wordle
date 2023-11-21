// Modal.tsx
import React from "react";

interface ModalProps {
  heading: string;
  currentWord?: string;
}

const Modal: React.FC<ModalProps> = ({ heading, currentWord }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-opacity-40 bg-gray-800 z-10">
      <div className="flex flex-col justify-center items-center p-5 bg-white">
        <h1 className="font-bold text-2xl mb-3">{heading}</h1>
        {currentWord && <p>The word was {currentWord}</p>}
      </div>
    </div>
  );
};

export default Modal;
