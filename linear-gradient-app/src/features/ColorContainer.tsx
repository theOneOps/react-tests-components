import { useDispatch } from "react-redux";
import { useState } from "react";
import { changingColorValue } from "../reducers/coolors";

export default function ColorContainer({ id, value }) {

  const [currentValue, setCurrentValue] = useState(value);

  const dispatch = useDispatch();

  return (
    <input
      onChange={(e) =>
        {
            setCurrentValue(e.target.value)
            dispatch(changingColorValue({id, name: e.target.value }))
        }
      }
      type="color"
      value={currentValue}
    />
  );
}
