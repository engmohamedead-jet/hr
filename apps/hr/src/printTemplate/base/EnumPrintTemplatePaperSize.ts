/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { registerEnumType } from "@nestjs/graphql";

export enum EnumPrintTemplatePaperSize {
  A1 = "A1",
  A2 = "A2",
  A3 = "A3",
  A4 = "A4",
  A5 = "A5",
  A6 = "A6",
  B1 = "B1",
  B2 = "B2",
  B3 = "B3",
  B5 = "B5",
  B6 = "B6",
}

registerEnumType(EnumPrintTemplatePaperSize, {
  name: "EnumPrintTemplatePaperSize",
});
