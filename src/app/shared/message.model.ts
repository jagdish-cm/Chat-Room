import { User } from './user.model';

export interface Message {
  content: string;
  from: User;
  to: User;
}
