export type RawNoteMetaData = {
  id: string;
  createdOn: firebase.firestore.Timestamp;
  modifiedOn: firebase.firestore.Timestamp;
};

export type NoteMetaData = {
  id: string;
  createdOn: Date;
  modifiedOn: Date;
};

export type RawLine = RawNoteMetaData & {
  text: string;
};

export type Line = NoteMetaData & {
  text: string;
};

export type RawNoteData = {
  body: RawLine[] | string;
  title: string;
  attachments: string[];
};

export type NoteData = {
  body: Line[] | string;
  title: string;
  attachments: string[];
};

export type RawNote = RawNoteMetaData & RawNoteData;
export type Note = NoteMetaData & NoteData;
