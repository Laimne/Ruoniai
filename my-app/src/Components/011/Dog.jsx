import React  from "react";


class Dog extends React.Component {

constructor () {
super();
this.state = {size:50};
}


render() {
    return (
<>
    <h2 style={{
        color:this.props.color,
        fontSize:this.state.size +'px'

    }}>im Big Dog</h2>
    <button>Press this button,plese</button>
</>
    )
}


}


export default Dog;