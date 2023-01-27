// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MOCKPRODUCTS } from '@/mock'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productId } = req.query

  if (req.method === 'GET') {
    const comment = MOCKPRODUCTS.find((c) => c.id === parseInt(`${productId}`))
    res.status(200).json(comment)
  } else if (req.method === 'DELETE') {
    const deleteComment = MOCKPRODUCTS.find(
      (c) => c.id === parseInt(`${productId}`),
    )

    const index = MOCKPRODUCTS.findIndex(
      (x) => x.id === parseInt(`${productId}`),
    )
    MOCKPRODUCTS.splice(index, 1)

    res.status(200).json(deleteComment)
  }
}
