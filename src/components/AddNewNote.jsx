import { useState } from "react";

export default function AddNewNote({ onAddNote }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleAddNotes = (e) => {
		e.preventDefault();
		if (!title || !description) return null;
		const newNote = {
			id: new Date().toISOString(),
			title,
			description,
			isCompleted: false,
			createdAt: new Date().toISOString(),
		};
		// setNotes(newNote);
		onAddNote(newNote);
		setTitle("");
		setDescription("");
	};

	return (
		<div className="flex flex-col gap-4">
			<h1 className="font-bold text-xl flex-center">Add New Note</h1>
			<form action="" className="w-full flex flex-col gap-4" onSubmit={handleAddNotes}>
				<input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="bg-white w-full p-4 rounded-xl text-xl outline-none" placeholder="Note Title" />
				<input
					onChange={(e) => setDescription(e.target.value)}
					value={description}
					type="text"
					className="bg-white w-full p-4 rounded-xl text-xl outline-none"
					placeholder="Note Description"
				/>
				<button type="submit" className="bg-sky-700 text-white text-xl font-bold p-4 rounded-lg cursor-pointer">
					Add New Note
				</button>
			</form>
		</div>
	);
}
