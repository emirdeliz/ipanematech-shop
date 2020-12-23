/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the floating-element.
 * This element is a container responsible for positioning itself 
 * next to the target element. An example of use is in the creation 
 * of a tooltip component
 * ================================================
 */
import React, {
  cloneElement,
  CSSProperties,
  forwardRef,
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  Ref,
  ReactElement,
  ReactPortal,
  ReactPropTypes,
  ForwardRefExoticComponent,
  RefAttributes,
  FunctionComponent
} from 'react';
import ReactDOM from 'react-dom';
import {
  FloatingElementContainer as Container,
} from './floating-element.style';

// Optional sides for it to appear.
type TargetSide = 'top' | 'bottom' | 'left' | 'right';

interface IFloatingElement {
  side?: TargetSide;
  anchor: HTMLElement;
  opened?: boolean;
  children?: ReactElement;
}

/**
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * Renders an absolutely positioned div that does not allow children to be out of screen bounds.
 * This component should not be used directly, instead, it should be used with `withFloat`.
 */
const FloatingElement = (props: IFloatingElement): ReactPortal => {
  const [style, setStyle] = useState<CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null); // The container of this element

  useEffect(() => {
    const { anchor, opened, side } = props;
    if (!containerRef.current || !anchor || !opened) {
      return;
    }

    const anchorBounds = anchor.getBoundingClientRect(); // The base element
    const containerBounds = containerRef.current.getBoundingClientRect(); // The dropdown bounds
    const tempStyle = getIdealPosition(side, anchorBounds, containerBounds);

    setStyle(tempStyle);
  }, [props.opened]);

  // if it's opened render the component directly into the body:
  return props.opened && (
    ReactDOM.createPortal(
      <Container
        onMouseDown={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        ref={containerRef}
        style={style}
      >
        {cloneElement(props.children, { _floatingElementStyle: style })}
      </Container>,
      document.body,
    )
  );
}

/**
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * Calculates the ideal position of the container based on the `side` chosen and the size of
 * the children component. The new `style` of the component will be returned.
 */
const getIdealPosition = (side: TargetSide, anchorBounds: ClientRect, containerBounds: ClientRect) => {
  const { width, height } = containerBounds;
  const style: CSSProperties = {};

  if (side === 'right') {
    // Right - The component will start at the end of the anchor, in the same Y-axis.
    style.left = anchorBounds.right;
    style.top = anchorBounds.top;
  } else if (side === 'left') {
    // Left - The component will end at the start of the anchor, in the same Y-axis.
    style.left = anchorBounds.left - width;
    style.top = anchorBounds.top;
  } else if (side === 'top') {
    // Top - The component will start at the end of the anchor, in the same X-axis.
    style.left = anchorBounds.left;
    style.top = anchorBounds.top - height - 10;
  } else {
    // Bottom - The component will end at the start of the anchor, in the same X-axis.
    style.left = anchorBounds.left;
    style.top = anchorBounds.bottom;
  }

  if (style.left + width >= window.innerWidth - 10) { // Tresspassed right side
    style.left = anchorBounds.right - width - anchorBounds.width;
    style.left += (style.left < anchorBounds.left ? anchorBounds.width : 0);
  }
  if (style.top + height >= window.innerHeight - 10) { // Trespassed bottom side
    style.top = anchorBounds.bottom - height - anchorBounds.height;
    if (style.top <= 0) { // sometimes the element would get out of the screen
      style.top = 10; // this fixes it, puts it back down
    }
  }
  return style;
}

type TReffedComponent = {
  close: () => void,
  open: () => void;
  isOpen: () => boolean,
}

export type TComponentTarget = {
  _floatingElementAnchor: HTMLElement,
  close: () => void,
};

/**
 * @created on Mon Dec 21 2020
 * @author Emir Marques - <emirdeliz@gmail.com> 
 * Returns a wrapped 'floating' element of the parameter component. This creates the possibility
 * for you to do a `.open()` in this component and it will render the component on the desired side.
 *
 * The main idea is to replace elements that need to be validated to be in the screen bounds, like
 * dropdowns or tooltips.
 */
const withFloat = (ComponentTarget: FunctionComponent<TComponentTarget>): ForwardRefExoticComponent<ReactPropTypes & RefAttributes<TReffedComponent>> => {
  const ReffedComponent = (props: ReactPropTypes, ref: Ref<TReffedComponent>) => {
    const [anchor, setAnchor] = useState<HTMLElement>(null);
    const [opened, setOpened] = useState<boolean>(false);
    const [side, setSide] = useState<TargetSide>('bottom');

    useEffect(() => {
      const close = () => {
        if (opened) {
          setOpened(false);
        }
      }
      window.addEventListener('mousedown', close);
      window.addEventListener('mousewheel', close);
      window.addEventListener('resize', close);
      window.addEventListener('touchend', close); // handles movement on mobile to close the popup
      window.addEventListener('touchmove', close); // handles movement on mobile to close the popup
      return () => {
        window.removeEventListener('mousedown', close);
        window.removeEventListener('mousewheel', close);
        window.removeEventListener('resize', close);
        window.removeEventListener('touchmove', close);
        window.removeEventListener('touchend', close);
      };
    });

    // exports some functions
    useImperativeHandle(ref, () => ({
      close: () => setOpened(false),
      isOpen: () => opened,
      open: (a?: HTMLElement, s?: TargetSide) => {
        setAnchor(a);
        setSide(s);
        setOpened(true);
      },
    }));

    return (
      <FloatingElement
        anchor={anchor}
        opened={opened}
        side={side}
      >
        <ComponentTarget
          _floatingElementAnchor={anchor}
          close={() => setOpened(false)}
          {...props}
        />
      </FloatingElement>
    );
  }
  return forwardRef(ReffedComponent);
}

export {
  FloatingElement,
  withFloat,
};
