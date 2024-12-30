import { FormEvent, useState } from "react";
import { Thread } from "../../ForumPage"
import axios from "axios";
import CreateReplyInput from "./CreateReplyInput";

function CreateReplyLogic(
    reply_id: any,
    {id,
    title,
    content,
    user_id,
    forum_id}: Thread
) {
    const [replyContent, setReplyContent] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        axios
            .post('http://localhost:8080/Reply', {
                thread_id: id,
                reply_id: reply_id,
                user_id: 0,
                content: replyContent
            })
            .then((Response) => console.log(Response.data))
            .catch((Response) => console.error(Response.data));
    }

    return (
        <>
            <CreateReplyInput
                replyContent={replyContent} setReplyContent={setReplyContent}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default CreateReplyLogic