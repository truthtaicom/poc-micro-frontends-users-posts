import React from 'react'
import FadingBalls from "react-cssfx-loading/lib/FadingBalls";
import { useFela } from 'react-fela'
import { loadingStyle } from './Loading.styles';

const Loading = () => {
  const { css } = useFela()
  return (
    <div className={css(loadingStyle)}>
      <FadingBalls />
    </div>
  )
}

export default Loading