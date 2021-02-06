'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     * 
     */

    await queryInterface.addColumn('News', 'userId', {
      type:Sequelize.INTEGER,
      allowNull:true,
      references: {
      model: {tableName:'Users'},
      key: 'id'
      },
      onUpdate:'CASCADE',
      onDelete:'SET NULL',
      defaultValue:null
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('News','userId');
  }
};
