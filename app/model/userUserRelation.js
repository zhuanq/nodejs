/**
 * Created by army8735 on 2018/1/28.
 */

'use strict';

module.exports = app => {
  const { sequelizeCircling, Sequelize } = app;
  return sequelizeCircling.define('user_user_relation', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
    },
    target_id: {
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
    },
    type: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
      comment: '1关注用户，2拉黑用户，3关注作者，4拉黑作者',
    },
    is_delete: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    create_time: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    update_time: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  }, {
    indexes: [
      {
        name: 'user_id_target_id',
        unique: true,
        fields: ['user_id', 'target_id'],
      },
      {
        name: 'user_id_type',
        fields: ['user_id', 'type', 'update_time'],
      },
      {
        name: 'target_id_type',
        fields: ['target_id', 'type', 'update_time']
      }
    ],
    comment: '用户和用户关联信息',
  });
};
