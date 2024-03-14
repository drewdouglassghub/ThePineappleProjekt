/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IonheadsetProps } from "./Ionheadset";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ButtonOverridesProps = {
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Frame 39"?: PrimitiveOverrideProps<FlexProps>;
    "ion:headset"?: IonheadsetProps;
    "Listen Now"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    hover?: "False" | "True";
    icon?: "False" | "True";
    property1?: "Default" | "Default2" | "Hover_V1" | "Hover_v2" | "White";
} & {
    overrides?: ButtonOverridesProps | undefined | null;
}>;
export default function Button(props: ButtonProps): React.ReactElement;
