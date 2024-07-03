
import './sidebar_styles/NotesComponent.css';
import { useState } from 'react';


const NotesComponent = ({ data }) => {
    const [notes_text, setNotesText] = useState("");

    const handleTextChange = (event) => {
        setNotesText(event.target.value);
    };

    const handleBlur = () => {
        // Function to call API when editing is done
        // Example: callApiToUpdateNotes(notesText);
        console.log('Editing done, call API here');
    };

    return (
        <div className="component notes-component">
        <h3>Notes</h3>
        <textarea
            className="notes-textarea"
            placeholder="Enter a note..."
            value={notes_text}
            onChange={handleTextChange}
            onBlur={handleBlur}
        />
        </div>
    );
    };

export default NotesComponent;
