import { Router } from 'express'
import controller from '../controllers/empresa.js'

const router = Router()

/**
 * @swagger
 * /empresa:
 *   get:
 *     summary: Retorna todas as empresas cadastradas na aplicação
 *     responses:
 *       200:
 *         description: Lista de empresas
 *         content:
 *           application/json:
 *             schema:
 *               id: String
 *               nome: String
 *               oportunidade: Oportunidade[]
 *                  */
router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

export default router