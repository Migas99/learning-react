import faker from "faker";

const data = {};

data.comments = () => {
  const comments = [];

  for (let i = 0; i < 30; i++) {
    comments.push({
      avatar: faker.image.avatar(),
      author: faker.name.firstName(),
      date: faker.datatype.datetime().toUTCString(),
      sentence: faker.lorem.sentence(),
    });
  }

  return comments;
};

export default data;
