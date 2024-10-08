/* tslint:disable */
/* eslint-disable */
/**
 * example
 * The betting API description
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface Tenant
 */
export interface Tenant {
  /**
   *
   * @type {string}
   * @memberof Tenant
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Tenant
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Tenant
   */
  createdAt: string;
  /**
   *
   * @type {string}
   * @memberof Tenant
   */
  updatedAt: string;
  /**
   *
   * @type {string}
   * @memberof Tenant
   */
  slug: string;
}

/**
 * Check if a given object implements the Tenant interface.
 */
export function instanceOfTenant(value: object): value is Tenant {
  if (!("id" in value) || value["id"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
  if (!("updatedAt" in value) || value["updatedAt"] === undefined) return false;
  if (!("slug" in value) || value["slug"] === undefined) return false;
  return true;
}

export function TenantFromJSON(json: any): Tenant {
  return TenantFromJSONTyped(json, false);
}

export function TenantFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Tenant {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"],
    name: json["name"],
    createdAt: json["createdAt"],
    updatedAt: json["updatedAt"],
    slug: json["slug"],
  };
}

export function TenantToJSON(value?: Tenant | null): any {
  if (value == null) {
    return value;
  }
  return {
    id: value["id"],
    name: value["name"],
    createdAt: value["createdAt"],
    updatedAt: value["updatedAt"],
    slug: value["slug"],
  };
}
