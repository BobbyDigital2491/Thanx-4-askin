import React, { useRef } from 'react';

const VideoModal = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Function to handle the button click and show the modal
  const handleButtonClick = () => {
    if (modalRef.current) {
      modalRef.current.classList.remove('hidden');
      modalRef.current.classList.add(
        'fixed',
        'inset-0',
        'flex',
        'items-center',
        'justify-center'
      );
    }
  };

  // Function to close the modal
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.add('hidden');
      modalRef.current.classList.remove(
        'fixed',
        'inset-0',
        'flex',
        'items-center',
        'justify-center'
      );
    }
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold leading-6 transition-all duration-200 bg-transparent border-2 rounded-full sm:leading-8 text-black border-secondary hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:text-white sm:text-lg focus:ring-offset-primary"
      >
        <svg
          className="w-6 h-6 mr-2"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.52710 5.77669L6.52710 18.2232C6.52710 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
          />
        </svg>
        Watch trailer
      </button>

      {/* Modal */}
      <div
        ref={modalRef}
        className="hidden fixed inset-0 items-center justify-center bg-black bg-opacity-75"
        onClick={closeModal}
      >
        <div className="modal-container bg-white w-11/12 md:max-w-md lg:max-w-6xl h-full mx-auto rounded-lg z-50 overflow-y-auto">
          <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M.293 1.293a1 1 0 011.414 0L9 7.586l7.293-7.293a1 1 0 111.414 1.414L10.414 9l7.293 7.293a1 1 0 01-1.414 1.414L9 10.414l-7.293 7.293a1 1 0 01-1.414-1.414L7.586 9 .293 1.293z"
              ></path>
            </svg>
          </div>

          <div className="modal-content py-4 text-left px-6 h-full">
            <div className="flex justify-end items-center pb-3">
              <button
                className="modal-close px-4 py-2 bg-secondary rounded-lg text-white hover:bg-secondary-dark"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            
            {/* Responsive YouTube video embed */}
            <div className="w-full h-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/SkcjUFhzlU4?si=q7Aumy6v-5JD5a1i"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
