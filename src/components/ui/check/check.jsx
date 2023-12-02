import React, {useState} from "react";
import {Input, Label} from "./styled";

function CheckMeat({children, count}) {
    const [checked, setChecked] = useState(false);

    return <>
        <Label checked={!checked} htmlFor={('check' + count)}>{children}</Label>
        <Input id={('check' + count)} onChange={() => setChecked(!checked)}/>
    </>
}

export default CheckMeat;
