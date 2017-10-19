import * as React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

interface Props {
    techs: string[]
}

export default class Greet extends React.Component<Props, {}> {
    render() {
        const techs = this.props.techs.map((item) => {
            return <ListGroupItem color="info">{item}</ListGroupItem>
        })

        return (<div>
            <h1>First test for Google Books</h1>
            <h2>This is a test</h2>
            <ListGroup>{techs}</ListGroup>
            </div>);
    }
}
