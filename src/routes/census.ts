import { Request, Response } from 'express'
import express = require('express')
import { connection } from '../db/connection'
import { FullResult } from './census.model'
const router = express.Router()

router.get('/', (req: Request, res: Response): void => {
    const queryParam: { field: string } = req.query
    connection.query(
        `SELECT age, \`${queryParam.field}\` FROM census_learn_sql`,
        (err: Error, result: FullResult[]): void => {
            if (err) res.send(err)
            res.send(result)
        }
    )
})
export default router
