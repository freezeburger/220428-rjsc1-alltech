import { useStore } from "../../core/utils";

export function StoreProviderRenderer({render}) {

  const [appState, dispatch, types] = useStore();

  return (
    render({ appState, dispatch, types })
  );

}