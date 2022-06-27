import {ACTIONS} from "../../utils/constants";
import {apiDelete, apiGet, apiPost, apiPut} from "../../http/httpPlaceholder";

type Post = {
  id: number,
  creator: string,
  link: string,
  title: string,
  isoDate: string,
  content: string,
  content_snippet: string
}

export const setPosts = (page: number, queryString: string) => {
  return async (dispatch: any) => {
    const {data}: any = await apiGet({
      url: `/posts/offset/${page}?${queryString}`
    })
    dispatch({
      type: ACTIONS.POSTS.SET_POSTS,
      payload: data
    });
  }
}

