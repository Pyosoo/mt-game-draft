import React from "react";
import * as vm from "./IntroView.vm";

export function IntroView() {
  const name = vm.bindingName();

  return (
    <div>
      This is a IntroView
      <br />
      <input type="text" value={name} onChange={vm.doChangeName} />
      <br />
      Echo: {name}
    </div>
  );
}
