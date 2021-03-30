import { EntityRepository, Repository } from 'typeorm';
import Users from '../../models/User'

@EntityRepository(Users)
export default class UserRepository extends Repository<Users>{ }

