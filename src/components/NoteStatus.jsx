export default function NoteStatus({ notes }) {
	const allNotes = notes.length;
	const completedNotes = notes.filter((n) => n.isCompleted).length;
	const unCompletedNotes = allNotes - completedNotes;

	if (!allNotes) return <h2 className="font-bold text-xl flex-center">No Notes has already been added.</h2>;
	return (
		<div>
			<div className="flex items-center justify-between *:cursor-pointer *:font-bold *:text-xl *:text-gray-500 ">
				<div className="flex items-center justify-center gap-2 [&>*:nth-child(2)]:p-2 [&>*:nth-child(2)]:bg-gray-500 [&>*:nth-child(2)]:rounded-full [&>*:nth-child(2)]:text-white ">
					<span>All</span>
					<span className="flex-center w-7.5 h-7.5 font-md">{allNotes}</span>
				</div>
				<div className="flex items-center justify-center gap-2 [&>*:nth-child(2)]:p-2 [&>*:nth-child(2)]:bg-gray-500 [&>*:nth-child(2)]:rounded-full [&>*:nth-child(2)]:text-white ">
					<span>Completed</span>
					<span className="flex-center w-7.5 h-7.5 font-md">{completedNotes}</span>
				</div>
				<div className="flex items-center justify-center gap-2 [&>*:nth-child(2)]:p-2 [&>*:nth-child(2)]:bg-gray-500 [&>*:nth-child(2)]:rounded-full [&>*:nth-child(2)]:text-white ">
					<span>Open</span>
					<span className="flex-center w-7.5 h-7.5 font-md">{unCompletedNotes}</span>
				</div>
			</div>
		</div>
	);
}
