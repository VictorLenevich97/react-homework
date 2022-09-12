import axios from "axios"

export const fetchPost = async (setPostList, setLoading, setErrorLoading) => {
  setLoading(true)
  try {
    const data = await axios
      .get('https://studapi.teachmeskills.by/blog/posts/?limit=20')
      .then(res => { setPostList(res.data.results) })
    
  } catch (error) {
    setErrorLoading(true)
  } finally {
    setLoading(false)
  }

}