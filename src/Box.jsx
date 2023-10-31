import React from "react"

export default function Box({on}) {
    
    const [boxState, setBoxState] = React.useState({on})
    console.log(boxState)
    
    const clickHandler = () => {
        setBoxState(!boxState)
    }

    const styles = {
        backgroundColor: boxState ? "#222222" : "transparent"
    }
    
    return (
        <div style={styles} className="box" onClick={clickHandler}></div>
    )
}