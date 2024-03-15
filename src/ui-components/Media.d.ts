/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { NavlinkProps } from "./Navlink";
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
export declare type MediaOverridesProps = {
    Media?: PrimitiveOverrideProps<ViewProps>;
    Group84116?: PrimitiveOverrideProps<ViewProps>;
    Group84117?: PrimitiveOverrideProps<ViewProps>;
    Vector84118?: PrimitiveOverrideProps<IconProps>;
    Group84119?: PrimitiveOverrideProps<ViewProps>;
    Vector84120?: PrimitiveOverrideProps<IconProps>;
    Group84121?: PrimitiveOverrideProps<ViewProps>;
    Vector84122?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    Group84147?: PrimitiveOverrideProps<ViewProps>;
    Vector84148?: PrimitiveOverrideProps<IconProps>;
    Vector84149?: PrimitiveOverrideProps<IconProps>;
    Group84150?: PrimitiveOverrideProps<ViewProps>;
    Group84151?: PrimitiveOverrideProps<ViewProps>;
    Group84152?: PrimitiveOverrideProps<ViewProps>;
    Vector84153?: PrimitiveOverrideProps<IconProps>;
    Group84154?: PrimitiveOverrideProps<ViewProps>;
    Group84155?: PrimitiveOverrideProps<ViewProps>;
    Vector84156?: PrimitiveOverrideProps<IconProps>;
    Group84157?: PrimitiveOverrideProps<ViewProps>;
    Group84158?: PrimitiveOverrideProps<ViewProps>;
    Vector84159?: PrimitiveOverrideProps<IconProps>;
    Vector84160?: PrimitiveOverrideProps<IconProps>;
    Group84161?: PrimitiveOverrideProps<ViewProps>;
    Vector84162?: PrimitiveOverrideProps<IconProps>;
    Vector84163?: PrimitiveOverrideProps<IconProps>;
    Group84164?: PrimitiveOverrideProps<ViewProps>;
    Vector84165?: PrimitiveOverrideProps<IconProps>;
    Vector84166?: PrimitiveOverrideProps<IconProps>;
    Group84167?: PrimitiveOverrideProps<ViewProps>;
    Vector84168?: PrimitiveOverrideProps<IconProps>;
    Vector84169?: PrimitiveOverrideProps<IconProps>;
    "Frame 51"?: PrimitiveOverrideProps<FlexProps>;
    "Acoustic Rock duo"?: PrimitiveOverrideProps<TextProps>;
    "Frame 37"?: PrimitiveOverrideProps<FlexProps>;
    "Nav-link2106301"?: NavlinkProps;
    "Nav-link2106302"?: NavlinkProps;
    "Nav-link2106303"?: NavlinkProps;
    "Nav-link2106304"?: NavlinkProps;
    "Nav-link2106305"?: NavlinkProps;
    "TPP_E_Transparent 1"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    The?: PrimitiveOverrideProps<TextProps>;
    PROJEKT?: PrimitiveOverrideProps<TextProps>;
    "P i n e a p p l e"?: PrimitiveOverrideProps<TextProps>;
    Button11383?: ButtonProps;
    Button11384?: ButtonProps;
} & EscapeHatchProps;
export declare type MediaProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MediaOverridesProps | undefined | null;
}>;
export default function Media(props: MediaProps): React.ReactElement;
