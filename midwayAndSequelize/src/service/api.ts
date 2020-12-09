import { Inject, Provide } from '@midwayjs/decorator';

@Provide('DemoServer')
export class DemoServer {
  @Inject()
  UnlockModel: any;

  @Inject()
  UserModel: any;

  async getList() {
    const data = await this.UnlockModel.findAll({
      include: [
        {
          association: this.UnlockModel.belongsTo(this.UserModel, {
            foreignKey: 'user_id',
            sourceKey: 'id',
          }),
          as: {},
        },
      ],
      raw: true,
    });
    return data;
  }
}
