"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: "123456",
        firstName: "Binh",
        lastName: "Nguyen",
        address: "Ha Tinh",
        phoneNumber: "0384452653",
        gender: 1,
        image: "",
        roleId: "R1",
        positionId: "doctor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
