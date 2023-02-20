import request, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { HttpErrorCode } from '../const';

const handleHttpError = (error: unknown): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpErrorCode.BadRequest:
        toast.info(`${response.data}`);
        break;
      case HttpErrorCode.UnAuthorized:
        toast.info(`${response.data}`);
        break;
      case HttpErrorCode.NotFound:
        toast.info(`${response.data}`);
        break;
    }
  }
};

export { handleHttpError };
