import React from 'react';

export default function FullSizePhoto({ photo }) {

  return (
    <dialog id="fullsize" className="modal fixed">
      <div className="modal-box relative">
        <form method="dialog">
          <button>
            <img src={'/GMCfull.png'} alt="Your Image" />
          </button>
        </form>
      </div>
    </dialog>

  )
}