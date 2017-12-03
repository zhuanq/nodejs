/**
 * Created by army8735 on 2017/10/28.
 */

'use strict';

const TYPE = {
  originMusic: 1,
  musicAlbum: 5,
  photoAlbum: 11,
  recite: 19,
};

const NAME = {};
NAME[TYPE.originMusic] = '原创音乐';
NAME[TYPE.musicAlbum] = '音乐专辑';
NAME[TYPE.photoAlbum] = '相册';
NAME[TYPE.recite] = '朗诵';

export default {
  TYPE,
  NAME,
};
