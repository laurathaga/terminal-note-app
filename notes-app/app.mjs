import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getNote, addNote, removeNote, readNote } from './notes.mjs';

const yarg = yargs(hideBin(process.argv));

// create add command
yarg.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note Body',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		addNote(argv.title, argv.body);
	}
});

// create remove command
yarg.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		removeNote(argv.title);
	}
});

// create list command
yarg.command({
	command: 'list',
	describe: 'list the notes',
	handler() {
		getNote();
	}
});

// create read command
yarg.command({
	command: 'read',
	describe: 'Read a note',
	builder: {
		title: {
			describe: 'read based on title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		readNote(argv.title);
	}
});

yarg.parse();
