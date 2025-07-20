import React from "react";
import CloseButton from "./CloseButton";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className = "",
  style = {},
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4 transition-all ease-in-out duration-300"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(5px)",
      }}
      onClick={onClose}
    >
      <div
        className={`bg-gray-900 border-2 border-cyan-400 rounded-lg p-6 max-w-lg w-full relative ${className}`}
        style={{
          boxShadow: "0 0 30px rgba(0,255,255,0.5)",
          ...style,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose} />

        {children}
      </div>
    </div>
  );
};

export default Modal;
