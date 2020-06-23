import { httpListener } from '@hatsy/hatsy';
import { Routing } from '@hatsy/router';
import { serveStatic } from '@hatsy/serve-static';
import { createServer } from 'http';
import path from 'path';

const server = createServer(httpListener(
    Routing.for(serveStatic(path.join(process.cwd(), 'dist'))),
));

server.listen(4200);
