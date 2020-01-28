import React from 'react';
import { useHistory } from 'react-router-dom';
import Box from 'components/Box';
import Button from 'components/buttons/Button';
import Centered from 'components/Centered';
import TextInput from 'components/TextInput';
import Timestamp, {
  FancyTimestampTheme,
  TimeTimestampTheme,
} from 'components/Timestamp';
import Trafalgar from 'components/text/Trafalgar';
import Body from 'components/text/Body';
import { useNote } from 'modules/notes';
import { useTranslation } from 'utils/i18next';
import { getTitleSetter, getBodySetter, getNewLineSetter } from './utils';

type NoteViewProps = {
  noteId: string;
};
const NoteView: React.FC<NoteViewProps> = ({ noteId }) => {
  const { Trans, t } = useTranslation('NoteView');
  const history = useHistory();
  const {
    removeNote,
    tempNote,
    setTempNote,
    newLine,
    setNewLine,
    saveNewLine,
  } = useNote(noteId);

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

  const existingNoteBodyPlaceholder = t('continueNoteHere', {
    defaultValue: 'Continue your note here.',
  });

  const existingLinePlaceholder = t('startNoteHere', {
    defaultValue: 'Edit this line or leave empty to remove.',
  });

  const isExistingNote =
    Array.isArray(tempNote.body) && tempNote.body.length !== 0;

  const onBlur = async (e: React.FocusEvent<HTMLTextAreaElement>) => {
    saveNewLine();
    setNewLine('');
  };

  return (
    <Box display="flex" flexDirection="column" height="100%" p={3}>
      <Trafalgar textAlign="center">
        <TextInput
          textAlign="center"
          value={tempNote.title}
          onChange={getTitleSetter(setTempNote)}
          placeholder={newNoteTitlePlaceholder}
        />
      </Trafalgar>
      <Body mt={2} flex={1}>
        {Array.isArray(tempNote.body) ? (
          tempNote.body.map((line, index) => (
            <Box key={line.id} display="flex">
              <Timestamp
                mr={2}
                timestamp={line.modifiedOn}
                theme={TimeTimestampTheme}
              />
              <Body mr={3} lineHeight="40px">
                ~
              </Body>
              <TextInput
                mt={2}
                flex={1}
                value={line.text}
                onChange={getBodySetter(setTempNote, index)}
                placeholder={existingLinePlaceholder}
              />
            </Box>
          ))
        ) : (
          <TextInput
            mt={2}
            flex={1}
            value={tempNote.body}
            onChange={getBodySetter(setTempNote, 0)}
            placeholder={newNoteBodyPlaceholder}
          />
        )}
        <Box display="flex">
          <Timestamp mr={2} timestamp={new Date()} theme={TimeTimestampTheme} />
          <Body mr={3} lineHeight="40px">
            ~
          </Body>
          <TextInput
            mt={2}
            flex={1}
            value={newLine}
            onChange={getNewLineSetter(setNewLine)}
            onBlur={onBlur}
            placeholder={
              isExistingNote
                ? existingNoteBodyPlaceholder
                : newNoteBodyPlaceholder
            }
          />
        </Box>
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
