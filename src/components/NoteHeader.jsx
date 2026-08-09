export default function NoteHeader({ notes, sortBy, onSort }) {
	return (
		<header className="">
			<div className="flex items-center justify-around py-4 border-b-2 border-gray-400">
				<h1 className="vazir-font font-bold text-3xl">My Notes ({notes.length})</h1>
				<select className="py-2 px-4 flex-center bg-white rounded-xl" value={sortBy} onChange={onSort}>
					<option value="newest">sort by newest</option>
					<option value="completed">Sort based on completed</option>
					<option value="oldest">sort by oldest</option>
				</select>
			</div>
		</header>
	);
}
