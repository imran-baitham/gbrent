// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MOCKPRODUCTS } from '@/mock'
import { ProductProps } from '@/utils'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductProps[]>,
) {
  if (req.method === 'GET') {
    res.status(200).json(MOCKPRODUCTS)
  } else if (req.method === 'POST') {
    // const comment = req.body.comment
    // const newComment = {
    //   id: Date.now(),
    //   text: comment,
    // }
    // product.push(newComment)
    res.status(201).json(MOCKPRODUCTS)
  }
}
