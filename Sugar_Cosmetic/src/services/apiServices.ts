import { AxiosError } from 'axios';
import { axiosInstance } from './axiosInstance';
import { ValidationException } from '@/interfaces/modal';

const onApiError = (error: unknown) => {
  if (error instanceof AxiosError) {
    const response = error.response?.data as ValidationException;

    let message =
      error.response?.data?.message ||
      error.response?.statusText ||
      error.message;
    if (response && response.exceptionType === 'ValidationException') {
      message = response.description;
    }
    console.error('Axios error:', message);
  } else if (error instanceof Error) {
    console.error('Error:', error.message);
  }
  return Promise.reject(error);
};

// Generic GET function
export const getData = async <Response>(
  endpoint: string,
  customHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  },
  withAuth = false
): Promise<Response> => {
  return axiosInstance
    .get<Response>(endpoint, {
      headers: { ...customHeaders, ...(withAuth ? undefined : {}) },
      withCredentials: !!withAuth,
    })
    .then((response) => Promise.resolve(response.data))
    .catch(onApiError);
};

export const getStreamData = async <Response>(
  endpoint: string,
  withAuth = true,
  customHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  }
): Promise<Response[]> => {
  try {
    const headers = new Headers({
      ...customHeaders,
      ...(withAuth
        ? { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
        : {}),
    });

    const response = await fetch(endpoint, {
      method: 'GET',
      headers,
      // credentials: withAuth ? 'include' : 'same-origin',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (!response.body) {
      throw new Error('ReadableStream not supported in this environment.');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let partialData: Response[] = [];
    let buffer = '';

    const processChunk = async ({
      done,
      value,
    }: ReadableStreamReadResult<Uint8Array>): Promise<Response[]> => {
      if (done) {
        if (buffer) {
          try {
            // Ensure the buffer contains valid JSON
            const parsedChunk = JSON.parse(buffer);
            partialData = [...partialData, ...parsedChunk];
          } catch (error) {
            console.error('Error parsing JSON:', error, buffer);
            throw new Error('Received invalid JSON');
          }
        }
        return partialData;
      }

      if (value) {
        buffer += decoder.decode(value, { stream: true });
        let boundary = buffer.indexOf('\n');

        // Process multiple complete JSON objects within the chunk
        while (boundary !== -1) {
          const line = buffer.slice(0, boundary);
          buffer = buffer.slice(boundary + 1);

          try {
            const parsedChunk = JSON.parse(line);
            partialData = [...partialData, ...parsedChunk];
          } catch (error) {
            console.error('Error parsing JSON:', error, line);
            throw new Error('Received invalid JSON');
          }

          boundary = buffer.indexOf('\n');
        }
      }

      return reader.read().then(processChunk);
    };

    // Start reading the stream
    await reader.read().then(processChunk);
    return partialData;
  } catch (error) {
    console.error('Error fetching data:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return Promise.reject(error);
  }
};

// Generic POST function
export const postData = async <Request, Response>(
  endpoint: string,
  data: Request,
  customHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  },
  withAuth = false
): Promise<Response> => {
  return axiosInstance
    .post<Response>(endpoint, data, {
      headers: { ...customHeaders, ...(withAuth ? undefined : {}) },
      withCredentials: !!withAuth,
    })
    .then((response) => Promise.resolve(response.data))
    .catch(onApiError);
};

// Generic UPDATE function
export const updateData = async <Request, Response>(
  endpoint: string,
  data: Request,
  customHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  },
  withAuth = true
): Promise<Response> => {
  return axiosInstance
    .put<Response>(endpoint, data, {
      headers: { ...customHeaders, ...(withAuth ? undefined : {}) },
    })
    .then((response) => Promise.resolve(response.data))
    .catch(onApiError);
};

// Generic DELETE function
export const deleteData = async (
  endpoint: string,
  id: string,
  customHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  },
  withAuth = true
): Promise<void> => {
  const url = `${endpoint}/${id}`;

  return axiosInstance
    .delete(url, {
      headers: { ...customHeaders, ...(withAuth ? undefined : {}) },
    })
    .then(() => Promise.resolve())
    .catch(onApiError);
};
// Generic DELETE function
export const deleteDataWithRequest = async <Request>(
  endpoint: string,
  data: Request,
  customHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  },
  withAuth = true
): Promise<void> => {
  const url = `${endpoint}`;

  return axiosInstance
    .delete<Request>(url, {
      data,
      headers: { ...customHeaders, ...(withAuth ? undefined : {}) },
    })
    .then(() => Promise.resolve())
    .catch(onApiError);
};
