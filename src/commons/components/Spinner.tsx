import React from 'react';
import {Colors} from "../types/core-types";

interface SpinnerProps {
    color?: Colors,
    type?: 'circular' | "dots" | "bars" | 'dottedRound';
}

const Spinner = ({type = 'circular', color = 'info'}: SpinnerProps) => {
    switch (type) {
        case 'circular':
            return (
                <div className={`circular-spinner text-${color}`}></div>
            );
        case 'dots':
            return (
                <svg width="70" height="20" viewBox="0 0 70 20" xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor" className={`text-${color}`}>
                    <circle cx="12" cy="10" r="6">
                        <animate attributeName="r" from="6" to="6"
                                 begin="0s" dur="1s"
                                 values="6;3;6" calcMode="linear"
                                 repeatCount="indefinite"/>
                        <animate attributeName="fill-opacity" from="1" to="1"
                                 begin="0s" dur="1s"
                                 values="1;.5;1" calcMode="linear"
                                 repeatCount="indefinite"/>
                    </circle>
                    <circle cx="36" cy="10" r="6">
                        <animate attributeName="r" from="6" to="6"
                                 begin="0.2s" dur="1s"
                                 values="6;3;6" calcMode="linear"
                                 repeatCount="indefinite"/>
                        <animate attributeName="fill-opacity" from="1" to="1"
                                 begin="0.2s" dur="1s"
                                 values="1;.5;1" calcMode="linear"
                                 repeatCount="indefinite"/>
                    </circle>
                    <circle cx="60" cy="10" r="6">
                        <animate attributeName="r" from="6" to="6"
                                 begin="0.4s" dur="1s"
                                 values="6;3;6" calcMode="linear"
                                 repeatCount="indefinite"/>
                        <animate attributeName="fill-opacity" from="1" to="1"
                                 begin="0.4s" dur="1s"
                                 values="1;.5;1" calcMode="linear"
                                 repeatCount="indefinite"/>
                    </circle>
                </svg>
            );

        case 'bars':
            return (
                <svg
                    width='50'
                    height="50"
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                    fill='currentColor'
                    className={`text-${color}`}
                >
                    <g transform="translate(1 1)">
                        {[0, 1, 2, 3].map((_, i) => (
                            <rect key={i} x={i * 10} y="10" width="8" height="30">
                                <animate
                                    attributeName="y"
                                    begin={`${i * 0.1}s`}
                                    dur="0.8s"
                                    values="10;5;10"
                                    calcMode="linear"
                                    repeatCount="indefinite"/>
                                <animate
                                    attributeName="height"
                                    begin={`${i * 0.1}s`}
                                    dur="0.8s"
                                    values="30;40;30"
                                    calcMode="linear"
                                    repeatCount="indefinite"/>
                            </rect>
                        ))}
                    </g>
                </svg>
            );

        case 'dottedRound':
            return (
                <svg className={`dotted-round-spinner text-${color}`} xmlns="http://www.w3.org/2000/svg" width="48"
                     height="48" viewBox="0 0 48 48">
                    <circle cx="24" cy="4" r="4" fill="currentColor"/>
                    <circle cx="12.19" cy="7.86" r="3.7" fill="currentColor"/>
                    <circle cx="5.02" cy="17.68" r="3.4" fill="currentColor"/>
                    <circle cx="5.02" cy="30.32" r="3.1" fill="currentColor"/>
                    <circle cx="12.19" cy="40.14" r="2.8" fill="currentColor"/>
                    <circle cx="24" cy="44" r="2.5" fill="currentColor"/>
                    <circle cx="35.81" cy="40.14" r="2.2" fill="currentColor"/>
                    <circle cx="42.98" cy="30.32" r="1.9" fill="currentColor"/>
                    <circle cx="42.98" cy="17.68" r="1.6" fill="currentColor"/>
                    <circle cx="35.81" cy="7.86" r="1.3" fill="currentColor"/>
                </svg>
            )
        default:
            return null;
    }
};

export default Spinner;
