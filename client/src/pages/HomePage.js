import { usePosts } from "../context/postContext.js"

export function HomePage() {

    const setPosts = usePosts()
 
    return(

        <div>Pagina principal
            <button onClick={setPosts([1,2,3])}>
                prueba
            </button>
        </div>
      
    )
}
