/* tslint:disable */
/* eslint-disable */
/**
 * Stable - Auth Service
 * An authentication service API for Stable
 *
 * The version of the OpenAPI document: 0.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UnauthorizedResponseDto
 */
export interface UnauthorizedResponseDto {
    /**
     * HTTP status code of the error
     * @type {number}
     * @memberof UnauthorizedResponseDto
     */
    statusCode: number;
    /**
     * Short description of the error
     * @type {string}
     * @memberof UnauthorizedResponseDto
     */
    message: string;
    /**
     * Error type
     * @type {string}
     * @memberof UnauthorizedResponseDto
     */
    error: string;
}

/**
 * Check if a given object implements the UnauthorizedResponseDto interface.
 */
export function instanceOfUnauthorizedResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "statusCode" in value;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "error" in value;

    return isInstance;
}

export function UnauthorizedResponseDtoFromJSON(json: any): UnauthorizedResponseDto {
    return UnauthorizedResponseDtoFromJSONTyped(json, false);
}

export function UnauthorizedResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnauthorizedResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': json['statusCode'],
        'message': json['message'],
        'error': json['error'],
    };
}

export function UnauthorizedResponseDtoToJSON(value?: UnauthorizedResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statusCode': value.statusCode,
        'message': value.message,
        'error': value.error,
    };
}

