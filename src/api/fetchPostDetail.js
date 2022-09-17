export async function fetchPostDetail(setPost, setIsLoading) {
  try {
    setIsLoading(true);
    const result = await fetch(
      "https://studapi.teachmeskills.by/blog/posts/2/"
    ).then((response) => response.json());
    setPost(result);
  } catch (e) {
    console.log(e);
  } finally {
    setIsLoading(false);
  }
}
