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

export type NoteData = {
  body: string;
  title: string;
  attachments: string[];
};

export type RawNote = RawNoteMetaData & NoteData;
export type Note = NoteMetaData & NoteData;
