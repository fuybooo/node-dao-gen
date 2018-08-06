
/**
 * User
 */
export default class User {

  public id: number; // id
  public name: string; // 姓名
  public username: string; // 用户名
  public email: string; // 邮箱

  // 构造函数
  constructor(              id?: number,
              name?: string,
              username?: string,
              email?: string) {
        this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
  }
        
}
