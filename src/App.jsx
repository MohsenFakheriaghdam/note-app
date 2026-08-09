import AddNewNote from "./components/AddNewNote.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import NoteList from "./components/NoteList.jsx";
import { useState } from "react";

export default function App() {
	const [notes, setNotes] = useState([]);
	const handleAddNewNotes = (newNote) => setNotes((prevNotes) => [...prevNotes, newNote]);
	const handleDeleteNote = (id) => setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
	const handleCheckNote = (e) => {
		const noteId = e.target.value;
		setNotes((prevNotes) => prevNotes.map((note) => (note.id === noteId ? { ...note, isCompleted: !note.isCompleted } : note)));
	};

	return (
		<div className="app_container h-screen grid grid-cols-1 grid-rows-[auto_1fr]">
			<Header />
			<div className="grid grid-rows-1 grid-cols-[2fr_4fr] mt-4 gap-10">
				<AddNewNote onAddNote={handleAddNewNotes} />
				<NoteList notes={notes} onDelete={handleDeleteNote} checkNote={handleCheckNote} />
			</div>
			<Footer />
		</div>
	);
}
