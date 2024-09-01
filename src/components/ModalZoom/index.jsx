import styled from "styled-components";
import PhotoCard from "../PhotoCard";

const Overlay = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const Modal = styled.dialog`
    position: fixed;
    top: 10%;
    background: transparent;
    padding: 0;
    border: 0;
    width: 80%;
    height: 80%;
    max-height: 1500px;
    max-width: 1500px;
    display: flex;
    justify-content: center;
    form{
        button{
            position: relative;
            top: 20px;
            right: 60px;
            border: 0;
            padding: 0;
            background: transparent;
        }
    }
`

const ModalZoom = ({ photo, onClose, onFavoriteClickSingle }) => {
    return (
    <>
        { !!photo &&
            <>
                <Overlay />
                <Modal open={!!photo} onClose={(dialog) => dialog.target.close()}>
                    <PhotoCard photo={photo} expanded={true} onFavoriteClick={onFavoriteClickSingle}/>
                        <form method="dialog">
                            <button onClick={onClose}>
                                <img src="/public/icons/fechar.png" alt="Icone de fechar" />
                            </button>
                        </form>
                </Modal>
            </>
        }
        </>
    );
}

export default ModalZoom;