/**
 * ManageSpace Note API
 * ManageSpace Note API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { BadRequestError400ResponseError } from './badRequestError400ResponseError';

export class BadRequestError400Response {
    'data': Array<string>;
    'success': boolean;
    'error': BadRequestError400ResponseError;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<string>"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "BadRequestError400ResponseError"
        }    ];

    static getAttributeTypeMap() {
        return BadRequestError400Response.attributeTypeMap;
    }
}

