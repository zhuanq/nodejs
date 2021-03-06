/**
 * Created by army8735 on 2018/1/28.
 */

'use strict';

module.exports = app => {
  const { sequelizeCircling, Sequelize } = app;
  return sequelizeCircling.define('user_comment_relation', {
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
    comment_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
    },
    type: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
      comment: '1点赞留言，2收藏留言，3屏蔽留言',
    },
    is_comment_delete: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    create_time: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  }, {
    indexes: [
      {
        name: 'user_id_comment_id_type',
        unique: true,
        fields: ['user_id', 'comment_id', 'type'],
      },
      {
        name: 'user_id_type_is_comment_delete_create_time',
        fields: ['user_id', 'type', 'is_comment_delete', 'create_time']
      },
      {
        name: 'comment_id_type',
        fields: ['comment_id', 'type']
      }
    ],
    comment: '用户与留言操作关联信息',
  });
};
