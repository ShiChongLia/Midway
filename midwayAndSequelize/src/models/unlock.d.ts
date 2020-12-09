import { Model, BuildOptions } from 'sequelize';
export interface IUnlockAttributes {
  id: number,
  unlockType: string,
  unlockTime: Date,
  remark?: string,
  userId: number,
}
export interface IUnlockModel extends IUnlockAttributes, Model {}
export type IUnlockModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUnlockModel;
};