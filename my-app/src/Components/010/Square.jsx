import randColor from '../../Functions/randColor';
import rand from '../../Functions/rand';

/*function Square({color, name, size, show}) {


    if(!show) {
        return null;
    }

    return (
        <div className="cat App-logo" style={{ 
            backgroundColor: size > 300 ? randColor() : color,
            width: rand(100, 200) + 'px', 
            height: size + 'px' 
            }}>
            <span className="App-logo2">{name}</span>
        </div>
    )
}

export default Square;*/




/*function Square(props) {

    return (
        <div className="cat App-logo"style={{backgroundColor:props.color}}>
            <span className="App-logo2">(props.name)</span>
        </div>
    )
}
export default Square;*/



/*function Square({color,name}) {

    return (
        <div className="cat App-logo"style={{backgroundColor:color}}>
            <span className="App-logo2">{name}</span>
        </div>
    )
}
export default Square;*/



function Square({color,name,size}) {

    return (
        <div className="cat App-logo"style={{
            backgroundColor:size >300 ? randColor() :color,
            width:size +'px',
            height:size +'px'
            }}>
            <span className="App-logo2">{name}</span>
        </div>
    )
}
export default Square;
