import { useState, createContext, useContext } from "react";

 const context = createContext();

export const usePosts = () => {
    const contexto = useContext(context)
    return contexto
}
export const PostProvider = ({ Children }) => {

const [posts, setPosts] = useState(null);

  return <context.Provider value={{posts, setPosts}}>
    {Children}
    </context.Provider>;

};
