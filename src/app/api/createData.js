import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('http://localhost:8000/api/hero/create', req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Terjadi kesalahan' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
