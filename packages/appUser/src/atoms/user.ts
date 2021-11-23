import axios from 'axios'
import { atom } from 'jotai'
import { getAllUsers } from '../apis'

export const userListsAtom = atom([])
export const userInputAtom = atom('')
export const selectedUserAtom = atom(null)

export const filteredUserAtom = atom(
  get => get(userListsAtom),
  async (_get, set, textSearch: string) => {
    const res = await getAllUsers()

    if (!textSearch) {
      set(userListsAtom, res)
      return;
    }

    set(userInputAtom, textSearch)

    const filteredUsers = res.filter((item: any) => {
      return item.name.toLowerCase().includes(textSearch.toLowerCase())
    })
    set(userListsAtom, filteredUsers)
  }
)

filteredUserAtom.onMount = (setAtom) => {
  setAtom('')
}