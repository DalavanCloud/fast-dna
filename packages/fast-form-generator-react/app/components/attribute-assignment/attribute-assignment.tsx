import * as React from "react";

export interface IAttributeAssignmentProps {
    text: string;
}

/**
 * This test components API should have:
 * - a required property and a config that changes the generated form element attributes
 */
export default class AttributeAssignment extends React.Component<IAttributeAssignmentProps, {}> {
    public render(): JSX.Element {
        return (
            <span>
                {this.props.text}
            </span>
        );
    }
}
