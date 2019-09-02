import * as React from 'react'
import { inject, observer } from 'mobx-react';
// import { observable } from 'mobx'
import { UserStore } from 'src/stores/modules/user'
import { RouteComponentProps } from 'react-router';
import { HomeService } from 'src/services/home'

interface HomePorps extends RouteComponentProps {
  userStore: UserStore
}

@inject('userStore', 'homeService')
@observer
export default class Home extends React.Component<HomePorps, {}> {  

  public userStore: UserStore
  public homeService: HomeService

  constructor (props: any) {
    super(props)
    this.userStore = props.userStore
    this.homeService = props.homeService
  }

  public render () {

    return (
      <div className="home-main">
        首页
      </div>
    )
  }
}