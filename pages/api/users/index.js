export default function usersHandler(req, res) {
    res.status(200).json({ users: [
        { name: 'john' },
        { name: 'greg' },
    ]})
  }