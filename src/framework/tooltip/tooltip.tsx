/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the tooltip.
 * ================================================
 */
import React, { 
  CSSProperties,
  forwardRef,
  memo,
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
  ReactNode,
  MutableRefObject
} from 'react';
import { withFloat, TComponentTarget } from '@framework/index';
import { mobileMedia } from '@helpers/media-query';
import { TooltipContainer, Arrow } from './tooltip.style';

type ITooltipPopup = {
  color?: string;
  invisible?: boolean;
  width?: number;
  /**
   * If the tooltip can be hovered over.
   */
  hoverable?: boolean;
  title: ReactNode;
  /**
   * Optional style for the container.
   */
  style?: CSSProperties;
  /**
   * Both of these props are here because we use the `withFloat` property of the floating element component.
   * For more information on why they are passed and how they are used, check out the `FloatingElement.sx` component.
   */
  _floatingElementAnchor?: HTMLElement;
  _floatingElementStyle?: CSSProperties;
  /**
   * The children of the tooltip, the actual content.
   */
  children?: ReactNode;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  ref?: MutableRefObject<HTMLElement>;
} & TComponentTarget;

/**
 * This is the actual popup. This uses the `Floating element` approach, to understand it a little bit more,
 * check out the FloatingElement component.
 */
const TooltipPopup = withFloat((props: ITooltipPopup): JSX.Element => {
  const refContainer = useRef(null);
  const [arrowLeftPosition, setArrowLeftPosition] = useState(null);

  useEffect(() => {
    if (props._floatingElementStyle.left) { // We have the position of our container
      // Here we calculate the position of the little arrow below this container
      const anchorLeft = props._floatingElementAnchor.getBoundingClientRect().left;
      const containerLeft = Number(props._floatingElementStyle.left);
      // If the position of the container does not match the position of the anchor (the element we're hovering),
      // then we modify the position of the arrow to follow the anchor.
      const isDiff = Math.abs(containerLeft - anchorLeft) >= 2;
      if (isDiff) {
        setArrowLeftPosition(anchorLeft - containerLeft + 10);
      } else {
        // The positions are aligned, we will center the arrow in the middle of the anchor element.
        const anchorWidth = props._floatingElementAnchor.getBoundingClientRect().width; // The element we're hovering
        const containerWidth = refContainer.current.getBoundingClientRect().width; // This is the title's width, the blue container
        if (anchorWidth > containerWidth) {
          setArrowLeftPosition(20);
        } else {
          const middle = anchorWidth / 2;
          setArrowLeftPosition(middle - 5);
        }
      }
    }
  }, [props._floatingElementStyle]);

  return (
    <>
      <TooltipContainer
        onMouseOver={props.onMouseOver}
        onMouseLeave={props.onMouseLeave}
        ref={refContainer}
        color={props.color}
      >
        {props.title}
      </TooltipContainer>
      <Arrow color={props.color} left={arrowLeftPosition} />
    </>
  );
});

interface ITooltip  {
  children: ReactNode;
  title: ReactNode;
  invisible?: boolean;
  style?: CSSProperties;
  hoverable?: boolean;
}

type TTooltipMutableRefObject = {
  open: () => void
} | null;

/**
 * This is the wrapper of the tooltip, and it servers the purpose of only being a place
 * to hold both the popup of the tooltip and the actual contents as children.
 *
 * This handles the actions when you hover over the children to show the popup, for example.
 */
export const Tooltip = memo(forwardRef((props: ITooltip, ref: MutableRefObject<TTooltipMutableRefObject>) => {
  const refTooltip = useRef(null); // Ref of the actual tooltip popup
  const refDivContents = useRef(null); // Ref of the container of the contents
  const timeout = useRef(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { invisible, title, style, hoverable, children } = props;

  useEffect(() => {
    const isMobile = window.innerWidth <= mobileMedia.size;
    setIsMobile(isMobile);
  }, []);

  /**
   * This should not be here: we should just use a stateful approach. But some components
   * are still using it the old way, so have to make room for it.
   */
  useImperativeHandle(ref, () => ({ open }));

  /**
   * Opens the tooltip.
   */
  const open = () => {
    if (refTooltip.current && !refTooltip.current.isOpen()) {
      refTooltip.current.open(refDivContents.current, 'top');
    }
  }

  /**
   * Closes the tooltip.
   */
  const close = () => {
    if (hoverable) {
      timeout.current = setTimeout(() => {
        if (refTooltip.current) {
          refTooltip.current.close();
        }
      }, 200);
    } else {
      if (refTooltip.current) {
        refTooltip.current.close();
      }
    }
  }

  // extra props that will be passed to the tooltip
  const extraTooltipProps = {
    onMouseLeave: () => close(),
    onMouseOver: () => clearTimeout(timeout.current),
  };

  return (
    <>
      {title && !invisible && (
        // This is the actual popup:
        <TooltipPopup
          {...props}
          {...extraTooltipProps}
          ref={refTooltip}
        />
      )}

      {
        /** 
          Here we make a new container for the children
          just to have a place to append the events: 
         */
      }
      <div
        onMouseLeave={() => !isMobile && close()}
        onMouseOver={() => !isMobile && open()}
        onMouseMove={() => !isMobile && open()}
        onMouseDown={(e) => !isMobile && e.stopPropagation()} // To not close the tooltip when clicking
        ref={refDivContents}
        style={{ ...style, display: 'flex' }}
      >
        {children}
      </div>
    </>
  );
}));

Tooltip.displayName = 'tooltip';