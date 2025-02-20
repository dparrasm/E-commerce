import { IDatabaseConnection } from "./IDatabaseConnection";

export class InMemoryDatabase implements IDatabaseConnection {
  private connected = false;

  async connect(): Promise<void> {
    console.log("Simulating in-memory database connection...");
    this.connected = true;
  }

  async disconnect(): Promise<void> {
    console.log("Simulating in-memory database disconnection...");
    this.connected = false;
  }

  isConnected(): boolean {
    return this.connected;
  }
}
