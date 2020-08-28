import { makeVMProp, useRecoilState } from "../../shared/core/mvvm";

const _name = makeVMProp({ key: "name", default: "Sunnuts" });

// Mangling for avoiding react-hooks/rules-of-hooks error
function Mangling_bindingName() {
  [_name.value, _name.setter] = useRecoilState(_name.state);
  // CRUD operation in here
  //const setter = useSetRecoilState(_nameStateProp.state);

  return _name.value;
}

function doChangeName(e: React.ChangeEvent<HTMLInputElement>) {
  // CRUD operation in here

  _name.setter?.(e.target.value);
}

export { Mangling_bindingName as bindingName, doChangeName };
