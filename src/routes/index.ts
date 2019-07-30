import { Router } from 'express'
// *added* import for weather route
import Users from './users'
const router = Router()
// *change here to address routes*
router.use('/users', Users)
export default router
