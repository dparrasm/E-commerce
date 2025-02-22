import { IDatabaseConnection } from "./IDatabaseConnection";
import { InMemoryDatabase } from "./InMemoryDatabase";

const database: IDatabaseConnection = new InMemoryDatabase();

async function startApp() {
  await database.connect();
  console.log("App started!");
}

startApp();
