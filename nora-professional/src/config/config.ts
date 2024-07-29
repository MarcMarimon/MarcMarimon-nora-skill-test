import { Dialect } from 'sequelize';

interface DBConfig {
  [key: string]: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
  };
}

const config: DBConfig = {
  development: {
    username: "Admin",
    password: "SuperAdmin123!",
    database: "nora_professional",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "Admin",
    password: "SuperAdmin123!",
    database: "nora_professional",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "Admin",
    password: "SuperAdmin123!",
    database: "nora_professional",
    host: "127.0.0.1",
    dialect: "mysql"
  },
};

export default config;
