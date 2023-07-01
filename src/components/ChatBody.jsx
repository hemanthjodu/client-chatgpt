import React, { useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { useEffect } from "react";
const ChatBody = ({chat})=>{
    const aistyle = "bg-white bg-opacity-40 backdrop-blue-lg dropshadow-md mr-auto"
    const sending = "bg-black bg-opacity-40 backdrop-blue-lg dropshadow-md"

    const parent = useRef(null)
    useEffect(()=>{
        parent.current && autoAnimate(parent.current)
    })
    const bottomRef = useRef(null);

    useEffect(()=> {
        bottomRef.current?.scrollIntoView({behaviour: "smooth"})
    }, [chat])

    return (
        <div className="flex flex-col gap-4" ref={parent}>
            {
                chat.map((message, i)=>{
                    return (
                        <div key={i} 
                        className={`border-[#999999] break-words border-2 rounded-xl 
                        self-end px-3 py-3 max-w-8-% ${message.sender==='ai' && aistyle}`}>
                            <pre className="whitespace-pre-wrap">
                                <span>
                                    {message.message}
                                </span>
                            </pre>
                        </div>
                    )
                })
            }
            <div ref={bottomRef} className="h-3"> </div>
            
        </div>
    )
}
export default ChatBody

