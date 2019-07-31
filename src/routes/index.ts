import { Router } from 'express'
// *added* import for weather route
import Census from './census'
const router = Router()
// *change here to address routes*
router.use('/census', Census)
export default router
