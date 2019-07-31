import { Request, Response } from 'express'
import express = require('express')
const router = express.Router()
router.get('/', (req: Request, res: Response): void => {
    res.send('respond with a resource')
})
export default router
