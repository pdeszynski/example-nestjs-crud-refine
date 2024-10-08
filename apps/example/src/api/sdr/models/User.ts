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
 * @interface User
 */
export interface User {
  /**
   *
   * @type {string}
   * @memberof User
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  tenantId: string;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): value is User {
  if (!("id" in value) || value["id"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("email" in value) || value["email"] === undefined) return false;
  if (!("tenantId" in value) || value["tenantId"] === undefined) return false;
  return true;
}

export function UserFromJSON(json: any): User {
  return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): User {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"],
    name: json["name"],
    email: json["email"],
    tenantId: json["tenantId"],
  };
}

export function UserToJSON(value?: User | null): any {
  if (value == null) {
    return value;
  }
  return {
    id: value["id"],
    name: value["name"],
    email: value["email"],
    tenantId: value["tenantId"],
  };
}
