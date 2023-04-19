import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

export const useClickOutside = (popup, ref, onClickOutside) => {
  useEffect(() => {
    if (popup) {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          onClickOutside();
        }
      };

      document.addEventListener('mousedown', handleClick);

      return () => {
        document.removeEventListener('mousedown', handleClick);
      };
    }
  }, [ref, onClickOutside]);
};

export const useOutsideClickPopup = (overflow, popup, onCloseOutside) => {
  // const dispatch = useDispatch();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.composedPath().includes(popup.current)) {
        onCloseOutside();
      }
    };

    const overflowCurrent = overflow.current;

    overflowCurrent.addEventListener('click', handleOutsideClick);
    return () => {
      overflowCurrent.removeEventListener('click', handleOutsideClick);
    };
  }, [overflow, onCloseOutside, popup]);
};

// export const useOutsideClickDispatch = (ref, popup, close) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (popup) {
//       const handleOutsideClick = (event) => {
//         if (ref.current && !ref.current.contains(event.target)) {
//           dispatch(close());
//         }
//       };

//       document.body.addEventListener('click', handleOutsideClick);
//       return () => {
//         document.body.removeEventListener('click', handleOutsideClick);
//       };
//     }
//   }, [ref, dispatch, close, popup]);
// };

// export const useOutsideClickState = (ref, popup, close) => {
//   useEffect(() => {
//     if (popup) {
//       const handleOutsideClick = (event) => {
//         if (ref.current && !ref.current.contains(event.target)) {
//           close();
//         }
//       };

//       document.addEventListener('click', handleOutsideClick);
//       return () => {
//         document.removeEventListener('click', handleOutsideClick);
//       };
//     }
//   }, [ref, close, popup]);
// };
