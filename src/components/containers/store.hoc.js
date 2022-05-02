import { useStore } from '../../core/utils';


// Hoc
export default function withStore(ContextualizedComponent) {

    return (props) => {
        const [appState, dispatch, types] = useStore();
        
        return (
                <ContextualizedComponent {...props}  {...{ appState, dispatch, types }} />
        )
    }
}