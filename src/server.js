import { Server, Response } from "miragejs";
import wlan from "./data/wlan";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    routes() {
      this.namespace = "api/v2";

      this.get("/wlan", () => {
        return new Response(200, {}, wlan);
      });

      this.post(
        "/wlan",
        (request) => {
          const headers = {};
          const wlan = JSON.parse(request.requestBody);
          return new Response(200, headers, {
            message: `Successfully set to ${wlan.name}`,
          });
        },
        { timing: 2000 }
      );
    },
  });

  return server;
}
