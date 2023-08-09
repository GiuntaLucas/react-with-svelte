/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useLayoutEffect, useRef } from "react"

export function SvelteWrapper(Component) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const divRef = useRef();
    const componentRef = useRef();
    useLayoutEffect(() => {
      while(divRef?.current?.firstChild) {
        divRef.current.firstChild.remove();
      }
      componentRef.current = new Component({
        target: divRef.current,
        props
      })
    }, []);
    
    useEffect(() => {
      if(componentRef.current.$set) {
        componentRef.current.$set(props);
      }
    }, [props])

    return <div ref={divRef}></div>;
  }
}