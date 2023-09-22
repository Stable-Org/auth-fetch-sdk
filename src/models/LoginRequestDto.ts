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
 * @interface LoginRequestDto
 */
export interface LoginRequestDto {
    /**
     * The email of the user
     * @type {string}
     * @memberof LoginRequestDto
     */
    email: string;
    /**
     * The password of the user
     * @type {string}
     * @memberof LoginRequestDto
     */
    password: string;
    /**
     * The new password to set for the user (optional)
     * @type {string}
     * @memberof LoginRequestDto
     */
    newPassword?: string;
}

/**
 * Check if a given object implements the LoginRequestDto interface.
 */
export function instanceOfLoginRequestDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function LoginRequestDtoFromJSON(json: any): LoginRequestDto {
    return LoginRequestDtoFromJSONTyped(json, false);
}

export function LoginRequestDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginRequestDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'password': json['password'],
        'newPassword': !exists(json, 'newPassword') ? undefined : json['newPassword'],
    };
}

export function LoginRequestDtoToJSON(value?: LoginRequestDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
        'newPassword': value.newPassword,
    };
}

