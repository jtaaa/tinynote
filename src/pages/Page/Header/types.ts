import React from 'react';

export type Action = {
  id: string;
  icon: React.ReactNode;
  onClick: () => void;
};
