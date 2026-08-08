export default function AddNewNote() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="font-bold text-xl flex-center">Add New Note</h1>
			<form action="" className="w-full flex flex-col gap-4 ">
				<input type="text" className="bg-white w-full p-4 rounded-xl text-xl outline-none" placeholder="Note Title" />
				<input type="text" className="bg-white w-full p-4 rounded-xl text-xl outline-none" placeholder="Note Description" />
				<button type="submit" className="bg-sky-700 text-white text-xl font-bold p-4 rounded-lg cursor-pointer">
					Add New Note
				</button>
			</form>
		</div>
	);
}
