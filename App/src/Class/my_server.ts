// -------------------------------------

import fastify, { FastifyInstance } from "fastify";
import { root } from "../Routes/root";
import { env_types } from "../Types/env_type";
import { env_var } from "./env";

// -------------------------------------

export class MyServer {
  // Data --------------------------
  private fastify: FastifyInstance;
  private env: env_types;

  // Constructor -------------------
  constructor() {
    this.fastify = fastify();
    this.env = env_var();
  }

  // Methods -----------------------

  private RegRoutes(): void {
    root(this.fastify);
  }

  public StartListening(): void {
    this.RegRoutes();
    this.fastify.listen(
      this.env.WEB_PORT,
      "0.0.0.0",
      (err: Error, addr: string) => {
        if (err) throw err;
        return console.log(
          `The server start listening on port: ${this.env.WEB_PORT}`
        );
      }
    );
  }
}
