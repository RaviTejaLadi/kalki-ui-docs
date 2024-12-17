import { useEffect, useRef } from 'react';

/**
 * Custom hook to create and manage a portal element in the DOM.
 *
 * @param {string} id - The id of the portal element.
 * @returns {HTMLDivElement} - The root element for the portal.
 *
 * This hook creates a new div element with the specified id and appends it to the document body if it doesn't already exist.
 * It also ensures that the element is cleaned up when the component using the hook is unmounted.
 *
 * The hook performs the following steps:
 * 1. Checks if an element with the given id already exists in the DOM.
 * 2. If it doesn't exist, it creates a new div element with the specified id and appends it to the document body.
 * 3. Appends the root element reference to the parent element.
 * 4. Cleans up the created elements when the component is unmounted.
 */
const usePortal = (id: string) => {
  const rootElemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);
    const parentElem = (existingParent as HTMLDivElement) || createRootElem(id);

    if (!existingParent) {
      addRootElem(parentElem);
    }

    if (rootElemRef.current) {
      parentElem.appendChild(rootElemRef.current);
    }

    return () => {
      if (rootElemRef.current) {
        rootElemRef.current.remove();
      }
      if (!existingParent && parentElem.childNodes.length === 0) {
        parentElem.remove();
      }
    };
  }, [id]);

  const createRootElem = (id: string): HTMLDivElement => {
    const rootContainer = document.createElement('div');
    rootContainer.setAttribute('id', id);
    return rootContainer;
  };

  const addRootElem = (rootElem: HTMLDivElement) => {
    document.body.insertBefore(rootElem, document.body.lastElementChild?.nextElementSibling || null);
  };

  const getRootElem = (): HTMLDivElement => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  };

  return getRootElem();
};

export default usePortal;
