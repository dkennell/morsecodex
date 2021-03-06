import React from 'react'
import DocumentTitle from 'react-document-title'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { Link } from 'react-router'

import { colors, type } from '../../../utils/style'
import Page from '../'

const Wrapper = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  padding: 16px;
`

@observer
class Landing extends Page {
  render () {
    return (
      <DocumentTitle title="TeachOK | Learn something new">
        <Wrapper>
          <Link to="/lesson">Start Lesson</Link>
        </Wrapper>
      </DocumentTitle>
    )
  }
}

export default Landing
