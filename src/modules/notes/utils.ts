import isEqual from 'lodash/isEqual';
import { Note } from './types';

export const noteEqual = (note1: Note, note2: Note) => {
  return (
    note1.body === note2.body &&
    note1.title === note2.title &&
    isEqual(note1.attachments, note2.attachments)
  );
};
