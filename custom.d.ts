declare module "*.svg" {
  import { FunctionComponent } from 'react';
  const content: SVGElement & FunctionComponent;
  export default content;
}