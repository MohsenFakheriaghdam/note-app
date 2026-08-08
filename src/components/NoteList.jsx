export default function NoteList() {
	return (
		<div className="">
			{/* filter notes */}
			<FilterNotes />
			{/* Notes */}
			<Notes />
		</div>
	);
}

function FilterNotes() {
	return (
		<div>
			<div className="flex items-center justify-between *:cursor-pointer *:font-bold *:text-xl *:text-gray-500 ">
				<div className="flex items-center justify-center gap-2 [&>*:nth-child(2)]:p-2 [&>*:nth-child(2)]:bg-gray-500 [&>*:nth-child(2)]:rounded-full [&>*:nth-child(2)]:text-white ">
					<span>All</span>
					<span className="flex-center w-7.5 h-7.5 font-md">2</span>
				</div>
				<div className="flex items-center justify-center gap-2 [&>*:nth-child(2)]:p-2 [&>*:nth-child(2)]:bg-gray-500 [&>*:nth-child(2)]:rounded-full [&>*:nth-child(2)]:text-white ">
					<span>Completed</span>
					<span className="flex-center w-7.5 h-7.5 font-md">2</span>
				</div>
				<div className="flex items-center justify-center gap-2 [&>*:nth-child(2)]:p-2 [&>*:nth-child(2)]:bg-gray-500 [&>*:nth-child(2)]:rounded-full [&>*:nth-child(2)]:text-white ">
					<span>Open</span>
					<span className="flex-center w-7.5 h-7.5 font-md">2</span>
				</div>
			</div>
		</div>
	);
}

function Notes() {
	return (
		<div className="flex flex-col gap-5 mt-7">
			{/* Note */}
			<div className="flex flex-col gap-3 bg-white p-4 rounded-xl">
				{/* note-header */}
				<div className=" flex items-center justify-between">
					<div className="flex flex-col gap-1">
						<h2 className="font-bold text-xl">Note one</h2>
						<p className="text-gray-500 font-medium">Lorem ipsum dolor sit amet.</p>
					</div>
					<div className="flex gap-4 ">
						<button className="cursor-pointer">❌</button>
						<input type="checkbox" className="size-6" />
					</div>
				</div>
				{/* line */}
				<div className="border border-gray-400"></div>
				{/* note footer */}
				<div>
					<p className="text-gray-500">
						{new Date().toLocaleDateString("en-US", {
							month: "short",
							day: "2-digit",
							year: "numeric",
						})}
					</p>
				</div>
			</div>
		</div>
	);
}
