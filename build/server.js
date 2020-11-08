import { httpListener } from '@hatsy/hatsy';
import { ZLogging } from '@hatsy/log-z-request';
import { Routing } from '@hatsy/router';
import { serveStatic } from '@hatsy/serve-static';
import { logZAtopOf, logZTimestamp, logZWithDetails } from '@run-z/log-z';
import { logZToStream } from '@run-z/log-z/node';
import { createServer } from 'http';
import path from 'path';

const server = createServer(httpListener(
    {

      handleBy(handler) {
        return ZLogging.with({

          by: logZTimestamp(
              logZToStream(process.stdout),
          ),

          forRequest(logger, { request: { method, url } }) {
            return logZWithDetails(
                {
                  method,
                  url,
                },
                logZAtopOf(logger),
            );
          },

        }).for(handler);
      },

    },
    Routing.for(
        serveStatic(path.join(process.cwd(), 'dist')),
    ),
));

server.listen(4200);
