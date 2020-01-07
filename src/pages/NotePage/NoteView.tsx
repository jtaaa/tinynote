import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const { note, updateNote, removeNote } = useNote(noteId);
  const [tempNote, setTempNote] = useState(note);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingBody, setIsEditingBody] = useState(tempNote.body === '');

  useKeyListener('ENTER_KEY', () => {
    setIsEditingTitle(false);
  });

  const clearEditing = () => {
    setIsEditingTitle(false);
    setIsEditingBody(tempNote.body === '');
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

  const onDelete = async () => {
    clearEditing();
    await removeNote();
    history.push('/');
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
      <Body onClick={onClickBody} mt={2}>
        {isEditingBody ? (
          <textarea
            style={{ width: '100%' }}
            value={tempNote.body}
            onChange={e => setTempNote({ ...tempNote, body: e.target.value })}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus a nisi vel congue."
            autoFocus
          />
        ) : (
          tempNote.body
        )}
      </Body>
      <Centered mt={4}>
        <Button onClick={onDelete} mr={3}>
          <Trans i18nKey="delete">Delete</Trans>
        </Button>
        <Button onClick={onDone} ml={3}>
          <Trans i18nKey="done">Done</Trans>
        </Button>
      </Centered>
    </Box>
  );
};

export default NoteView;
