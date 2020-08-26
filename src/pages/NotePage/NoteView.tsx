import React, { useState } from 'react';
import { useSwipeable, SwipeCallback } from 'react-swipeable';
import Box from 'components/Box';
import Trafalgar from 'components/text/Trafalgar';

const MINIMAL_SWIPE_OFFSET = 300;

type NoteViewProps = {
  noteId: string;
};
const NoteView: React.FC<NoteViewProps> = ({ noteId }) => {
  const [isShowingHistory, setIsShowingHistory] = useState(false);

  const onSwipedDown: SwipeCallback = event => {
    if (Math.abs(event.deltaY) < MINIMAL_SWIPE_OFFSET) {
      setIsShowingHistory(true);
    }
  };
  const onSwipedUp: SwipeCallback = event => {
    if (Math.abs(event.deltaY) < MINIMAL_SWIPE_OFFSET) {
      setIsShowingHistory(false);
    }
  };

  const handlers = useSwipeable({ onSwipedDown, onSwipedUp, trackMouse: true });

  return (
    <Box {...handlers} flex={1} display="flex" flexDirection="column" p={3}>
      {isShowingHistory && <Trafalgar>History</Trafalgar>}
    </Box>
  );
};

export default NoteView;
