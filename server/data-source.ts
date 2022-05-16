import { DataSource } from 'typeorm';
import Tea from './entity/Tea';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'dev-interview-tech-task',
  synchronize: false,
  logging: false,
  entities: [Tea],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
