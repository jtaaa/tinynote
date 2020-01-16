import isEqual from 'lodash/isEqual';
import uuid from 'uuid/v4';
import { Note, RawNote, Line } from './types';

export const noteEqual = (note1: Note, note2: Note) => {
  return (
    note1.title === note2.title &&
    isEqual(note1.body, note2.body) &&
    isEqual(note1.attachments, note2.attachments)
  );
};

export const parseRawNote = (rawNote: RawNote) => {
  const note: Note = {
    ...rawNote,
    modifiedOn: new Date(rawNote.modifiedOn.seconds * 1000),
    createdOn: new Date(rawNote.createdOn.seconds * 1000),
  };
  return note;
};

export const createNewLine = (newLine: string) => {
  const line: Line = {
    id: uuid(),
    text: newLine,
    modifiedOn: new Date(),
    createdOn: new Date(),
  };
  return line;
};

export const convertStringBodyToLines = (stringBody: string) => {
  const lines = [createNewLine(stringBody)];
  return lines;
};
