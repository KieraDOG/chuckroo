# 像傻子一样写代码

假设我们什么都不会，我们应该如何写出来一个大型项目?

## 肌肉记忆

- 不要写 if else
- 不要复制粘贴

## 像傻子一样写代码，不考虑任何东西，通过本能写

1. 将设计稿划分为组件层级
2. 实现静态版本
3. 找到并实现所有 state 的最小位置
4. 实现 state 的最小正确位置
5. 添加反向数据流

这样我们就写好了一个 React 功能/项目了

## React 哲学

1. 步骤一：将 UI 拆解为组件层级结构 
2. 步骤二：使用 React 构建一个静态版本 
3. 步骤三：找出 UI 精简且完整的 state 表示 
4. 步骤四：验证 state 应该被放置在哪里 
5. 步骤五：添加反向数据流 

- HomePage
  - Header
    - Logo
    - SearchBar
    - Authentication
      - Login 
      - SignUp
      ---
      - Notification
      - User
        - Dropdown
          
  - Introduction
    - Title
    - Subtitle
    - Description
    - SearchBar
  - ExploreOurTags
    - SectionHeader
    - Tags
      - Tag
    - CreateBlogButton
  - ExploreOurBlogs
    - SectionHeader
    - Blogs
      - Blog
    - MoreBlogsButton
  - Footer
    - Logo
    - Website
    - Team
    - Legal
    - ShareLink
    - WaterMark
  - SearchBar
  - SectionHeader
  - Logo

* 划分到最小层级
* 组件名称需要符合业务逻辑，在这里的划分不应该出现类似于 `Button` 这样的 Global 组件
* 看到相同的组件名，就要想到组件复用。如果不能复用，就要分析组件名称是否合理



手机店

展示机应该是真机

但是有的手机店的真机被偷了

订货 -> 真机到了 -> 展示真机

展示模拟机

柜台 (模拟机 -> 当真机到了)

当客户询问有没有真机的时候，柜员就会花 3s 去查看真机是否到了

```jsx

const MOCK_DATA = {}

const [data, setData] = useState()
useEffect(() => {
  fetch()
    .then((res) => setData(res.data))
}, [])

const [loading, setLoading] = useState(true)
useEffect(() => {
  setTimeout(() => {
    setLoading(false)
  }, 3000)
}, [])

if (loading) {
  return <Loading />
}

return <Weathers data={data || MOCK_DATA} />
```
