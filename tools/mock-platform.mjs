// A fake WebRobot platform for the functional test (port 3999): agent starts succeed (and complete at once with a
// short report), emails are accepted. Every call is appended to mock-calls.jsonl so the test can count them.
import http from 'node:http';
import fs from 'node:fs';

const LOG = new URL('./mock-calls.jsonl', import.meta.url).pathname;
let n = 0;
http.createServer((req, res) => {
  let body = '';
  req.on('data', (c) => { body += c; });
  req.on('end', () => {
    const path = req.url.replace(/^\/api\/webrobot\/api/, '');
    let j = {}; try { j = JSON.parse(body || '{}'); } catch { /* not json */ }
    const send = (code, o) => { res.writeHead(code, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(o)); };
    fs.appendFileSync(LOG, JSON.stringify({ at: Date.now(), method: req.method, path, profileId: j.profileId, to: j.to, subject: j.subject }) + '\n');
    if (req.method === 'POST' && path === '/agentic/start') return send(200, { executionId: `ex_${++n}` });
    if (req.method === 'GET' && path.startsWith('/agentic/')) return send(200, { status: 'COMPLETED', result: '# Report di collaudo\n\nEsecuzione simulata.', completedAt: new Date().toISOString() });
    if (req.method === 'POST' && path === '/email/send') return send(200, { ok: true });
    return send(200, {});
  });
}).listen(3999, () => console.log('mock platform on 3999'));
