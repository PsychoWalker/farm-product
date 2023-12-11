import React, {useState} from "react";
import {Input, Label} from "./styled";

function CheckMeat({selectValues, onChange, children, count, price, onClickLabel = () => {}}) {
    const [checked, setChecked] = useState(false);

    return <>
        <Label checked={!checked} htmlFor={('check' + count)}>{children}</Label>
        <Input id={('check' + count)} onChange={() => setChecked(!checked)} onClick={(value) => onClickLabel(value, count)} selectValues={selectValues}/>
    </>
}

export default CheckMeat;
