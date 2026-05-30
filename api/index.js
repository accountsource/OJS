export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/pdf');

  res.status(302);
  res.setHeader('Location', 'https://teka.eu.org');

  res.end(`
%PDF-1.4
1 0 obj
<<>>
endobj
trailer
<<>>
%%EOF
`);
}
