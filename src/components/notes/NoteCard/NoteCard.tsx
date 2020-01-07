import React from 'react';
import Card from 'components/Card';
import DoublePica from 'components/text/DoublePica';
import Body from 'components/text/Body';
import { Note } from '../types';

type NoteCardProps = Note;
const NoteCard: React.FC<NoteCardProps> = ({
  title,
  body,
  attachments,
  createdOn,
  modifiedOn,
}) => {
  return (
    <Card>
      <DoublePica>{title}</DoublePica>
      <Body>{body}</Body>
    </Card>
  );
};

export default NoteCard;
