import { createContext, useContext } from 'react';
import { ListGroupContextType } from './interface';

export const ListGroupContext = createContext<ListGroupContextType | null>(null);
export const useListGroup = () => {
  const context = useContext(ListGroupContext);
  if (!context) {
    throw new Error('ListGroup.* components must be used within ListGroup');
  }
  return context;
};
