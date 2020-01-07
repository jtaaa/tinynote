import React from 'react';
import { useTranslation } from 'utils/i18next';
import Trafalgar from 'components/text/Trafalgar';
import Box from 'components/Box';
import NoteComponent from '../Note';
import useNotes from '../utils';

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
          <NoteComponent {...note} />
        </Box>
      ))}
    </Box>
  );
};

export default NoteList;
