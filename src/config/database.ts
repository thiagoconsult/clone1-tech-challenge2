import { Pool, PoolClient } from 'pg';
import { env } from './envSchema';

const CONFIG = {
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  user: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB,
};

class Database {
  #pool: Pool;
  #client: PoolClient | undefined;

  constructor() {
    this.#pool = new Pool(CONFIG);
    this.#connect();
  }

  async #connect() {
    try {
      this.#client = await this.#pool.connect();
      console.info('Database running');
    } catch (error) {
      console.error(`Database connecting error: ${error}`);
      throw new Error(`Database connecting error: ${error}`);
    }
  }

  get Instance() {
    return this.#client;
  }
}

export const db = new Database();
