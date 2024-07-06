
const ModalZoom = ({ photo }) => {
    return (
     <dialog open={!!photo}>
        <p>Greetings, one and all!</p>
        <form method="dialog">
            <button>OK</button>
        </form>
    </dialog>
    );
}

export default ModalZoom;