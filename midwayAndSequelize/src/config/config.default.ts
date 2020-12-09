import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  // add your config here
  config.middleware = [];

  config.mysql = {
    dialectOptions: {
      charset: 'utf8mb4',
    },
    database: 'sequlize',
    port: 3306,
    username: 'root',
    password: '123456',
    timezone: '+08:00',
    options: {
      host: 'localhost',
      dialect: 'mysql',
      define: {
        timestamps: false,
      },
    },
  };

  return config;
};
