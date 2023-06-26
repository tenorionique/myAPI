import { RolesRepository } from '@roles/repositories/RolesRepository'
import { ListRolesUseCase } from './ListRolesUseCase'
import { ListRolesController } from './ListRolesUseCaseController'

const rolesRepository = new RolesRepository()
const listRolesUseCase = new ListRolesUseCase(rolesRepository)
export const listRolesController = new ListRolesController(listRolesUseCase)
