import React from 'react';
import Card from 'components/Card';
import DoublePica from 'components/text/DoublePica';
import Body from 'components/text/Body';
import { Note } from 'modules/notes';
import Timestamp from 'components/Timestamp';
import { useTranslation } from 'utils/i18next';
import { NoteCardHeader } from './elements';

type NoteCardProps = Note;
const NoteCard: React.FC<NoteCardProps> = ({
  title,
  body,
  attachments,
  createdOn,
  modifiedOn,
}) => {
  const { t } = useTranslation('NoteCard');

  const modifiedOnLabel = t('modified', { defaultValue: 'M' });

  return (
    <Card>
      <NoteCardHeader>
        <DoublePica>{title}</DoublePica>
        <Timestamp
          timestamp={modifiedOn}
          label={modifiedOnLabel}
          theme="FANCY"
        />
      </NoteCardHeader>
      <Body>{body}</Body>
    </Card>
  );
};

export default NoteCard;
