'use client'

import Button from "@/components/Button/Button";
import * as Style from "./index.styled";
import React, {useEffect, useState} from "react";


export default function Comments(props: {PersonKey: number}){

    const [comments, setComments] = useState<CommentData[]>([])
    const [newComment, setNewComment] = useState<string>("")
    const [isSend, setIsSend] = useState<boolean>(true)


    const commentsStorageKey = `comments-` + String(props.PersonKey)
    useEffect(() => {
        if (isSend){
            const storageComments = localStorage.getItem(commentsStorageKey)
            if (storageComments == null) {
                setComments([])
            }
            else {
                setComments(JSON.parse(storageComments))
            }
            setIsSend(false)
        }
    }, [isSend, props.PersonKey])

    const onCommentDelete = (id: string) => {
        const newComments: CommentData[] = comments.filter(com => com.name !== id)
        localStorage.setItem(commentsStorageKey, JSON.stringify(newComments))
        // clear input field
        setNewComment("")
        // set flag to load comments from localstorage
        setIsSend(true)
        // setComments(newComments)
    }

    const onCommentSend = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        if (newComment.length > 0) {
            const newComments: CommentData[] = comments
            newComments.push({
                name: `user ${comments.length + 1}`,
                text: newComment
            })
            localStorage.setItem(commentsStorageKey, JSON.stringify(newComments))
            // clear input field
            setNewComment("")
            // set flag to load comments from localstorage
            setIsSend(true)
            // setComments(newComments)
        }

    }

    return (
        <Style.Comments>
            {comments.map(c => (
                <Comment
                    key={c.name} {...c}
                    deleteHandler={onCommentDelete}
                />

            ))}
            <Style.Form onSubmit={onCommentSend}>
                <Style.Input
                    placeholder={'write your opinion'}
                    value={newComment}
                    onChange={(current) => setNewComment(current.target.value)}
                >

                </Style.Input>
                <Button
                    // type='submit'
                    name='send'
                    action={() => console.log('a')}
                />
            </Style.Form>
        </Style.Comments>
    )
}

interface CommentData {
    name: string,
    text: string,
}

interface CommentProps extends CommentData{
    deleteHandler: (id: string) => void
}

const Comment = (props: CommentProps)=> {
    return (
        <Style.Comment>
            <Style.DeleteButton
                onClick={() => props.deleteHandler(props.name)}
            >
                delete
            </Style.DeleteButton>
            <Style.Text>
                {props.text}
            </Style.Text>
            <Style.User>
                <Style.MainImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaPGE7RlQche2v_ZyjF8FO_wx6oti9nHmL2w&usqp=CAU"></Style.MainImg>
                <Style.Name>
                    {props.name}
                </Style.Name>
            </Style.User>

        </Style.Comment>
    )
}