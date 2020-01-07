import React, { useState } from 'react';
import Box from 'components/Box';
import Button from 'components/buttons/Button';
import Centered from 'components/Centered';
import Trafalgar from 'components/text/Trafalgar';
import Body from 'components/text/Body';
import { useNote } from 'modules/notes';
import { useKeyListener } from 'utils/keys';
import { useTranslation } from 'utils/i18next';

type NoteViewProps = {
  noteId: string;
};
const NoteView: React.FC<NoteViewProps> = ({ noteId }) => {
  const { Trans } = useTranslation('NoteView');
  const { note, updateNote } = useNote(noteId);
  const [tempNote, setTempNote] = useState(note);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingBody, setIsEditingBody] = useState(false);

  useKeyListener('ENTER_KEY', () => {
    setIsEditingTitle(false);
  });

  const clearEditing = () => {
    setIsEditingTitle(false);
    setIsEditingBody(false);
  };

  const onClickTitle = () => {
    clearEditing();
    setIsEditingTitle(true);
  };

  const onClickBody = () => {
    clearEditing();
    setIsEditingBody(true);
  };

  const onDone = async () => {
    clearEditing();
    await updateNote(tempNote);
  };

  return (
    <Box>
      <Trafalgar textAlign="center" onClick={onClickTitle}>
        {isEditingTitle ? (
          <input
            value={tempNote.title}
            onChange={e => setTempNote({ ...tempNote, title: e.target.value })}
            autoFocus
          />
        ) : (
          tempNote.title
        )}
      </Trafalgar>
      <Body onClick={onClickBody}>
        {isEditingBody ? (
          <textarea
            style={{ width: '100%' }}
            value={tempNote.body}
            onChange={e => setTempNote({ ...tempNote, body: e.target.value })}
            autoFocus
          />
        ) : (
          tempNote.body
        )}
      </Body>
      <Centered pt={4}>
        <Button onClick={onDone}>
          <Trans i18nKey="done">Done</Trans>
        </Button>
      </Centered>
    </Box>
  );
};

export default NoteView;
