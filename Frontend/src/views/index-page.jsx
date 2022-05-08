import React, {
  forwardRef, useEffect, useImperativeHandle, useMemo, useState, useContext
} from 'react'
import PropTypes from 'prop-types'
import { useSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'

import { listBlog } from '../api'
import BlogCard from '../components/blog-card.jsx'
import ContainerContext from '../components/container-context'
import { getSessionStorage } from '../utils/localStorage'

// eslint-disable-next-line react/prop-types
const IndexInner = ({ display }, ref) => {
  const { enqueueSnackbar } = useSnackbar()
  const { t } = useTranslation()
  const [blogList, setBlogList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const containerContext = useContext(ContainerContext)

  const loadBlogList = () => {
    listBlog(currentPage, 50, false).then(res => {
      if (!res.success) {
        enqueueSnackbar(t(res.messageId), { variant: 'error' })
        return
      }

      const { blogs } = res.data
      setBlogList(blogs)
    }).catch(() => enqueueSnackbar(t('Server.InternalError'), { variant: 'error' }))
  }

  useEffect(() => loadBlogList(1), [])

  useEffect(() => {
    if (display) {
      const scrollPosition = getSessionStorage('UI.ScrollPosition')
      if (scrollPosition && containerContext.current) {
        containerContext.current.scrollTo(0, scrollPosition)
      }
    }
  }, [display])

  useImperativeHandle(ref, () => ({
    loadBlogList
  }))

  const blogComponents = useMemo(() => blogList.map((x, idx) => (
    <BlogCard blogId={x.blogId}
              author={x.author.nickName}
              brief={x.brief}
              createdAt={x.createdAt}
              commentCount={x.commentCount}
              lastUpdate={x.lastUpdate}
              content={x.content}
              title={x.title}
              isPreview={true}
              key={`blog-preview-${idx}`}
    />
  )), [blogList])

  return (
    <div style={{
      display: display ? 'flex' : 'none',
      flexDirection: 'column',
      rowGap: '14px'
    }}>
      { blogComponents }
    </div>
  )
}

const Index = forwardRef(IndexInner)

Index.propTypes = {
  display: PropTypes.any
}

export default Index
