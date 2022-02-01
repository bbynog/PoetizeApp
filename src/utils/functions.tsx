import { TextTO } from 'types';

export const generateRandomId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const mountTextObject = (title: string, body: string) => {
  const textTO: TextTO = {
    id: generateRandomId(),
    title,
    body,
    flow: false,
    status: 'complete',
    backgroundColor: '#fff',
    fontStyle: {
      title: {
        size: 35,
        color: '#000',
        font: 'Arial',
      },
      body: {
        size: 25,
        color: '#000',
        font: 'Arial',
      },
    },
    wordsCount: 0,
    charsCount: 0,
    deletedAt: new Date(),
    editedAt: new Date(),
    createdAt: new Date(),
  };

  return textTO;
};
