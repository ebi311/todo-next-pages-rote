/** @type {import('next').NextConfig} */
import Knex from 'knex';

const dbPath = `${process.cwd()}/_data.sqlite`;
const knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
    options: {
      nativeBinding: '/path/to/better_sqlite3.node',
    },
  },
});

await knex.schema.createTableIfNotExists('tasks', (table) => {
  table.string('id').primary();
  table.string('title');
  table.string('body');
  table.string('status');
  table.string('priority');
  table.timestamp('deadline');
});

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcPlugins: [['next-superjson-plugin', {}]],
  },
};

export default nextConfig;
