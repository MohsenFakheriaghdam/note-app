import AddNewNote from "./components/AddNewNote.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import NoteList from "./components/NoteList.jsx";

export default function App() {
	return (
		<div className="app_container h-screen grid grid-cols-1 grid-rows-[auto_1fr]">
			<Header />
			<div className="grid grid-rows-1 grid-cols-[2fr_4fr] mt-4 gap-10">
				<AddNewNote />
				<NoteList />
			</div>
			<Footer />
		</div>
	);
}
