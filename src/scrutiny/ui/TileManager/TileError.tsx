import { PropsWithChildren } from 'react';

export default function TileError(props: PropsWithChildren) {
    const { children } = props;
    return <span style={{ color: 'red' }}>{children}</span>;
}
