export default function NoteList({ notes, onDelete, checkNote }) {
	return (
		<div className="flex flex-col gap-5 mt-7">
			{/* Note */}
			{notes.map((note) => {
				return (
					<div className={`flex flex-col gap-3 bg-white p-4 rounded-xl ${note.isCompleted ? "text-gray-500" : ""}`} key={note.id}>
						{/* note-header */}
						<div className=" flex items-center justify-between">
							<div className="flex flex-col gap-1">
								<h2 className={`font-bold text-xl ${note.isCompleted ? "line-through" : ""}`}>{note.title}</h2>
								<p className="text-gray-500 font-medium">{note.description}</p>
							</div>
							<div className="flex gap-4 ">
								<button className="cursor-pointer" onClick={() => onDelete(note.id)}>
									❌
								</button>
								<input type="checkbox" className="size-6" value={note.id} name={note.id} id={note.id} checked={note.isCompleted} onChange={checkNote} />
							</div>
						</div>
						{/* line */}
						<div className="border border-gray-400"></div>
						{/* note footer */}
						<div>
							<p className="text-gray-500">
								{new Date(note.createdAt).toLocaleDateString("en-US", {
									month: "short",
									day: "2-digit",
									year: "numeric",
								})}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
