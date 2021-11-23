import React, { useCallback, useEffect } from "react";
// @ts-expect-error
import { Panel } from "shared/components";
// @ts-expect-error
import { selectedUserAtom } from "appUser/atoms/user";
// @ts-expect-error
import { IUser } from "shared/types";

import debounce from "lodash.debounce";
import { useAtom } from "jotai";
import { filteredPostAtom, postInputAtom } from "../../atoms";

export default function UserPanel() {
  const [postInput, setPostInput] = useAtom(postInputAtom);
  const [posts, getPosts] = useAtom(filteredPostAtom);
  const [selectedUser] = useAtom<IUser>(selectedUserAtom);

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPostInput(e.target.value);
      debounceInput(e.target.value);
    },
    [selectedUser]
  );

  const debounceInput = useCallback(
    debounce(
      (nextValue) =>
        getPosts({ userId: selectedUser?.id, textSearch: nextValue }),
      500
    ),
    [selectedUser]
  );

  const onClearText = useCallback(() => {
    setPostInput("");
    getPosts({ userId: selectedUser?.id, textSearch: "" });
  }, [selectedUser]);

  useEffect(() => {
    onClearText()
  }, [selectedUser])

  console.log(selectedUser)

  return (
    <Panel
      title="Posts"
      inputValue={postInput}
      onInputChange={onInputChange}
      listData={posts}
      onClear={onClearText}
      isInputDisabled={!selectedUser}
    />
  );
}
