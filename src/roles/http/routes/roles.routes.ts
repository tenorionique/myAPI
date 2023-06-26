import { Router } from 'express'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { createRolesController } from '@roles/useCases/createRole'

const rolesRouter = Router()
const rolesRepository = new RolesRepository() //provisório

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response)
})

rolesRouter.get('/', (request, response) => {
  const roles = rolesRepository.findAll()

  return response.json(roles)
})

export { rolesRouter }
