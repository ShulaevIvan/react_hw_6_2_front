import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import Note from "../note/Note";
import NoteRenew from "../noteRenew/NoteRenew";

const FormInput = (props) => {

    const initialState = {
        notesData: [],
        inputRef: useRef(null),
    }

    const [inputState, setInputState] = useState(initialState);
    const [renewState, setRenewState] = useState({renewReq: false,});

    const sendBtnHandler = async () => {
        if (inputState.inputRef.current.value.trim() === '') return;
        
        await fetch('http://localhost:7575/notes', {
            method: 'POST',
            body: JSON.stringify({content: inputState.inputRef.current.value}),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            },
        }).then(() => {
            inputState.inputRef.current.value = '';
            setRenewState(prevState => ({
                ...prevState,
                renewReq : true,
            }));
        })
    }

    const removeBtnHandler = async (id) => {
        await fetch(`http://localhost:7575/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            },
        });
        setInputState(prevState => ({
            ...prevState,
            notesData: prevState.notesData.filter((item) => item.id !== id)
        }));
        setRenewState(prevState => ({
            ...prevState,
            renewReq : true,
        }));
        
    }

    const renewBtnHandler = async () => {
        await fetch('http://localhost:7575/notes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setInputState(prevState => ({
                ...prevState,
                notesData: [...data.notes]
            }));
        });

        setRenewState(prevState => ({
            ...prevState,
            renewReq : true,
        }));
    }

    useEffect(() => {
        fetch('http://localhost:7575/notes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setInputState(prevState => ({
                ...prevState,
                notesData: [...data.notes]
            }));
        });
    }, [])

    useEffect(() => {
        fetch('http://localhost:7575/notes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setInputState(prevState => ({
                ...prevState,
                notesData: [...data.notes]
            }));
        });
    }, [renewState])
   

    return (

        <React.Fragment>
            <NoteRenew renewEvent={renewBtnHandler}></NoteRenew>  
            <div className='notes-wrap'>
                <div className='notes-row'>
                    {inputState.notesData.map((item) => {
                        return  (
                            <React.Fragment key={item.id}>
                                <Note {...item} rmEvent={removeBtnHandler}></Note>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
            <div className='form-input-wrap'>
                <div className="form-input-title"><h5>New Note</h5></div>
                <div className="textarea-wrap">
                    <textarea ref={initialState.inputRef} state={inputState}></textarea>
                    <span className="send-btn" onClick={sendBtnHandler}></span>
                </div>
            </div>
        </React.Fragment>
    );
}


export default FormInput;