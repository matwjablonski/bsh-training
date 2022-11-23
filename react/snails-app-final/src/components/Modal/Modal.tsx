import styled from '@emotion/styled';
import { createPortal } from 'react-dom'

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop: blur(20px);
  color: white;
`

const Modal = ({ data }: any) => {
  const modal = document.getElementById('modal');

  if (modal) {
    return createPortal(
      <StyledModal>
        {data.toString()}
      </StyledModal>,
      modal
    )
  }

  return null;
}

export default Modal;
