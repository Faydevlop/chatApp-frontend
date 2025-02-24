import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
    const [socket,setSocket] = useState(null);

    useEffect(()=>{

        const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL,{
            withCredentials:true,
        })

        setSocket(newSocket)

        return ()=>{
            newSocket.disconnect()
        }

    },[])

    return socket
    
}

export default useSocket;