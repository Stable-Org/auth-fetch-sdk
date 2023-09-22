/* tslint:disable */
/* eslint-disable */
/**
 * Stable - Auth Service
 * An authentication service API for Stable
 *
 * The version of the OpenAPI document: 0.0.7
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
 * @interface AcceptedResponseDto
 */
export interface AcceptedResponseDto {
    /**
     * An informational message
     * @type {string}
     * @memberof AcceptedResponseDto
     */
    message: string;
}

/**
 * Check if a given object implements the AcceptedResponseDto interface.
 */
export function instanceOfAcceptedResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function AcceptedResponseDtoFromJSON(json: any): AcceptedResponseDto {
    return AcceptedResponseDtoFromJSONTyped(json, false);
}

export function AcceptedResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AcceptedResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function AcceptedResponseDtoToJSON(value?: AcceptedResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
    };
}

