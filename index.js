// api/index.js
import { createServer } from 'http';
import { parse } from 'url';
import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default async function handler(req, res) {
  const parsedUrl = parse(req.url, true);
  req.url = parsedUrl.path;
  server(req, res);
}
