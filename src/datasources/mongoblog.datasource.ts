import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongoblog',
  connector: 'mongodb',
  url: 'mongodb+srv://darwinva:x0locaso0x@dbva-dtnke.mongodb.net/blogproject?retryWrites=true&w=majority',
  host: 'dbva-dtnke.mongodb.net	',
  port: 0,
  user: 'darwinva',
  password: 'x0locaso0x',
  database: 'blogproject',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoblogDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoblog';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoblog', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
