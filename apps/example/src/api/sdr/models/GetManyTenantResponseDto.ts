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
import type { Tenant } from "./Tenant";
import { TenantFromJSON, TenantFromJSONTyped, TenantToJSON } from "./Tenant";

/**
 *
 * @export
 * @interface GetManyTenantResponseDto
 */
export interface GetManyTenantResponseDto {
  /**
   *
   * @type {Array<Tenant>}
   * @memberof GetManyTenantResponseDto
   */
  data: Array<Tenant>;
  /**
   *
   * @type {number}
   * @memberof GetManyTenantResponseDto
   */
  count: number;
  /**
   *
   * @type {number}
   * @memberof GetManyTenantResponseDto
   */
  total: number;
  /**
   *
   * @type {number}
   * @memberof GetManyTenantResponseDto
   */
  page: number;
  /**
   *
   * @type {number}
   * @memberof GetManyTenantResponseDto
   */
  pageCount: number;
}

/**
 * Check if a given object implements the GetManyTenantResponseDto interface.
 */
export function instanceOfGetManyTenantResponseDto(
  value: object
): value is GetManyTenantResponseDto {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("count" in value) || value["count"] === undefined) return false;
  if (!("total" in value) || value["total"] === undefined) return false;
  if (!("page" in value) || value["page"] === undefined) return false;
  if (!("pageCount" in value) || value["pageCount"] === undefined) return false;
  return true;
}

export function GetManyTenantResponseDtoFromJSON(
  json: any
): GetManyTenantResponseDto {
  return GetManyTenantResponseDtoFromJSONTyped(json, false);
}

export function GetManyTenantResponseDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GetManyTenantResponseDto {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(TenantFromJSON),
    count: json["count"],
    total: json["total"],
    page: json["page"],
    pageCount: json["pageCount"],
  };
}

export function GetManyTenantResponseDtoToJSON(
  value?: GetManyTenantResponseDto | null
): any {
  if (value == null) {
    return value;
  }
  return {
    data: (value["data"] as Array<any>).map(TenantToJSON),
    count: value["count"],
    total: value["total"],
    page: value["page"],
    pageCount: value["pageCount"],
  };
}
