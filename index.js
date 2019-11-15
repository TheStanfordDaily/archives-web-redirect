// https://zeit.co/docs/v2/serverless-functions/introduction/
module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
}
