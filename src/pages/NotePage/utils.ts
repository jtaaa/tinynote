import { Note } from 'modules/notes';

type SetTempNote = (value: React.SetStateAction<Note>) => void;

export const getTitleSetter = (setTempNote: SetTempNote) => (
  e: React.ChangeEvent<HTMLTextAreaElement>,
) => {
  const text = e.target.value;
  const title = text.replace(/[\n\r]/g, '');
  return setTempNote(tempNote => ({ ...tempNote, title }));
};

export const getBodySetter = (setTempNote: SetTempNote) => (
  e: React.ChangeEvent<HTMLTextAreaElement>,
) => {
  const text = e.target.value;
  const body = text;
  return setTempNote(tempNote => ({ ...tempNote, body }));
};
