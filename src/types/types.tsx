export type TextStatus = 'complete' | 'incomplete' | 'fragment';

export type FontStyles = {
  size: number;
  color: string;
  font: string;
};

export type TextTO = {
  id: string;
  body: string;
  flow: boolean;
  status: TextStatus;
  backgroundColor: string;
  fontStyle: FontStyles;
  wordsCount: number;
  charsCount: number;
  deletedAt: Date;
  editedAt: Date;
  createdAt: Date;
};
