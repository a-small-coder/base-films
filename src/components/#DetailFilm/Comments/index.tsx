'use client'

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
                name: `person ${comments.length + 1}`,
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
            <Style.User>
                <Style.MainImg src="https://lens-storage.storage.googleapis.com/png/3dbafa8b03b045f4986c7f5cba0d67b8"></Style.MainImg>
                <Style.Name>
                    You are unknown person
                </Style.Name>
            </Style.User>
            <Style.Form onSubmit={onCommentSend}>
                <Style.Input
                    placeholder={'What do mean about this movie?'}
                    value={newComment}
                    onChange={(current) => setNewComment(current.target.value)}
                >

                </Style.Input>
                <Style.SendButton
                    type='submit'
                    name='send'
                >
                    Send
                </Style.SendButton>
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
                <Style.MainImg src="https://lens-storage.storage.googleapis.com/png/3dbafa8b03b045f4986c7f5cba0d67b8"></Style.MainImg>
                <Style.Name>
                    {props.name}
                </Style.Name>
            </Style.User>

        </Style.Comment>
    )
}