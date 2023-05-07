
export interface Bookmark {
    title: string,
    lastURL: string,
    bookmarkId: string,
    pattern: string,
    isPattern: boolean,
    addToIgnoreListAfterView: boolean,
    isBookmarkActive: boolean,
    ignoreList: string[]
}

export interface configObject {
    debugMode: boolean,
    syncEnabled: boolean,
    bookmarks: Bookmark[]
}