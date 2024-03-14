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
import Ionheadset from "./Ionheadset";
//import { Button } from "@aws-amplify/ui-react";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Button(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "ion:headset": {},
        "Listen Now": {},
        "Frame 39": {},
        Button: {},
      },
      variantValues: { property1: "Default", icon: "True", hover: "False" },
    },
    {
      overrides: {
        "ion:headset": {},
        "Listen Now": {},
        "Frame 39": {},
        Button: {},
      },
      variantValues: { property1: "Default2", icon: "False", hover: "False" },
    },
    {
      overrides: {
        "ion:headset": {},
        "Listen Now": { color: "rgba(28,29,30,1)" },
        "Frame 39": {},
        Button: {
          padding: "18px 0px 18px 0px",
          backgroundColor: "rgba(82,227,15,1)",
        },
      },
      variantValues: { property1: "White", icon: "False", hover: "False" },
    },
    {
      overrides: {
        "ion:headset": {},
        "Listen Now": {},
        "Frame 39": {},
        Button: {
          padding: "18px 0px 18px 0px",
          backgroundColor: "rgba(236,227,7,1)",
        },
      },
      variantValues: { property1: "Hover_v2", icon: "False", hover: "True" },
    },
    {
      overrides: {
        "ion:headset": {},
        "Listen Now": { color: "rgba(28,29,30,1)" },
        "Frame 39": {},
        Button: {
          padding: "18px 0px 18px 0px",
          backgroundColor: "rgba(236,227,7,1)",
        },
      },
      variantValues: { property1: "Hover_V1", icon: "True", hover: "True" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="203px"
      height="48px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(82,227,15,1)"
      padding="17px 0px 17px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Button")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 39")}
      >
        <Ionheadset
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ion:headset")}
        ></Ionheadset>
        <Text
          fontFamily="Bebas Neue"
          fontSize="20px"
          fontWeight="400"
          color="rgba(82,227,15,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Listen Now"
          {...getOverrideProps(overrides, "Listen Now")}
        ></Text>
      </Flex>
    </Flex>
  );
}
