/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file helpers responsible for defining the animations.
 * ================================================
 */
import { keyframes } from "styled-components";

/**
 * Returns keyframes for an opacity animation. By default this returns an opacity
 * animation that goes from invisible to visible, but you can reverse it by passing
 * a true in the parameter (it will range from visible to invisible).
 * Usage: `animation: ${opacity()} .3s;`
 */
const opacity = (reverse?: boolean) => {
  return keyframes`
    from { opacity: ${reverse ? 1 : 0} }
    to { opacity: ${reverse ? 0 : 1} }
  `;
}

export {
  opacity,
};
