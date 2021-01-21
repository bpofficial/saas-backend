import { Inject } from '@nestjs/common';
import { getClientToken, getCollectionToken, getCurrentTenantToken, getDbToken, getEdgeCollectionToken, getReactiveClientToken } from '../utils';
import { DEFAULT_DATABASE_CONNECTION_NAME } from '@juicycleff/repo-orm/constants';

/**
 * Inject the MongoClient object associated with a connection
 * @param connectionName The unique name associated with the connection
 */
export const InjectClient = (connectionName = DEFAULT_DATABASE_CONNECTION_NAME) =>
    Inject(getClientToken(connectionName));

/**
 * Inject the MongoClient object associated with a connection
 * @param connectionName The unique name associated with the connection
 */
export const InjectReactiveClient = (connectionName = DEFAULT_DATABASE_CONNECTION_NAME) =>
    Inject(getReactiveClientToken(connectionName));

/**
 * Inject the current tenant name associated with a connection
 * @param connectionName The unique name associated with the connection
 */
export const InjectCurrentTenant = (connectionName = DEFAULT_DATABASE_CONNECTION_NAME) =>
    Inject(getCurrentTenantToken(connectionName));

/**
 * Inject the Db object associated with a connection
 * @param connectionName The unique name associated with the connection
 */
export const InjectDb = (connectionName = DEFAULT_DATABASE_CONNECTION_NAME) =>
    Inject(getDbToken(connectionName));

/**
 * Inject the DB Collection object associated with a Db
 * @param collectionName The unique name associated with the collection
 */
export const InjectCollection = (collectionName: string) =>
    Inject(getCollectionToken(collectionName));

/**
 * Inject the Arango Edge Collection object associated with a Db
 * @param collectionName The unique name associated with the collection
 */
export const InjectEdgeCollection = (collectionName: string) =>
    Inject(getEdgeCollectionToken(collectionName));
