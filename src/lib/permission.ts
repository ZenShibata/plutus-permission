/* eslint-disable @typescript-eslint/naming-convention */
import { BitField } from "./BitField";

export type PermissionResolvable = (keyof typeof Permission["FLAGS"])[] | keyof typeof Permission["FLAGS"];

export class Permission extends BitField<keyof typeof Permission["FLAGS"]> {
    public static ALL: number;
    public static DEFAULT: number;

    public static FLAGS = {
        ADMINISTRATOR: 1 << 1,
        VIEW_ADMIN_CHAT: 1 << 2,
        VIEW_ORDER_DETAIL: 1 << 3,
        VIEW_ORDER_LIST: 1 << 4,
        VIEW_TRANSACTION_LIST: 1 << 5
    };

    /**
    * Checks whether the bitfield has a permission, or any of multiple permissions.
    * @param  permission Permission(s) to check for
    * @param checkAdministrator Whether to allow the Administrator permission to override
    */
    public any(permission: PermissionResolvable, checkAdministrator = true): boolean {
        return (checkAdministrator && super.has(Permission.FLAGS.ADMINISTRATOR)) || super.any(permission);
    }

    /**
    * Checks whether the bitfield has a permission, or multiple permissions.
    * @param permission Permission(s) to check for
    * @param checkAdministrator Whether to allow the Administrator permission to override
    */
    public has(permission: PermissionResolvable, checkAdministrator = true): boolean {
        return (checkAdministrator && super.has(Permission.FLAGS.ADMINISTRATOR)) || super.has(permission);
    }
}
