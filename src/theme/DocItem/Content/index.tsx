import React from 'react';
import Content from '@theme-original/DocItem/Content';
// @ts-ignore
import type ContentType from '@theme/DocItem/Content';
import type { WrapperProps } from '@docusaurus/types';
import { useComments, useStore } from '@site/src/stores/hooks';
import useFrontMatter from '@theme/useFrontMatter';
import { observer } from 'mobx-react-lite';

type Props = WrapperProps<typeof ContentType>;

const ContentWrapper = observer((props: Props): JSX.Element => {
    // const store = useStore('commentStore');
    const { sidebar_custom_props } = useFrontMatter();
    useComments(sidebar_custom_props.id);

    return (
        <>
            <Content {...props} />
        </>
    );
});

export default ContentWrapper;