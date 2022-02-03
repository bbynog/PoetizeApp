import { useQuery } from 'react-query';
import { TextService } from 'services';

export const textQueryKey = {
  all: ['texts'] as const,
};

export const useGetAllTexts = () => {
  return useQuery(textQueryKey.all, () => TextService.getAllTexts(), {
    cacheTime: Infinity,
  });
};
