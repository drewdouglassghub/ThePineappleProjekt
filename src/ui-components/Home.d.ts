/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { NavlinkProps } from "./Navlink";
import { AnimatedIconProps } from "./AnimatedIcon";
import { IcoutlinetiktokProps } from "./Icoutlinetiktok";
import { IonlogoyoutubeProps } from "./Ionlogoyoutube";
import { AntdesigntwittercirclefilledProps } from "./Antdesigntwittercirclefilled";
import { RiinstagramlineProps } from "./Riinstagramline";
import { UilfacebookProps } from "./Uilfacebook";
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
export declare type HomeOverridesProps = {
    Home?: PrimitiveOverrideProps<ViewProps>;
    "PineappleProject 1"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 38"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 37"?: PrimitiveOverrideProps<FlexProps>;
    "Nav-link63759"?: NavlinkProps;
    "Nav-link63760"?: NavlinkProps;
    "Nav-link63761"?: NavlinkProps;
    "Nav-link63762"?: NavlinkProps;
    "Nav-link63763"?: NavlinkProps;
    "Acoustic Rock duo"?: PrimitiveOverrideProps<TextProps>;
    "Frame 45"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "Celebrating Pineapples"?: PrimitiveOverrideProps<TextProps>;
    The?: PrimitiveOverrideProps<TextProps>;
    Pineapple?: PrimitiveOverrideProps<TextProps>;
    Projekt?: PrimitiveOverrideProps<TextProps>;
    "Frame 44"?: PrimitiveOverrideProps<FlexProps>;
    "Animated-Icon"?: AnimatedIconProps;
    "ic:outline-tiktok"?: IcoutlinetiktokProps;
    "ion:logo-youtube"?: IonlogoyoutubeProps;
    "ant-design:twitter-circle-filled"?: AntdesigntwittercirclefilledProps;
    "ri:instagram-line"?: RiinstagramlineProps;
    "uil:facebook"?: UilfacebookProps;
    "Frame 49"?: PrimitiveOverrideProps<FlexProps>;
    Button83782?: ButtonProps;
    Button83794?: ButtonProps;
} & EscapeHatchProps;
export declare type HomeProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HomeOverridesProps | undefined | null;
}>;
export default function Home(props: HomeProps): React.ReactElement;
