import {DefaultCrudRepository} from '@loopback/repository';
import {Blogtag, BlogtagRelations} from '../models';
import {MongoblogDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BlogtagRepository extends DefaultCrudRepository<
  Blogtag,
  typeof Blogtag.prototype._id,
  BlogtagRelations
> {
  constructor(
    @inject('datasources.mongoblog') dataSource: MongoblogDataSource,
  ) {
    super(Blogtag, dataSource);
  }
}
