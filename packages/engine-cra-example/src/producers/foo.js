import { producer } from "@c11/engine.macro";
import { Get, Set } from "../state";

export const foo = producer((val = Get.foo, setBar = Set.bar) => {
  setBar(val + " copied from foo");
});
