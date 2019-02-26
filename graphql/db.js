export const people = [
  { id: 0, name: 'Hankang', age: 30, gender: 'female' },
  { id: 1, name: 'arom', age: 23, gender: 'male' },
  { id: 2, name: 'osun', age: 60, gender: 'female' },
  { id: 3, name: 'jihui', age: 1, gender: 'female' },
  { id: 4, name: 'ku', age: 65, gender: 'male' },
  { id: 5, name: 'hyuna', age: 34, gender: 'female' },
  { id: 6, name: 'junghi', age: 36, gender: 'male' },
  { id: 7, name: 'Yong', age: 43, gender: 'male' },
  { id: 8, name: 'sanghyuk', age: 64, gender: 'male' }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};
