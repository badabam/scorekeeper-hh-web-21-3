export default (req, res) => {
  const { method, url } = req
  res.json({ method, url })
}
