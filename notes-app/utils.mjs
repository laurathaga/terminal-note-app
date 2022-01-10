import fs from 'fs';

// Save new notes
export const saveNotes = (array) => {
	fs.writeFileSync('note.json', JSON.stringify(array));
};

// Load existing notes
export const loadNotes = () => {
	try {
		const dataJson = fs.readFileSync('note.json').toString();
		return JSON.parse(dataJson);
	} catch (e) {
		return [];
	}
};
