/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ButtonProps } from "./Button";
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
export declare type SongcardOverridesProps = {
    Songcard?: PrimitiveOverrideProps<ViewProps>;
    "Normal Pic"?: PrimitiveOverrideProps<ImageProps>;
    Container2?: PrimitiveOverrideProps<FlexProps>;
    "Song Title"?: PrimitiveOverrideProps<TextProps>;
    Button?: ButtonProps;
    Container?: PrimitiveOverrideProps<FlexProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SongcardProps = React.PropsWithChildren<Partial<ViewProps> & {
    state?: "Default" | "Hovered";
} & {
    overrides?: SongcardOverridesProps | undefined | null;
}>;
export default function Songcard(props: SongcardProps): React.ReactElement;
