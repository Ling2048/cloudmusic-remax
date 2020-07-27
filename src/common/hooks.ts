import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { search } from "./network"
import { InputEvent } from 'remax/one'
import { SearchInputValue, getSearchList, SearchShowType, getSongList, setClearSongList, SearchKeyword } from "@/store/redux/actions"
import { StorageSync } from "./api"

const useHandleSearchItem = () => {
  const dispatch = useDispatch()
  return React.useCallback((param: string | InputEvent) => {
    dispatch(setClearSongList(null))

    let keyword = ''
    const searchHistoryStr = StorageSync.getStorage('search_history')
    let searchHistory: string[] = []
    const offset = 0

    if (typeof param === 'string') keyword = param
    else keyword = (param as InputEvent).target.value

    keyword = keyword.trim()

    if (keyword.length <= 0) return

    if (typeof param === 'string') dispatch(SearchKeyword(keyword))

    if (searchHistoryStr) {
      searchHistory = JSON.parse(searchHistoryStr) as string[]
    }

    if (!searchHistory.includes(keyword)) {
      if (searchHistory.length > 9) searchHistory = searchHistory.slice(0, 9)
      StorageSync.setStorage('search_history', JSON.stringify([keyword].concat(searchHistory)))
    }

    if (typeof param === 'string') {
      dispatch(SearchInputValue(keyword))
    }

    dispatch(SearchShowType(2))

    search({
      s: keyword,
      limit: 20,
      offset: offset,
      queryCorrect: true,
    }).then(res=>{
      // if (typeof param === 'string') dispatch(SearchKeyword(''))
      dispatch(getSearchList(res.result))
      dispatch(getSongList({
        songs: res.result.songs ?? [],
        highlights: res.result.highlights ?? [],
        isLoaded: true
      }))
    })
  }, [dispatch])
}

export {
  useHandleSearchItem
}