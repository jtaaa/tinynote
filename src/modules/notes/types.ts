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

export type Note = NoteMetaData & NoteData;
