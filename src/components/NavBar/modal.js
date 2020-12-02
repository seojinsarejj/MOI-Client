import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './modal.css'

function Modal({ className, visible, children, close }) {
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className={className} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">
          <div className="modalHeader">
            <button onClick={close}>X</button>
          </div>
          <div>
            
          </div>
          
        </ModalInner>
      </ModalWrapper>
    </>
  )
}

Modal.propTypes = {
  visible: PropTypes.bool,
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  justify-content: center;
	align-items: center;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const ModalInner = styled.div`
  display:flex;
  width: 1200px;
  height: 1000px;
  margin-left:400px;
  margin-top:10px;
  background: #FFFFFF;
  border-radius: 20px;
  flex-direction: column;
`

export default Modal