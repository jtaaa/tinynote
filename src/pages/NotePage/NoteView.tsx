import React from 'react';
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
import Timestamp, { FancyTimestampTheme } from 'components/Timestamp';

type NoteViewProps = {
  noteId: string;
};
const NoteView: React.FC<NoteViewProps> = ({ noteId }) => {
  const { Trans, t } = useTranslation('NoteView');
  const history = useHistory();
  const { removeNote, tempNote, setTempNote } = useNote(noteId);

  const modifiedOnLabel = t('modifiedOn', { defaultValue: 'modified on' });
  const createdOnLabel = t('createdOn', { defaultValue: 'created on' });

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
          <Timestamp
            timestamp={tempNote.modifiedOn}
            label={modifiedOnLabel}
            theme={FancyTimestampTheme}
          />
          <Timestamp
            timestamp={tempNote.createdOn}
            label={createdOnLabel}
            theme={FancyTimestampTheme}
            ml={3}
          />
          <Button onClick={onDelete} ml={3}>
            <Trans i18nKey="delete">Delete</Trans>
          </Button>
        </Centered>
      </Box>
    </Box>
  );
};

export default NoteView;
