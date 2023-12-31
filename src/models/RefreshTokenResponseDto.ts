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
 * @interface RefreshTokenResponseDto
 */
export interface RefreshTokenResponseDto {
    /**
     * The ID token for the user
     * @type {string}
     * @memberof RefreshTokenResponseDto
     */
    idToken: string;
    /**
     * The access token for the user
     * @type {string}
     * @memberof RefreshTokenResponseDto
     */
    accessToken: string;
}

/**
 * Check if a given object implements the RefreshTokenResponseDto interface.
 */
export function instanceOfRefreshTokenResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "idToken" in value;
    isInstance = isInstance && "accessToken" in value;

    return isInstance;
}

export function RefreshTokenResponseDtoFromJSON(json: any): RefreshTokenResponseDto {
    return RefreshTokenResponseDtoFromJSONTyped(json, false);
}

export function RefreshTokenResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefreshTokenResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'idToken': json['idToken'],
        'accessToken': json['accessToken'],
    };
}

export function RefreshTokenResponseDtoToJSON(value?: RefreshTokenResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'idToken': value.idToken,
        'accessToken': value.accessToken,
    };
}

