import React from 'react';




let Slot = (props) => {
    let { x, y, z } = props;
    if (x === y && y === z) {
        return (
            <>
                <div className='slot-inner'>
                    <h1>{x}{y}{z}</h1>
                    <hr />
                    <h1>This is matching..woooo 🥇</h1>
                </div>
            </>
        )
      }
    else {
        return (
            <><div className='slot-inner'>
                <h1>{x}{y}{z}</h1>
                <hr />
                <h1>This is not matching....oops😆</h1>
            </div>
            </>
        )

    }
}
export default Slot;