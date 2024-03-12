import React from 'react';

export default function FullSizePhoto({ photo }) {

  return (
    <dialog id="fullsize" className="modal fixed px-5">
      <div className="modal-box relative w-fit overflow-auto object-fill max-w-none p-0 m-0">
        <form method="dialog">
          <button>
            <img src={photo} alt="Portfolio Image" className="max-w-full" />
          </button>
        </form>
      </div>
    </dialog>

  )
}