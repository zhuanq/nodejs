/**
 * Created by army8735 on 2018/1/27.
 */

'use strict';

module.exports = app => {
  const { sequelizeCircling, Sequelize } = app;
  return sequelizeCircling.define('work_text', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
    },
    work_id: {
      type: Sequelize.BIGINT.UNSIGNED,
      primaryKey: true,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: '',
    },
  }, {
    indexes: [
    ],
    comment: '文本类小作品扩展信息',
  });
};
