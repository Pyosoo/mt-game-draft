import { RecoilState, RecoilValue, SetterOrUpdater } from "recoil";

export interface VMProp<T> {
  state: RecoilState<T>;
  value: RecoilValue<T> | Promise<T> | T;
  setter?: SetterOrUpdater<T>;
}
