import React from 'react';
import Card from 'components/Card';
import { Note as NoteType } from '../types';
import DoublePica from 'components/text/DoublePica';
import Body from 'components/text/Body';

type NoteProps = NoteType;
const Note: React.FC<NoteProps> = ({
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

export default Note;
