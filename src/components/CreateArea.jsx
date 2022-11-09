import React, { useState } from 'react';

function CreateArea(props) {
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });
    function handleChange(event) {
        const {name,value} =event.target;
        setInputText((prevValue)=>{
            return {    
                ...prevValue,
                [name]:value
            }
        }
        );
    }
    function submitNote(event){
        props.onAdd(inputText);
        setInputText({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    return (
        <div>
            <form className="create-note">
                <input
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={inputText.title}
                />
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    onChange={handleChange}
                    value={inputText.content}
                />
                <button
                onClick={submitNote}
                >Add</button>
            </form>
        </div>
    );
}

export default CreateArea;