import "react"
import { UserOutlined, SettingOutlined } from "@ant-design/icons"
import { Row, Col, Typography, Space, Button } from "antd"
import type { Bookmark } from "./types"
import { getBookmark } from "~utils"

const { Title } = Typography;

function openBookmarkSettings(){

}

function bookmarksList(){
  // chrome.storage.local.get("configObject", (data)=>{
  //   data.configObject.Bookmarks.map((bookmark: Bookmark) => {
  //     bookmarkTile(bookmark.title)
  //   })
  // })
  const books = ["Bookmark 1", "Bookmark 2", "Bookmark 3"]
  const booksMapped = books.map(id=>{
    return bookmarkTile(id)
  })
  return (
    <>
      {booksMapped}
    </>
  )
}

function bookmarkTile(id: string){
  const bookmark = getBookmark(id)
  return (
    <Space direction="horizontal" wrap={false}>
      <Button >
        {id}
      </Button>
      <Button>
        <SettingOutlined />
      </Button>
    </Space>
  )
}

function addABookmark(){
  function openNewBookmarkTab() {
    window.open("tabs/newBookmark.html")
  }

  return (
    <Space direction="horizontal" wrap={false} onClick={ openNewBookmarkTab }>
      <Button >
        Add a Bookmark
      </Button>
    </Space>
  )
}

function popUpHeader(){
  function openAccountSettings(){
    window.open("tabs/accountSettings.html")
  }

  return (
    <Space direction="horizontal" wrap={false} >
      <h2>Bookmarks</h2>
      <UserOutlined style={{ fontSize:"24px" }} onClick={openAccountSettings}/>
    </Space>
  )
}


export default function IndexPopup() {
  return (
    <div>
      {popUpHeader()}
      {bookmarksList()}
      {addABookmark()}
    </div>
  )
}
