export type TextStatus = 'complete' | 'incomplete' | 'fragment';

export type FontStyles = {
  size: number;
  color: string;
  font: string;
};

export type TextTO = {
  id: string;
  title?: string;
  body?: string;
  flow: boolean;
  status: TextStatus;
  backgroundColor: string;
  fontStyle: {
    title: FontStyles;
    body: FontStyles;
  };
  wordsCount: number;
  charsCount: number;
  deletedAt: Date;
  editedAt: Date;
  createdAt: Date;
};
