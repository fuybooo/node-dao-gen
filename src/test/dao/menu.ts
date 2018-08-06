
/**
 * Menu
 */
export default class Menu {

  public id: number; // 主键id自增
  public pid: number; // 父id，根节点的父id为0
  public name: string; // 名称
  public description: string; // 详细描述
  public mark: string; // 备注
  public url: string; // 接口路径
  public method: string; // 接口的方式
  public params: string; // 参数json串
  public res: string; // 返回结果json串
  public level: number; // 层级
  public sort: number; // 排序
  public type: number; // 菜单类型，1：有子节点的文件夹；2：文件；3：没有子节点的文件夹
  public createtime: string; // 创建时间
  public updatetime: string; // 修改时间

  // 构造函数
  constructor(              id?: number,
              pid?: number,
              name?: string,
              description?: string,
              mark?: string,
              url?: string,
              method?: string,
              params?: string,
              res?: string,
              level?: number,
              sort?: number,
              type?: number,
              createtime?: string,
              updatetime?: string) {
        this.id = id;
    this.pid = pid;
    this.name = name;
    this.description = description;
    this.mark = mark;
    this.url = url;
    this.method = method;
    this.params = params;
    this.res = res;
    this.level = level;
    this.sort = sort;
    this.type = type;
    this.createtime = createtime;
    this.updatetime = updatetime;
  }
        
}
