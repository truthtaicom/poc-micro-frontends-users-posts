import React from 'react'
import { useFela } from 'react-fela'
import { ListItemData } from '../../types/List'

export interface ListItemProps {
  data: ListItemData,
  onClick(x: ListItemData): void
}

const listItemStyle = {
  padding: '5px 0',
  ':hover': {
    fontWeight: 'bold',
    transition: 'all .2s'
  },
  cursor: 'pointer'
}

export default function ListItem(props: ListItemProps): JSX.Element {
  const { css } = useFela()

  return (
    <li className={css(listItemStyle)} onClick={() => props.onClick?.(props.data)}>
      {props.data.name || props.data.title}
    </li>
  )
}