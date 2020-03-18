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
    const {contents} = this.props
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
            React.Children.map( this.props.children , (element, index) => {
              // if(index === this.state.currentPage) { // 需要做锚点跳转处理
                return (<div>{element.props.children}</div>)
              // }
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


