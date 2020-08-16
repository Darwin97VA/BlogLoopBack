import {DefaultCrudRepository} from '@loopback/repository';
import {Blog, BlogRelations} from '../models';
import {MongoblogDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BlogRepository extends DefaultCrudRepository<
  Blog,
  typeof Blog.prototype._id,
  BlogRelations
> {
  constructor(
    @inject('datasources.mongoblog') dataSource: MongoblogDataSource,
  ) {
    super(Blog, dataSource);
  }
}
