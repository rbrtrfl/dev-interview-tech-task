import fs from 'fs';

export default function logger(req, res, next) {
  const {
    rawHeaders, httpVersion, method, socket, url,
  } = req;
  const { remoteAddress, remoteFamily } = socket;

  const log = {
    timestamp: Date.now(),
    rawHeaders,
    httpVersion,
    method,
    remoteAddress,
    remoteFamily,
    url,
  };
  const logFull = JSON.parse(fs.readFileSync('./log/audit.log.json', 'utf-8'));
  logFull.push(log);
  fs.writeFileSync('./log/audit.log.json', JSON.stringify(logFull), 'utf-8');

  next();
}
