import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { custom_greeting_backend } from "../../../declarations/custom_greeting_backend/index.js";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            custom_greeting_backend.createNote(newNote.title, newNote.content);
            return [newNote, ...prevNotes];
        });
    }
    useEffect(() => {
        console.log("useEffect");
        fetchData();
    }, []);
    async function fetchData() {
        const notesArray = await custom_greeting_backend.readNotes()
        setNotes(notesArray);
    }
    function deleteNote(id) {
        custom_greeting_backend.removeNotes(id);
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
