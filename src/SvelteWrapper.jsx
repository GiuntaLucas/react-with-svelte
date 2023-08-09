/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useLayoutEffect, useRef } from "react"

export function SvelteWrapper(Component, Context) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const divRef = useRef();
    const componentRef = useRef();
    const contextValue = useContext(Context);
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
      console.log(props)
      if(componentRef.current.$set) {
        componentRef.current.$set(props);
      }
    }, [props])

    useEffect(() => {
      console.log(contextValue)
    }, [contextValue])
    return <div ref={divRef}></div>;
  }
}