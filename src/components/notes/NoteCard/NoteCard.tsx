import React from 'react';
import Card from 'components/Card';
import DoublePica from 'components/text/DoublePica';
import Body from 'components/text/Body';
import { Note } from 'modules/notes';
import Timestamp, { FancyTimestampTheme } from 'components/Timestamp';
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

  let bodyCopy: React.ReactNode;
  if (Array.isArray(body)) {
    bodyCopy = body.slice(0, 2).map(line => (
      <Body key={line.id} style={{ overflowWrap: 'break-word' }}>
        {line.text}
      </Body>
    ));
  } else {
    bodyCopy = <Body>{body}</Body>;
  }

  return (
    <Card>
      <NoteCardHeader>
        <DoublePica>{title}</DoublePica>
        <Timestamp
          timestamp={modifiedOn}
          label={modifiedOnLabel}
          theme={FancyTimestampTheme}
        />
      </NoteCardHeader>
      <Body>{bodyCopy}</Body>
    </Card>
  );
};

export default NoteCard;
