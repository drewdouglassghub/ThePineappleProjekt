/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import Button  from "./Button";
export default function Songcard(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Normal Pic": {},
        "Song Title": {},
        Button: {},
        Container2: {},
        Description: {},
        Container: {},
        Songcard: {},
      },
      variantValues: { state: "Default" },
    },
    {
      overrides: {
        "Normal Pic": {
          width: "488px",
          height: "694px",
          top: "-6px",
          left: "0px",
        },
        "Song Title": { fontFamily: "Bebas Neue", display: "none" },
        Button: { display: "flex" },
        Container2: { top: "calc(50% - 19px - 0px)" },
        Description: {
          fontSize: "42px",
          color: "rgba(245,245,245,1)",
          lineHeight: "37.79999923706055px",
          letterSpacing: "-1.11px",
          width: "unset",
          alignSelf: "stretch",
          children: "River Song",
        },
        Container: { width: "488px", height: "unset", top: "237px" },
        Songcard: {},
      },
      variantValues: { state: "Hovered" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="488px"
      height="694px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Songcard")}
      {...rest}
    >
      <Image
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="40px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Normal Pic")}
      ></Image>
      <Flex
        gap="61px"
        direction="column"
        width="488px"
        height="38px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="83.29%"
        bottom="11.24%"
        right="0px"
        padding="0px 20px 0px 20px"
        display="flex"
        {...getOverrideProps(overrides, "Container2")}
      >
        <Text
          fontFamily="Encode Sans Expanded"
          fontSize="42px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="37.79999923706055px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-1.11px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="River Song"
          {...getOverrideProps(overrides, "Song Title")}
        ></Text>
        <ButtonCustom
          display="none"
          gap="10px"
          direction="column"
          width="203px"
          height="48px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          property1="Hover_V1"
          icon="True"
          hover="True"
          {...getOverrideProps(overrides, "Button")}
        ></ButtonCustom>
      </Flex>
      <Flex
        gap="61px"
        direction="column"
        width="244px"
        height="31px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Container")}
      >
        <Text
          fontFamily="Encode Sans Expanded"
          fontSize="32px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="35.519996643066406px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.81px"
          width="398px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="description"
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </Flex>
    </View>
  );
}
