export default function handler(req, res) {
    const { userId } = req.query
    res.end(`User: ${userId}`)
  }
  