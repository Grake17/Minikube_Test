// -------------------------------------

import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
} from "fastify";

// Import Routes -----------------------
import { ping } from "../Function/ping";

// -------------------------------------

export const root = async (fastify: FastifyInstance): Promise<void> => {
  // Ping Route
  fastify.get("/ping", async (req: FastifyRequest, repl: FastifyReply) =>
    ping(req, repl)
  );
  // Root Route
  fastify.get("/", async (req: FastifyRequest, repl: FastifyReply) => {
    return "The APIs works!";
  });
};
