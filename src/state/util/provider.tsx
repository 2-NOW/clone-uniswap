import { Provider, WritableAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyWritableAtom = WritableAtom<unknown, any[], any>;

interface Props {
  values: [AnyWritableAtom, unknown][];
  children: JSX.Element;
}

export const HydrateAtoms = ({ values, children }: Props) => {
  useHydrateAtoms(values);
  return children;
};

export const InitialProvider = ({ values, children }: Props) => {
  return (
    <Provider>
      <HydrateAtoms values={values}>{children}</HydrateAtoms>
    </Provider>
  );
};
