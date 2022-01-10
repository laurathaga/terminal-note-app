import { loadNotes, saveNotes } from './utils.mjs';
import chalk from 'chalk';

export const getNote = () => {
	const notes = loadNotes();
	console.log(chalk.yellow.bold.inverse('Your Notes'));
	notes.forEach((note) => console.log(note.title));
};

export const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNotes = notes.find((note) => note.title === title);

	if (!duplicateNotes) {
		notes.push({
			title,
			body
		});
		saveNotes(notes);
	} else {
		console.log('Note already taken!');
	}
};

//Delete a Note
export const removeNote = (title) => {
	const notes = loadNotes();
	const newNotes = notes.filter((note) => note.title !== title);
	if (notes.length > newNotes.length) {
		console.log(chalk.green.inverse.bold('Note is Removed Successfully!'));
		saveNotes(newNotes);
	} else {
		console.log(chalk.red.inverse.bold('Note not found!'));
	}
};

//Read note
export const readNote = (title) => {
	const note = loadNotes().find((note) => note.title === title);
	if (note) {
		console.log(chalk.inverse(note.title));
		console.log(note.body);
	} else {
		console.log('Note not found, correct your spelling!');
	}
};
