// -------------------------------------

import { MyServer } from "./Class/my_server";

// -------------------------------------

try {
  new MyServer().StartListening()
} catch (err: unknown) {
  throw err;
}
