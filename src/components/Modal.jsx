const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen text-center sm:block">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block  bg-bgTertiary  sm:rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle w-full sm:max-w-4xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="p-2 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-end p-2 font-medium text-textPrimary"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
