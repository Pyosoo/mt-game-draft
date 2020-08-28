import { atom, AtomOptions } from "recoil";

import { VMProp } from "./VMProp"

export function makeVMProp<T>(options: AtomOptions<T>): VMProp<T> {
  return { state: atom(options), value: options.default };
}
