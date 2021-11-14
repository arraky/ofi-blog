import * as React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Editor from "./Editor";
import {
  DOM_ELEMENT_IDS,
} from "./constants";
import TurtleResult from "./TurtleResult";
import Result from "./Result";
import Header from "./Header";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/hooks";
import { reaction } from "mobx";
import Script from "../../models/Script";

interface Props {
  slim: boolean;
  children: React.ReactNode;
  title: string;
  resettable: boolean;
  webKey: string;
}

const PyEditor = observer((props: Props) => {
  const store = useStore('documentStore');
  const pyScript = store.find<Script>(props.webKey);

  /**
   * this effect triggers the brython execution
   */
  React.useEffect(() => {
    return reaction(
      () => pyScript.execCounter,
      (counter) => {
        if (counter > 0) {
          pyScript.clearLogMessages();
          if (window && (window as any).umami) {
            (window as any).umami.trackEvent(`${pyScript.isDummy ? 'py' : pyScript.webKey}`, `exec-script-${pyScript.isDummy ? 'temp' : 'persisted'}`);
          }
          (window as any).brython(1, {
            ids: [DOM_ELEMENT_IDS.scriptSource(pyScript.codeId)],
          });
        }
      }
    )
  }, [pyScript]);

  return (
    <React.Fragment>
      <Header
        slim={props.slim}
        title={props.title}
        resettable={props.resettable}
        webKey={props.webKey}
      />
      <Editor webKey={props.webKey} />
      <div className={clsx(styles.result)}>
        <Result webKey={props.webKey}/>
        {store.opendTurtleModalWebKey === pyScript.webKey && (
          <TurtleResult webKey={props.webKey}/>
        )}
      </div>
    </React.Fragment>
  );
});

export default PyEditor;
