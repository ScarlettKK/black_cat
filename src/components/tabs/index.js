/*
 * @Author: your name
 * @Date: 2020-03-18 15:00:53
 * @LastEditTime: 2020-03-21 14:58:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /black_cat/src/components/tabs/index.js
 */
import React, { Component } from 'react';
import { TabsWrapper, TabsContent, TabsHeaderWrapper, TabsHeaderContent } from './style'


class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    }
  }

  render() {
    const { contents, isSwitch } = this.props
    const length = contents.length;
    const width = {
        width: 1 / length * 100 + '%'
    }
    return (
      <TabsWrapper>
        <TabsHeaderWrapper>
          {
            contents.map((content, index) => {
              return (
                <TabsHeaderContent style={width} key={index} onClick={this.setCurrentPage.bind(this, index)}>
                    <span>{content}</span>
                </TabsHeaderContent>
              )
            })
          }
        </TabsHeaderWrapper>
        <TabsContent>
          {
            isSwitch ?
            React.Children.map( this.props.children , (element, index) => {
                if(index === this.state.currentPage) { 
                  return (<div>{element.props.children}</div>)
                }
            })
            :
            React.Children.map( this.props.children , (element) => {
              return (<div>{element.props.children}</div>)// 需要做锚点跳转处理
            })
          }
        </TabsContent>
      </TabsWrapper>
    )
  }

  setCurrentPage(index) {
    this.setState(() => ({
      currentPage: index
    }))
  }
}
  
export default Tabs;


