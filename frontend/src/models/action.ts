import { ActionType } from './actionType';
import { Payload } from './payload';

export interface Action {
  type: ActionType;
  payload?: Payload;
}
