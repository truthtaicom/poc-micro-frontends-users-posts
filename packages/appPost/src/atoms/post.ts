import { atom } from 'jotai'
import { getAllPosts } from '../apis'

interface FilteredPostParams {
  userId?: string;
  textSearch: string;
}


export const postListsAtom = atom([])
export const postInputAtom = atom('')

export const filteredPostAtom = atom(
  get => {
    return get(postListsAtom)
  },
  async (_get, set, { userId, textSearch }: FilteredPostParams) => {
    const res = await getAllPosts(userId)

    if(!userId) {
      set(postListsAtom, [])
      return;
    }

    if (!textSearch) {
      set(postListsAtom, res)
      return;
    }

    set(postInputAtom, textSearch)

    const filteredPosts = res.filter((item: any) => {
      return item.title.toLowerCase().includes(textSearch.toLowerCase())
    })
    set(postListsAtom, filteredPosts)
  }
)