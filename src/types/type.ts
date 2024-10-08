export interface GirlFriend {
  /**
   * 一维度评分（0-10）
   */
  oneDimensional: number;

  /**
   * 二维度评分（0-10）
   */
  twoDimensional: number;

  /**
   * 三维度评分（0-10）
   */
  threeDimensional: number;

  /**
   * 外貌评分（1-10）
   */
  AppearanceLevel: number;

  /**
   * 名字
   */
  Name: string;

  /**
   * 年龄（18-35岁）
   */
  Age: number;

  /**
   * 身高（单位：厘米）
   */
  Height: string;

  /**
   * 体重（单位：千克）
   */
  Weight: string;

  /**
   * 生日（格式：MM/DD/YYYY）
   */
  Birthday: string;

  /**
   * 爱好
   */
  Hobby: string;

  /**
   * 自我描述
   */
  SelfDescription: string;

  /**
   * 最喜欢的食物
   */
  FavoriteFood: string;

  /**
   * 最喜欢的饮料
   */
  FavoriteDrink: string;

  /**
   * 最喜欢的歌曲
   */
  FavoriteSong: string;

  /**
   * 最喜欢的电影
   */
  FavoriteMovie: string;

  /**
   * 最喜欢的书籍
   */
  FavoriteBook: string;

  /**
   * 最喜欢的动物
   */
  FavoriteAnimal: string;

  /**
   * 最喜欢的地方
   */
  FavoritePlace: string;
}


