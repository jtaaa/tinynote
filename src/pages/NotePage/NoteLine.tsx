import React from 'react';
import Box from 'components/Box';
import TextInput from 'components/TextInput';
import Timestamp, { TimeTimestampTheme } from 'components/Timestamp';

type NoteLineProps = {
  timestamp: Date;
  text: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
};
const NoteLine: React.FC<NoteLineProps> = ({
  timestamp,
  text,
  placeholder,
  onChange,
  onBlur,
}) => {
  return (
    <Box display="flex">
      <Timestamp mr={2} timestamp={timestamp} theme={TimeTimestampTheme} />
      <TextInput
        mt={2}
        flex={1}
        value={text}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default NoteLine;
