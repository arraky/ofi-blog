import * as React from 'react';
import clsx from 'clsx';
// import {default as editorStyles} from "./styles.module.scss";
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import {
    faPlay,
    faUndo,
    faFileSignature,
    faFileCode,
    faCheckCircle,
    faSync,
} from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';
import { action, reaction } from 'mobx';
import { useStore } from '../../stores/hooks';
import Script from '../../models/Script';

interface PlayProps {
    webKey: string;
}
const PlayButton = observer((props: PlayProps) => {
    const store = useStore('documentStore');
    const pyScript = store.find<Script>(props.webKey);
    return (
        <button
            onClick={() => pyScript.execScript(document)}
            className={clsx(styles.playButton, styles.headerButton)}
            title="Code Ausführen"
        >
            <FontAwesomeIcon icon={pyScript.executing ? faPython : faPlay} spin={pyScript.executing} />
        </button>
    );
});

interface Props {
    slim: boolean;
    title: string;
    resettable: boolean;
    webKey: string;
}

const Header = observer(({ slim, title, resettable, webKey }: Props) => {
    const [showSavedNotification, setShowSavedNotification] = React.useState(false);
    const store = useStore('documentStore');
    const pyScript = store.find<Script>(webKey);
    if (!pyScript) {
        return null;
    }

    const onReset = () => {
        if (!resettable) {
            return;
        }
        if (pyScript.readonly) {
            pyScript.setData({ code: pyScript.pristine.code });
            return;
        }
        const shouldReset = window.confirm('Änderungen verwerfen? (Ihre Version geht verloren!)');
        if (shouldReset) {
            pyScript.setData({ code: pyScript.rawScript });
        }
    };

    React.useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const disposer = reaction(
            () => pyScript.saveService.state,
            (current, last) => {
                if (last === 'save' && current === 'done') {
                    setShowSavedNotification(true);
                    timeoutId = setTimeout(() => {
                        setShowSavedNotification(false);
                        timeoutId = undefined;
                    }, 1500);
                }
            }
        );
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            disposer();
        };
    }, [pyScript]);

    return (
        <div className={clsx(styles.brythonCodeBlockHeader, styles.brythonCodeBlockHeader, styles.controls)}>
            {!slim && (
                <React.Fragment>
                    <div className={styles.title}>{title}</div>
                    {!pyScript.loaded && (
                        <span
                            className="badge badge--warning"
                            title="Warte auf die Antwort des Servers. Seite neu laden."
                        >
                            Laden
                        </span>
                    )}
                    {pyScript.saveService.isOffline && (
                        <span
                            className={clsx('badge', 'badge--danger', styles.badge)}
                            title="Netzwerkverbindung überprüfen!"
                        >
                            ⚠️ Offline
                        </span>
                    )}
                    {<div className={styles.spacer}></div>}
                    <span style={{ minWidth: '1em' }}>
                        {pyScript.saveService.state === 'save' && (
                            <FontAwesomeIcon icon={faSync} style={{ color: '#3578e5' }} spin />
                        )}
                        {showSavedNotification && (
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                style={{ color: 'var(--ifm-color-success)' }}
                            />
                        )}
                    </span>
                    {pyScript.hasEdits && !pyScript.showRaw && resettable && (
                        <button
                            onClick={onReset}
                            className={styles.headerButton}
                            title="Änderungen Verwerfen"
                        >
                            <FontAwesomeIcon icon={faUndo} />
                        </button>
                    )}
                    {pyScript.hasEdits && (
                        <button
                            className={clsx(
                                styles.showRawButton,
                                styles.headerButton,
                                pyScript.showRaw ? styles.showRawButtonDisabled : undefined
                            )}
                            onClick={action(() => (pyScript.showRaw = !pyScript.showRaw))}
                            title={pyScript.showRaw ? 'Mein Code Anzeigen' : 'Original Anzeigen'}
                        >
                            {pyScript.showRaw ? (
                                <FontAwesomeIcon icon={faFileCode} />
                            ) : (
                                <FontAwesomeIcon icon={faFileSignature} />
                            )}
                        </button>
                    )}
                </React.Fragment>
            )}
            <PlayButton webKey={webKey} />
        </div>
    );
});

export default Header;
export { PlayButton };
