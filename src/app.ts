import { runCrons } from "#cron/index.js";
import knex, { migrate, seed } from "#postgres/knex.js";
import { runServer } from "#web-server/index.js";

await migrate.latest();
await seed.run();
console.log("All migrations and seeds have been run");

runCrons();

runServer();
