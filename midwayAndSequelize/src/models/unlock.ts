import { providerWrapper } from 'midway';
import { DataTypes, IndexType } from 'sequelize';
import { IDB } from './db';
export default async function setupModel(context) {
  const db: IDB = await context.getAsync('DB');
  const {
    sequelize
  } = db;
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    unlockType: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "unlock_type"
    },
    unlockTime: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "unlock_time"
    },
    remark: {
      type: DataTypes.CHAR(128),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "remark"
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_id",
      references: {
        key: "id",
        model: "userModel"
      }
    }
  };
  const options = {
    tableName: "unlock",
    comment: "",
    indexes: [{
      name: "user_id_idx",
      unique: false,
      type: "BTREE" as IndexType,
      fields: ["user_id"]
    }]
  };
  return sequelize.define("unlockModel", attributes, options);
}
providerWrapper([{
  id: "UnlockModel",
  provider: setupModel
}]);