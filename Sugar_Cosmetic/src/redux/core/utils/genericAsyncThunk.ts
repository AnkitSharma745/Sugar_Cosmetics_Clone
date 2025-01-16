import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { CustomMessageMeta } from '../genericTypes/genericTypes';

export const genericAsyncThunk = <Returned, ThunkArg>(
  type: string,
  fetchFunction: (args: ThunkArg) => Promise<Returned>
): AsyncThunk<
  Returned,
  ThunkArg,
  {
    rejectValue: CustomMessageMeta;
  }
> => {
  return createAsyncThunk<
    Returned,
    ThunkArg,
    { rejectValue: CustomMessageMeta }
  >(type, async (args, thunkAPI) => {
    try {
      const response = await fetchFunction(args);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        type: 'error',
        slice: type,
        message: (error as Error).message || 'An error occurred.',
      });
    }
  });
};
