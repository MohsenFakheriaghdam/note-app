export default function Header() {
	return (
		<header className="">
			<div className="flex items-center justify-around py-4 border-b-2 border-gray-400">
				<h1 className="vazir-font font-bold text-2xl">Tab Component</h1>
				<select className="py-2 px-4 flex-center bg-white rounded-xl">
					<option value="">Sort based on completed</option>
					<option value="">sort by newast</option>
					<option value="">sort by oldest</option>
				</select>
			</div>
		</header>
	);
}
