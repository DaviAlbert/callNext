import { NextApiRequest, NextApiResponse } from "next";

type Data={
    name:string
}

export default function handler(req: NextApiRequest, res:NextApiResponse){
    res.status(200).json({name: 'John Doe'})
}
