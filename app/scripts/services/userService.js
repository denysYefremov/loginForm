import { sendRequest } from './baseService';
import apiUrls from '../utils/apiUrls';

class UserService {
  static login(name, password) {
    return sendRequest(
      apiUrls.login(name, password),
    );
  }
}

export default new UserService();
