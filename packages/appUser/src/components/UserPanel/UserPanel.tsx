import React, { FormEvent, useCallback, useEffect } from "react";
// @ts-expect-error
import { Panel } from "shared/components";
import debounce from "lodash.debounce";
import { useAtom } from "jotai";
import {
  filteredUserAtom,
  userInputAtom,
  selectedUserAtom,
} from "../../atoms/user";

export default function UserPanel() {
  const [userInput, setUserInput] = useAtom(userInputAtom);
  const [, setSelectedUser] = useAtom(selectedUserAtom);
  const [users, getUsers] = useAtom(filteredUserAtom);

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserInput(e.target.value);
      debounceInput(e.target.value);
    },
    []
  );

  const debounceInput = useCallback(
    debounce((nextValue) => getUsers(nextValue), 500),
    []
  );

  const onClearText = useCallback(() => {
    setSelectedUser(null)
    setUserInput('')
    getUsers('')
  }, [])

  const onSelectUser = useCallback((user) => {
    setSelectedUser(user);
    setUserInput(user.name);
  }, [setUserInput, setSelectedUser]);

  return (
    <Panel
      title="Users"
      inputValue={userInput}
      onInputChange={onInputChange}
      listData={users}
      onSelectItem={onSelectUser}
      onClear={onClearText}
    />
  );
}
