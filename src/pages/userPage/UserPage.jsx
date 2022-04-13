import React from 'react'
import NavigationTab from '../../components/NavigationTab'
import AppBar from '../common/AppBar'
import Profile from './Profile'

export default function UserPage() {
  return (
    <div>
      <AppBar/>
      <Profile/>
      <NavigationTab items={[
        '게시글',
        '댓글',
        '방명록'
      ]}/>
    </div>
  )
}
