import React from 'react';
import { useFela } from 'react-fela'

interface AppContainer {}

const containerStyle = {
  display: 'grid',
  'grid-template-columns': '200px 1fr',
  'justify-content': 'center',
  'align-items': 'start',
  'grid-gap': '50px',
  'margin': '50px 200px',
}

const AppContainer: React.FC<AppContainer> = (props) => {
  const { css } = useFela()
  return (
    <div className={css(containerStyle)}>
      {props.children}
    </div>
  )
}

export default AppContainer