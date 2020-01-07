import React from 'react';
import Trafalgar from 'components/text/Trafalgar';
import Box from 'components/Box';
import UnstyledLink from 'components/UnstyledLink';
import { useNotes } from 'modules/notes';
import { useTranslation } from 'utils/i18next';
import NoteCard from '../NoteCard';

const NoteList = () => {
  const { Trans } = useTranslation('NoteList');
  const { notes } = useNotes();

  return (
    <Box p={2} pt={3}>
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
    </Box>
  );
};

export default NoteList;
