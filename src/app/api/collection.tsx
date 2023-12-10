// /pages/api/collection.js

import { NextApiRequest, NextApiResponse } from "next";


const collection = [
    1,2,3,4,5
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(collection);
  } else if (req.method === "POST") {
   
  } else {
    res.status(405).end(); // 不允許其他方法
  }
}
