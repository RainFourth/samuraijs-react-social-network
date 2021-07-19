import profileReducer, {addPostActionCreator, deletePostAC, updateNewPostTextActionCreator} from "./profileReducer";
import React from "react";


it("post cnt should be incremented", () => {
    // 1. test data
    let initState = profileReducer() // default initState in reducer to be returned
    let newState

    // 2. action
    let actionUpdateNewPostTxt = updateNewPostTextActionCreator("it-kamasutra.com")
    let actionAddPost = addPostActionCreator()
    newState = profileReducer(initState, actionUpdateNewPostTxt)
    newState = profileReducer(newState, actionAddPost)

    // 3. expectaion
    expect(newState.posts.length).toBe(initState.posts.length+1)
})

it("msg of the new post should be correct", () => {
    // 1. test data
    let initState = profileReducer() // default initState in reducer to be returned
    let newState

    // 2. action
    let actionUpdateNewPostTxt = updateNewPostTextActionCreator("it-kamasutra.com")
    let actionAddPost = addPostActionCreator()
    newState = profileReducer(initState, actionUpdateNewPostTxt)
    newState = profileReducer(newState, actionAddPost)

    // 3. expectaion
    expect(newState.posts[-1].msg).toBe("it-kamasutra.com")
})

it("after post deleting len should be decremented", () => {
    // 1. test data
    let initState = profileReducer() // default initState in reducer to be returned
    let newState

    // 2. action
    let actionDeletePost = deletePostAC(1)
    newState = profileReducer(initState, actionDeletePost)

    // 3. expectaion
    expect(newState.posts.length).toBe(initState.posts.length-1)
})

it("try delete post with non-existent id - len should be same", () => {
    // 1. test data
    let initState = profileReducer() // default initState in reducer to be returned
    let newState

    // 2. action
    let actionDeletePost = deletePostAC(354534)
    newState = profileReducer(initState, actionDeletePost)

    // 3. expectaion
    expect(newState.posts.length).toBe(initState.posts.length)
})

