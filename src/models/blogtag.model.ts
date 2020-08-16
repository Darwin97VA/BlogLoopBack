import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Blogtag extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Blogtag>) {
    super(data);
  }
}

export interface BlogtagRelations {
  // describe navigational properties here
}

export type BlogtagWithRelations = Blogtag & BlogtagRelations;
