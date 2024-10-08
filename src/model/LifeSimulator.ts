import { GirlFriend } from "../types/type";
class LifeSimulator {
  private name: string;
  private money: number;
  private vigor: number;
  private stamina: number;
  private girlfriends: GirlFriend[];
  private behavior: string[];

  // 构造函数接收一个配置对象并初始化属性
  constructor(
    name: string,
    money: number,
    vigor: number,
    stamina: number,
    girlfriends: GirlFriend[],
    behavior: string[]
  ) {
    this.name = name;
    this.money = money;
    this.vigor = vigor;
    this.stamina = stamina;
    this.girlfriends = girlfriends;
    this.behavior = behavior;
  }

  /**
   * @method 设置行为方法
   * @returns
   */
  setBehavior(play: string): void {
    this.behavior.push(play)
  }
  
  /**
   * @method 获取行为方法
   * @returns
   */
  getBehavior(): string[] {
    return this.behavior
  }

  /**
   * @method 添加新女朋友
   * @param newGirl 新女朋友对象
   */
  makeGirlfriend(newGirl: GirlFriend): void {
    this.girlfriends.push(newGirl);
  }

  /**
   * @method 批量添加新女朋友
   * @param newGirl 新女朋友对象
   */
  makeGirlfriends(newGirl: GirlFriend[]): void {
    this.girlfriends.push(...newGirl);
  }

  /**
   * @method 获取当前名字
   * @returns { String } name
   */
  getName(): string {
    return this.name;
  }
  
  /**
   * @method 设置新的名字
   * @param newName 新名字
   */
  setName(newName: string): void {
    this.name = newName;
  }

  /**
   * @method 获取当前金钱数量
   * @returns { Number } money
   */
  getMoney(): number {
    return this.money;
  }

  /**
   * @method 设置新的金钱数量
   * @param { Number } newMoney 金额
   */
  setMoney(newMoney: number): void {
    this.money = newMoney;
  }

  /**
   * @method 获取当前活力值
   * @returns { Number } vigor 活力
   */
  getVigor(): number {
    return this.vigor;
  }

  /**
   * @method 设置新的活力值
   * @param { Number } newVigor 活力
   */
  setVigor(newVigor: number): void {
    this.vigor = newVigor;
  }

  /**
   * @method 获取当前耐力值
   * @returns { Number } stamina 耐力
   */
  getStamina(): number {
    return this.stamina;
  }

  /**
   * @method 设置新的耐力值
   * @param { Number } newStamina 耐力
   */
  setStamina(newStamina: number): void {
    this.stamina = newStamina;
  }

  /**
   * @method 获取当前女朋友列表
   * @returns { Array } girlfriends 女朋友列表
   */
  getGirlfriends(): object[] {
    return this.girlfriends;
  }
}

export default LifeSimulator;
