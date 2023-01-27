// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import newusers from '../../../mock/users/newusers.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { projectId }: any = req.query

  if (req.method === 'GET') {
    const comment = newusers.find((c) => c.id === parseInt(projectId))
    res.status(200).json(comment)
  } else if (req.method === 'DELETE') {
    const deleteComment = newusers.find((c) => c.id === parseInt(projectId))

    const index = newusers.findIndex((x) => x.id === parseInt(projectId))
    newusers.splice(index, 1)

    res.status(200).json(deleteComment)
  }
}
