'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          fullName: 'John Doe',
          email: 'jd@test.com',
          image: 'xxx',
          password: 'test123',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullName: 'Marie Miller',
          email: 'mm@test.com',
          image: 'xxx',
          password: 'test123',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullName: 'William Smith',
          email: 'ws@test.com',
          image: 'xxx',
          password: 'test123',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullName: 'James Blue',
          email: 'jb@test.com',
          image: 'xxx',
          password: 'test123',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullName: 'Emilie White',
          email: 'ew@test.com',
          image: 'xxx',
          password: 'test123',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullName: 'Max Black',
          email: 'mb@test.com',
          image: 'xxx',
          password: 'test123',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
