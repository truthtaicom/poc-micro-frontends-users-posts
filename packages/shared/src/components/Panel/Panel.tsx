import React, { FormEvent } from "react";
import { useFela } from "react-fela";
import { Input, List, Loading } from "..";
import { ListData, ListItemData } from "../../types";
import * as styles from "./Panel.styles";

interface PanelProps {
  title: string;
  inputValue: string;
  onInputChange(x: FormEvent<HTMLInputElement>): void;
  listData: ListData;
  onSelectItem(x: ListItemData): void;
  onClear(): void;
  isInputDisabled?: boolean;
}

const Panel: React.FC<PanelProps> = (props) => {
  const { css } = useFela();

  return (
    <div className={css(styles.panelContainer)}>
      <div className={css(styles.panelTitle)}>{props.title}</div>
      <div className={css(styles.panelInput)}>
        <Input
          value={props.inputValue}
          onChange={props.onInputChange}
          onClear={props.onClear}
          disabled={props.isInputDisabled}
        />
      </div>
      <div className={css(styles.panelList)}>
        {(props.isInputDisabled || !props.listData.length) ? (
          <Loading />
        ) : (
          <List data={props.listData} onClick={props.onSelectItem} />
        )}
      </div>
    </div>
  );
};

export default Panel;
