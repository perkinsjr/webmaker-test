interface ColorProp {
    color: string
}

function ColorCircle({color}:ColorProp) {
    return (
        <span>
            <div style={{backgroundColor: color, border: '1px solid #fff'}} className='rounded-md w-5 h-5'/>
        </span>
    );
}

export default ColorCircle;