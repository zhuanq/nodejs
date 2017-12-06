/**
 * Created by army8735 on 2017/12/1.
 */

'use strict';

let now = new Date();

let activityLabel = {
  '0': [
    {
      name: '日记',
      value: '#日记# ' + now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' 星期' + now.getDay()
    }
  ],
  '2019000000000032': [
    {
      name: '每日练字打卡',
      value: [
        {
          key: 'Day 1',
          value:'#每日练字打卡# #31天画圈挑战# Day1 #我在转圈上听的第一首歌#'
        },
        {
          key: 'Day 2',
          value: '#每日练字打卡# #31天画圈挑战# Day2 #你的名字#'
        },
        {
          key: 'Day 3',
          value: '#每日练字打卡# #31天画圈挑战# Day3 #手写诗词歌赋飞花令#'
        },
        {
          key: 'Day 4',
          value: '#每日练字打卡# #31天画圈挑战#  Day4  #喜爱的CV#'
        },
        {
          key: 'Day 5',
          value: '#每日练字打卡# #31天画圈挑战#  Day5  #国漫崛起#'
        },
        {
          key: 'Day 6',
          value: '#每日练字打卡# #31天画圈挑战#  Day6  #网文推荐#'
        }
      ]
    },
    {
      name: '个人书法展',
      value: '#个人书法展#',
    }
  ],
  '2019000000000072': [
    {
      name: '汉服种草活动',
      value: '#汉服种草活动#'
    },
    {
      name: '传统文化之美',
      value: '#传统文化之美#'
    }
  ],
  '2019000000000001': [
    {
      name: '每日荐歌',
      value: [
        {
          key: 'Day 1',
          value: '#每日荐歌# #31天画圈挑战# Day1 #一首让我入坑的歌#'
        },
        {
          key: 'Day 2',
          value: '#31天画圈挑战# #每日荐歌# Day2 #一首让你少女心爆棚甜到掉牙的歌#'
        },
        {
          key: 'Day 3',
          value: '#每日荐歌# #31天画圈挑战# Day3 #那首歌曾戳中我的泪点#'
        },
        {
          key: 'Day 4',
          value: '#每日荐歌# #31天画圈挑战# Day4 #喜爱的CV#'
        },
        {
          key: 'Day 5',
          value: '#每日荐歌# #31天画圈挑战# Day5 #那首歌真的超逗的#'
        },
        {
          key: 'Day 6',
          value: '#每日荐歌# #31天画圈挑战# Day6 #播放列表No.3#'
        }
      ]
    },
    {
      name: '记忆里的歌',
      value: '#记忆里的歌#'
    },
    {
      name: '那些年追过的歌手',
      value: '#那些年追过的歌手#'
    }
  ],
  '2019000000000020': [
    {
      name: '印象深刻的书',
      value: '#印象深刻的书#'
    },
    {
      name: '喜爱的诗词作者',
      value: '#喜爱的诗词作者#'
    }
  ],
  '2019000000000015': [
    {
      name: '手机摄影大赛',
      value: '#手机摄影大赛#'
    },
    {
      name: '每日美食打卡',
      value: '#每日美食打卡#'
    },
    {
      name: '每周最美味推荐',
      value: '#每周最美味推荐#'
    }
  ],
  '2019000000000171': [
    {
      name: '异世同人图',
      value: '#异世同人图#'
    },
    {
      name: '异世同人文',
      value: '#异世同人文#'
    }
  ]
};

export default {
  activityLabel,
};
