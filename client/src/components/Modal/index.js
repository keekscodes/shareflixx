
import React from "react";


function Modal() {

return(
    <div id="inviteModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Invite a Friend</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <p>Send your friends the room link and start watching videos together!</p>
                    <input className="inv_input" id="inv_input" type="text" value="project3-30992.herokuapp.com/ROOMNUM" className="field left" readOnly />
                </div>
                <div className="modal-footer">
                    <div style={{"opacity": "1"}} className="tooltip">
                     <button type="button" className="btn btn-default" onClick="copyInvite()" onmouseout="outFunc()"><span className="tooltiptext" id="myTooltip">Copy to clipboard</span><i className="fas fa-clipboard"></i></button>
                     <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

}

export default Modal;