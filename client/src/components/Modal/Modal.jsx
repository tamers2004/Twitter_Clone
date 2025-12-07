
import Logo from "../../pages/RegistrationPage/components/Logo/Logo";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="modal-header">
                    <Logo />
                    <button className="close-btn" onClick={onClose}>✕</button>
                </header>

                <main className="modal-body">
                    {children}
                </main>
            </div>
        </div>
    );
}
export default Modal