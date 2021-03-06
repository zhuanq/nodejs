/**
 * Created by army8735 on 2018/1/28.
 */

'use strict';

module.exports = app => {
  const { sequelizeCircling, Sequelize } = app;
  return sequelizeCircling.define('circle_comment_relation', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    circle_id: {
      type: Sequelize.BIGINT.UNSIGNED,
      allowNull: false,
    },
    comment_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
    },
    is_comment_delete: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    tag_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
    },
  }, {
    indexes: [
      {
        name: 'circle_id_comment_id_tag_id',
        unique: true,
        fields: ['circle_id', 'comment_id', 'tag_id'],
      },
      {
        name: 'circle_id_is_comment_delete_comment_id',
        fields: ['circle_id', 'is_comment_delete', 'comment_id'],
      },
      {
        name: 'tag_id_comment_id',
        fields: ['tag_id', 'comment_id'],
      },
      {
        name: 'comment_id',
        fields: ['comment_id'],
      }
    ],
    comment: '圈子留言关联信息',
  });
};
