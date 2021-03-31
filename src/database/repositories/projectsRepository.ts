import { EntityRepository, Repository } from 'typeorm';
import Projects from '../../models/Projects'

@EntityRepository(Projects)
export default class ProjectsRepository extends Repository<Projects>{ }