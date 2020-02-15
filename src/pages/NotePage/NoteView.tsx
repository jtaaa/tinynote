import React, { Fragment, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Box from 'components/Box';
import Button from 'components/buttons/Button';
import Centered from 'components/Centered';
import TextInput from 'components/TextInput';
import Timestamp, {
  FancyTimestampTheme,
  DateTimestampTheme,
} from 'components/Timestamp';
import Trafalgar from 'components/text/Trafalgar';
import Body from 'components/text/Body';
import { useNote } from 'modules/notes';
import { useTranslation } from 'utils/i18next';
import { getTitleSetter, getBodySetter, getNewLineSetter } from './utils';
import NoteLine from './NoteLine';
import { useKeyListener } from 'utils/keys';

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
  const newLineRef = useRef<HTMLDivElement>(null);

  const modifiedOnLabel = t('modifiedOn', { defaultValue: 'modified on' });
  const createdOnLabel = t('createdOn', { defaultValue: 'created on' });
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

  const addNewLine = async () => {
    saveNewLine();
    setNewLine('');
  };

  const onDelete = async () => {
    removeNote();
    history.push('/');
  };

  useKeyListener('ENTER_KEY', addNewLine, {
    preventDefault: true,
  });

  useEffect(() => {
    setTimeout(() => {
      newLineRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [newLineRef]);

  let previousCreatedOn = Array.isArray(tempNote.body)
    ? tempNote.body[0].createdOn
    : tempNote.createdOn;

  return (
    <Box display="flex" flexDirection="column" p={3}>
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
          tempNote.body.map((line, index) => {
            const addDateStamp =
              index === 0 ||
              previousCreatedOn.getDate() !== line.createdOn.getDate();

            previousCreatedOn = line.createdOn;

            return (
              <Fragment key={line.id}>
                {addDateStamp && (
                  <Timestamp
                    timestamp={line.createdOn}
                    theme={DateTimestampTheme}
                  />
                )}
                <NoteLine
                  timestamp={line.modifiedOn}
                  text={line.text}
                  onChange={getBodySetter(setTempNote, index)}
                  placeholder={existingLinePlaceholder}
                />
              </Fragment>
            );
          })
        ) : (
          <TextInput
            mt={2}
            flex={1}
            value={tempNote.body}
            onChange={getBodySetter(setTempNote, 0)}
            placeholder={newNoteBodyPlaceholder}
          />
        )}
        <Box ref={newLineRef} mb={7}>
          {previousCreatedOn.getDate() !== new Date().getDate() && (
            <Timestamp timestamp={new Date()} theme={DateTimestampTheme} />
          )}
          <NoteLine
            timestamp={new Date()}
            text={newLine}
            placeholder={
              isExistingNote
                ? existingNoteBodyPlaceholder
                : newNoteBodyPlaceholder
            }
            onChange={getNewLineSetter(setNewLine)}
            onBlur={addNewLine}
          />
        </Box>
      </Body>
      <Box mt={4}>
        <Centered flexDirection={['column', 'row']} alignItems="center">
          <Timestamp
            timestamp={tempNote.modifiedOn}
            label={modifiedOnLabel}
            theme={FancyTimestampTheme}
          />
          <Timestamp
            timestamp={tempNote.createdOn}
            label={createdOnLabel}
            theme={FancyTimestampTheme}
            ml={[0, 3]}
          />
          <Button onClick={onDelete} ml={[0, 3]}>
            <Trans i18nKey="delete">Delete</Trans>
          </Button>
        </Centered>
      </Box>
    </Box>
  );
};

export default NoteView;
