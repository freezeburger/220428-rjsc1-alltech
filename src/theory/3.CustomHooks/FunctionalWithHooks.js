import useApi from "./use-api.hook";
import useKeydown from "./use-keydown.hook"

export default function FunctionalWithHooks({id}){

    const user = useApi(id);

    useKeydown(32, ()=> alert(user?.name));

    return(
        <>
            {user ? <h1>{user.name}</h1> : <h1>Loading...</h1>}
        </>
    )
}