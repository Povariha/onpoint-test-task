import "./modalWindow.css";

const ModalWindow = ({ show, setShow, children }) => {
  return (
    <div className={show ? "total-window active" : "total-window"}>
      <div className="total-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
