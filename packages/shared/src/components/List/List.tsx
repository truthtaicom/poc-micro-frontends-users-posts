import React from "react";
import { useFela } from "react-fela";
import { ListItem } from ".";
import { ListData, ListItemData } from "../../types/List";

interface ListProps {
  data: ListData;
  onClick(e: ListItemData): void;
}

const listStyle = {
  'list-style': 'none',
  margin: 0,
  padding: '5px 0',
  maxHeight: '500px',
  height: '100%',
  overflowY: 'auto',
}


export default function List(props: ListProps): JSX.Element {
  const { css } = useFela()
  return (
    <ul className={css(listStyle)}>
      {props.data.map((elm: ListItemData) => (
        <ListItem key={elm.id} data={elm} onClick={props.onClick} />
      ))}
    </ul>
  );
}
