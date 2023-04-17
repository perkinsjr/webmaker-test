import React from 'react';
import { SliderPicker, Checkboard } from 'react-color';

interface ColorProps {
    color: string
    setColor: (arg:string) => void
}

export default function BestColorPicker({color, setColor}:ColorProps) {
    return (
        <div className='relative pb-10'>
            <SliderPicker color={color} onChange={e => setColor(e.hex)}/>
        </div>
    )
}

//export default BestColorPicker;