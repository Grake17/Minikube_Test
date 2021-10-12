// -------------------------------------

import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
} from "fastify";

// -------------------------------------

export const ping = async (req: FastifyRequest, repl: FastifyReply) => {
  return { world: "hello!" };
};
