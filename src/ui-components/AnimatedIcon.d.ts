/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MdispotifyProps } from "./Mdispotify";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnimatedIconOverridesProps = {
    AnimatedIcon?: PrimitiveOverrideProps<ViewProps>;
    "mdi:spotify"?: MdispotifyProps;
} & EscapeHatchProps;
export declare type AnimatedIconProps = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "Default" | "Hover";
} & {
    overrides?: AnimatedIconOverridesProps | undefined | null;
}>;
export default function AnimatedIcon(props: AnimatedIconProps): React.ReactElement;
