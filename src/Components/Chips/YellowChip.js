import React from 'react';

export default function (props) {
    return (
        <svg width='444' height='444' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='234' cy='217' r='175' fill='#F6FB2C' filter='url(#filter0_d)'
            />
            <g style={{ mixBlendMode: 'darken' }} opacity='0.33'>
                <circle cx='233.5' cy='216.5' r='94.5' fill='#000' filter='url(#filter1_i)'
                />
                <circle cx='233.5' cy='216.5' r='89.5' stroke='#792727' strokeWidth='10'
                />
            </g>
            <circle cx='233.5' cy='216.5' r='39.5' fill='#C0D000' stroke='#C4BC04'
                    strokeWidth='10' />
            <defs>
                <filter id='filter0_d' x='0' y='0' width='444' height='444' filterUnits='userSpaceOnUse'
                        colorInterpolationFilters='sRGB'>
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    />
                    <feOffset dx='-12' dy='5' />
                    <feGaussianBlur stdDeviation='23.5' />
                    <feColorMatrix values='0 0 0 0 0.659389 0 0 0 0 0.63739 0 0 0 0 0.109418 0 0 0 1 0'
                    />
                    <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
                    <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
                </filter>
                <filter id='filter1_i' x='139' y='122' width='233' height='225' filterUnits='userSpaceOnUse'
                        colorInterpolationFilters='sRGB'>
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                    <feColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                   result='hardAlpha' />
                    <feOffset dx='44' dy='36' />
                    <feGaussianBlur stdDeviation='57.5' />
                    <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                    <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0' />
                    <feBlend in2='shape' result='effect1_innerShadow' />
                </filter>
            </defs>
        </svg>
    )
}
