import { Model, BuildOptions } from 'sequelize';
export interface IUserAttributes {
  id: number,
  userName: string,
  password: string,
  sex: number,
  time: Date,
  address: string,
  registerType: string,
  idType: string,
  idNumber: number,
  communityName: string,
}
export interface IUserModel extends IUserAttributes, Model {}
export type IUserModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUserModel;
};