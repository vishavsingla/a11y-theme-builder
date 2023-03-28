import React from 'react';
import { HeadingSection } from '../content/HeadingSection';
import { Switch } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';


interface Props {
}

export const SwitchComponent: React.FC<Props> = () => {
    return (
        <div className="content">
            <HeadingSection title='Desktop' heading='Switch'></HeadingSection>
            <ExampleSection>
                <Switch defaultChecked/>
            </ExampleSection>
        </div>
    )
}
