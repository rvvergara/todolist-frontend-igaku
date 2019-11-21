import uuid from 'uuid';
import users from './users';

export default [
  {
    _id: uuid(),
    owner: users[0]._id,
    description: 'Wake up',
    completed: false,
  },
  {
    _id: uuid(),
    owner: users[0]._id,
    description: 'Eat breakfast',
    completed: false,
  },
  {
    _id: uuid(),
    owner: users[1]._id,
    description: 'Eat dinner',
    completed: false,
  },
  {
    _id: uuid(),
    owner: users[1]._id,
    description: 'Sleep',
    completed: false,
  },
];
