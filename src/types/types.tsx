type TextStatus = 'complete' | 'incomplete' | 'fragment';
type FontStyles = {
  size: number;
  color: string;
  font: string;
};

type TextTO = {
  title?: string;
  body: string;
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
