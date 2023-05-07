import type {Bookmark} from "../types"
import {getBookmark} from "../utils"
import { Form, Input, Button } from "antd"

export default function newBookmark() {
    const urlParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlParams.entries());
    const bookmarkId = params.bookmarkId
    console.log(bookmarkId)
    const bookmark = getBookmark(bookmarkId)
    return (
        <>
            <h1>Bookmark Settings</h1>
            {settingsForm(bookmark)}
            <p></p>
        </>
    )
}

function settingsForm(bookmark?: Bookmark){
    return(
        <Form>
            <Form.Item label="Title: ">
                <Input></Input>
            </Form.Item>
            <Form.Item label="Last Visited URL: ">
                <Input></Input>
            </Form.Item>
            <Form.Item label="Pattern: ">
                <Input></Input>
            </Form.Item>
            <Form.Item label="Is this Regex? : ">
                <Input></Input>
            </Form.Item>
            <Form.Item label="Add the URL to the ignore list after viewing?: ">
                <Input></Input>
            </Form.Item>
            <Form.Item label="Bookmark Active?: ">
                <Input></Input>
            </Form.Item>
            <Form.Item >
                <Button type="primary">Submit</Button>
            </Form.Item>
        </Form>
    )
}