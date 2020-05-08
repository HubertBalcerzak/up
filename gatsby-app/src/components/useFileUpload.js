import { useCallback, useEffect } from 'react'
import axios from 'axios'
import { setError, setLoading, setPage, setResponse } from '../redux/actions'
import { PAGE_ID } from '../redux/constants'
import { useDispatch } from 'react-redux'

const useFileUpload = () => {
  const dispatch = useDispatch()
  const handleFileUpload = useCallback(async ({ file }) => {
    try {
      dispatch(setLoading({ isLoading: true, value: 0 }))
      dispatch(setPage({ pageId: PAGE_ID.LOADING_PAGE }))

      const response = await axios.post(`${process.env.GATSBY_API_URL ? process.env.GATSBY_API_URL : ''}/api/upload`, file, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (value) => {
          dispatch(setLoading({ isLoading: true, value: Math.round(value.loaded / value.total * 100) }))
        },
      })
      dispatch(setResponse({ received: true, data: { ...response.data } }))
      dispatch(setPage({ pageId: PAGE_ID.AFTER_UPLOAD_PAGE }))
    } catch (e) {
      dispatch(
        setError({
          message: e.response ? e.response.data.message : e.toString(),
          status: e.response ? e.response.status : undefined,
        }),
      )
      dispatch(setResponse({ received: false, data: {} }))
      dispatch(setPage({ pageId: PAGE_ID.ERROR_PAGE }))
    } finally {
      dispatch(setLoading({ isLoading: false, value: 100 }))
    }
  }, [dispatch])

  const handleOnPaste = useCallback((event) => {
    const items = event.clipboardData.items
    const data = new FormData()
    if (event.clipboardData.getData('text') === '') {
      let blob = null

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') === 0) {
          blob = items[i].getAsFile()
        }
      }
      if (!blob) return
      data.append('file', blob)
    } else {
      const file = new File([event.clipboardData.getData('text')], 'paste.txt', {
        type: 'text/plain',
      })
      data.append('file', file)
    }
    handleFileUpload({
      file: data,
    })
  }, [handleFileUpload])

  useEffect(() => {
    window.addEventListener('paste', handleOnPaste, false)
    return () => window.removeEventListener('paste', handleOnPaste)
  }, [handleOnPaste])

  return {
    handleFileUpload,
    handleOnPaste,
  }
}

export default useFileUpload