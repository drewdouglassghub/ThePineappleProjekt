/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { NavlinkProps } from "./Navlink";
import { SongcardProps } from "./Songcard";
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
export declare type MusicOverridesProps = {
    Music?: PrimitiveOverrideProps<ViewProps>;
    "Frame 51"?: PrimitiveOverrideProps<FlexProps>;
    "Acoustic Rock duo"?: PrimitiveOverrideProps<TextProps>;
    "Frame 37"?: PrimitiveOverrideProps<FlexProps>;
    "Nav-link2106319"?: NavlinkProps;
    "Nav-link2106320"?: NavlinkProps;
    "Nav-link2106321"?: NavlinkProps;
    "Nav-link2106322"?: NavlinkProps;
    "Nav-link2106323"?: NavlinkProps;
    "Song-card"?: SongcardProps;
    "TPP_googly 1"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 111346"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 12122479"?: PrimitiveOverrideProps<FlexProps>;
    The?: PrimitiveOverrideProps<TextProps>;
    Pineapple?: PrimitiveOverrideProps<TextProps>;
    Projekt?: PrimitiveOverrideProps<TextProps>;
    Juicy?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MusicProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MusicOverridesProps | undefined | null;
}>;
export default function Music(props: MusicProps): React.ReactElement;
