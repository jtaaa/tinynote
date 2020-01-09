import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from 'components/Box';
import Button from 'components/buttons/Button';
import Centered from 'components/Centered';
import TextInput from 'components/TextInput';
import Trafalgar from 'components/text/Trafalgar';
import Body from 'components/text/Body';
import { useNote } from 'modules/notes';
import { useTranslation } from 'utils/i18next';
import { getTitleSetter, getBodySetter } from './utils';

type NoteViewProps = {
  noteId: string;
};
const NoteView: React.FC<NoteViewProps> = ({ noteId }) => {
  const { Trans, t } = useTranslation('NoteView');
  const history = useHistory();
  const { note, updateNote, removeNote } = useNote(noteId);
  const [tempNote, setTempNote] = useState(note);

  const onDone = async () => {
    await updateNote(tempNote);
  };

  const onDelete = async () => {
    await removeNote();
    history.push('/');
  };

  const newNoteTitlePlaceholder = t('newNote', {
    defaultValue: 'New note',
  });

  const newNoteBodyPlaceholder = t('startNoteHere', {
    defaultValue: 'Start your epic note here!',
  });

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Trafalgar textAlign="center">
        <TextInput
          textAlign="center"
          value={tempNote.title}
          onChange={getTitleSetter(setTempNote)}
          rows={1}
          placeholder={newNoteTitlePlaceholder}
        />
      </Trafalgar>
      <Body mt={2} flex={1}>
        <TextInput
          width={1}
          value={tempNote.body}
          onChange={getBodySetter(setTempNote)}
          placeholder={newNoteBodyPlaceholder}
        />
      </Body>
      <Box mt={4}>
        <Centered>
          <Button onClick={onDelete} mr={3}>
            <Trans i18nKey="delete">Delete</Trans>
          </Button>
          <Button onClick={onDone} ml={3}>
            <Trans i18nKey="done">Done</Trans>
          </Button>
        </Centered>
      </Box>
    </Box>
  );
};

export default NoteView;
