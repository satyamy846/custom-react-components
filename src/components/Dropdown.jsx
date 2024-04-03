import { useRef, useEffect, useState } from 'react'
import './Styles/Dropdown.css';
const Dropdown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsOpenModal(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return ()=>{
            document.removeEventListener("mousedown", handler);
        }
    }, [])
    return (
        <>
            <div>
                <button onClick={() => setIsOpenModal(!isOpenModal)}>Open Modal</button>
            </div>
            <div className={`modal ${isOpenModal ? 'opened-modal' : ''}`} ref={menuRef}>
                <p className="modal-heading">Hi you can use my Modal...</p>
                <input type="text" value="Modal" />
                <div className="modal-icon-wrapper">
                </div>
            </div>
        </>
    )
}

export default Dropdown;