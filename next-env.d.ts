/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />
declare module "*.graphqls" {
  import { DocumentNode } from "graphql";
  export default typeof DocumentNode;
}
