import React from 'react'

function Modle(props) {
    
    const {title,value , holderFunction,Accept,modleId }=props
  return (
    <div>
<div className="modal fade" id={modleId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content" style={{"backgroundColor":"#2C2C2C"}}>
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {value}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={holderFunction}>{Accept}</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modle
