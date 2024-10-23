import React from 'react';

interface LabelValuePairProps {
    label: string,
    value: string | number
}

const LabelValuePair = ({label, value}: LabelValuePairProps) => {
    return (
        <div className="grid-row">
            <div className="col-6">
                {label}
            </div>
            <div className="col-6 text-right">
                {value}
            </div>
        </div>
    );
};

export default LabelValuePair;
