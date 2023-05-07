import type { Bookmark } from "./types";

export function generateID(){
    const head = Date.now().toString();
    const tail = Math.random().toString().substr(2);
    return head + tail;
}

export function getBookmark(id: string): Bookmark {
    return
}

export function getBookmarksList(): Bookmark[] {
    return
}

export function saveBookmark() {
    
}