import { useQuery, useQueryClient } from 'react-query';
import { TextService } from 'services';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const textQueryKey = {
  all: ['texts'] as const,
};

export const useGetAllTexts = () => {
  return useQuery(textQueryKey.all, () => TextService.getAllTexts(), {});
};
