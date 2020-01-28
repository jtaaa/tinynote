import { Note } from 'modules/notes';
import { convertStringBodyToLines } from 'modules/notes/utils';

type SetTempNote = (value: React.SetStateAction<Note>) => void;
type SetNewLine = (value: React.SetStateAction<string>) => void;

export const getTitleSetter = (setTempNote: SetTempNote) => (
  e: React.ChangeEvent<HTMLTextAreaElement>,
) => {
  const text = e.target.value;
  const title = text.replace(/[\n\r]/g, '');
  return setTempNote(tempNote => ({ ...tempNote, title }));
};

export const getBodySetter = (setTempNote: SetTempNote, index: number) => (
  e: React.ChangeEvent<HTMLTextAreaElement>,
) => {
  const text = e.target.value;
  return setTempNote((tempNote: Note) => {
    if (Array.isArray(tempNote.body)) {
      // Remove if the line is empty
      if (!text) {
        return {
          ...tempNote,
          body: [
            ...tempNote.body.slice(0, index),
            ...tempNote.body.slice(index + 1),
          ],
        };
      }
      // Otherwise add the changes
      const newLine = { ...tempNote.body[index], modifiedOn: new Date(), text };
      const body = [
        ...tempNote.body.slice(0, index),
        newLine,
        ...tempNote.body.slice(index + 1),
      ];
      return {
        ...tempNote,
        body,
      };
    }
    return {
      ...tempNote,
      body: convertStringBodyToLines(tempNote.body),
    };
  });
};

export const getNewLineSetter = (setNewLine: SetNewLine) => (
  e: React.ChangeEvent<HTMLTextAreaElement>,
) => {
  const text = e.target.value;
  const newLine = text;
  return setNewLine(newLine);
};
