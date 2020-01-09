import React from 'react';
import Box from 'components/Box';
import UnstyledLink from 'components/UnstyledLink';
import Centered from 'components/Centered';
import Card from 'components/Card';
import Trafalgar from 'components/text/Trafalgar';
import DoublePica from 'components/text/DoublePica';
import { useTranslation } from 'utils/i18next';
import { useNotes } from 'modules/notes';
import NoteCard from '../NoteCard';

const NoteList = () => {
  const { Trans } = useTranslation('NoteList');
  const { notes, addNote } = useNotes();

  const createNewNote = async () => {
    await addNote({
      title: '',
      body: '',
      attachments: [],
    });
  };

  return (
    <Box pt={3}>
      <Trafalgar>
        <Trans i18nKey="notes">Notes</Trans>
      </Trafalgar>
      {notes.map(note => (
        <Box key={note.id} mt={2}>
          <UnstyledLink to={`/${note.id}`}>
            <NoteCard {...note} />
          </UnstyledLink>
        </Box>
      ))}
      <Card mt={2} onClick={createNewNote}>
        <Centered>
          <DoublePica>
            <Trans i18nKey="newNote">
              <em>Add a new note.</em>
            </Trans>
          </DoublePica>
        </Centered>
      </Card>
    </Box>
  );
};

export default NoteList;
