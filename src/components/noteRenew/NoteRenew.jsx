import React from "react";


const NoteRenew = (props) => {
    return (
        <React.Fragment>
            <div className="note-renew-wrap">
               <span className="note-renew-title">Notes</span> <span className="note-renew-icon" onClick={props.renewEvent}></span>
            </div>
        </React.Fragment>
    );
}

export default NoteRenew;