import * as React from 'react';

interface Props {
    listItem: string
}

export default class ListItem extends React.Component<Props, {}> {
    render() {
        const { listItem } = this.props;
        console.log("listItem => ", listItem);
        return(
            <li>{listItem}</li>
        );
    }
}
