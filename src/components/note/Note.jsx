import React from "react";


const Note = (props) => {
    return (
        <React.Fragment>
            <div className="note-wrap">
                <span className="rm-note-btn"></span>
                <div className="note-body">
                    <div className="note-content">
                        <p>{props.content}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Note;