import { EntityRepository, Repository } from 'typeorm';
import Navers from '../../models/Navers'

@EntityRepository(Navers)
export default class NaversRepository extends Repository<Navers>{ }