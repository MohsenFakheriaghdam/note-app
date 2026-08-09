import AddNewNote from "./components/AddNewNote.jsx";
import Footer from "./components/Footer.jsx";
import NoteHeader from "./components/NoteHeader.jsx";
import NoteList from "./components/NoteList.jsx";
import { useState } from "react";
import NoteStatus from "./components/NoteStatus.jsx";

export default function App() {
	const [notes, setNotes] = useState([]);
	const [sortBy, setSortBy] = useState("newest");

	const handleAddNewNotes = (newNote) => setNotes((prevNotes) => [...prevNotes, newNote]);
	const handleDeleteNote = (id) => setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));

	const handleCheckNote = (e) => {
		const noteId = e.target.value;
		setNotes((prevNotes) => prevNotes.map((note) => (note.id === noteId ? { ...note, isCompleted: !note.isCompleted } : note)));
	};

	const sortedNotes = [...notes].sort((a, b) => {
		switch (sortBy) {
			case "oldest":
				return new Date(a.createdAt) - new Date(b.createdAt);
			case "completed":
				return Number(a.isCompleted) - Number(b.isCompleted);
			case "newest":
			default:
				return new Date(b.createdAt) - new Date(a.createdAt);
		}
	});

	return (
		<div className="app_container h-screen grid grid-cols-1 grid-rows-[auto_1fr]">
			<NoteHeader sortBy={sortBy} notes={notes} onSort={(e) => setSortBy(e.target.value)} />
			<div className="grid grid-rows-1 grid-cols-[2fr_4fr] mt-4 gap-10">
				<AddNewNote onAddNote={handleAddNewNotes} />
				<div>
					<NoteStatus notes={notes} />
					<NoteList notes={sortedNotes} onDelete={handleDeleteNote} checkNote={handleCheckNote} />
				</div>
			</div>
			<Footer />
		</div>
	);
}
