import React from 'react'
import Modal from '../Modal'
import AlertContainer from './alertContainer'
import { useState } from 'react'
import MapContent from './mapContent'


const ViewOnMap = (props) => {

  const [showMap, setShowMap] = useState(false);

  return (
    <div>
        <Modal 
            onClose={props.onClose}
            show={true} 
        >
            { !showMap && <AlertContainer onGo={() => setShowMap(true)} onClose={props.onClose} />}
            { showMap &&
              <MapContent show_location={props.location} />
            }
        </Modal>
    </div>
  )
}

export default ViewOnMap