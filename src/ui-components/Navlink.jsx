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
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Navlink(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Home: {}, "Rectangle 1": {}, Navlink: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        Home: { color: "rgba(236,227,7,1)" },
        "Rectangle 1": {},
        Navlink: {},
      },
      variantValues: { property1: "hover" },
    },
    {
      overrides: {
        Home: {},
        "Rectangle 1": { height: "2px", backgroundColor: "rgba(236,227,7,1)" },
        Navlink: {},
      },
      variantValues: { property1: "Active" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="4px"
      direction="column"
      width="82px"
      height="38px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Navlink")}
      {...rest}
    >
      <Text
        fontFamily="Bebas Neue"
        fontSize="20px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="18px"
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
        children="Home"
        {...getOverrideProps(overrides, "Home")}
      ></Text>
      <View
        width="40px"
        height="5px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(242,243,237,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
    </Flex>
  );
}
