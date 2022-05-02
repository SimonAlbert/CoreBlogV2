import { getLocalStorage } from './utils/localStorage'

const translation = {
  resources: {
    en: {
      translation: {
        'User.CreateByAdmin.BadToken': 'Bad administrator token',
        'User.CreateByAdmin.Success': 'Successfully created user',
        'User.Info.NotFound': 'User information not found',
        'User.Info.Success': 'Successfully retrieved user information',
        'User.Login.Success': 'Successfully logged in',
        'User.Login.NotFound': 'Incorrect username or password',
        'Blog.Add.Success': 'Successfully created blog',
        'Blog.Get.NotFound': 'Blog not found or deleted',
        'Blog.Get.Success': 'Successfully retrieved blog information',
        'Blog.List.Success': 'Successfully retrieved blogs information',
        'Blog.Update.NotFound': 'Blog not found or deleted',
        'Blog.Update.Unauthorized': 'You\'re not the author of this blog',
        'Blog.Update.Success': 'Successfully updated blog',
        'Blog.Delete.NotFound': 'Blog not found or deleted',
        'Blog.Delete.Unauthorized': 'You\'re not the author of this blog',
        'Blog.Delete.Success': 'Successfully deleted blog',
        'Comment.Add.NotFound': 'Blog not found or deleted',
        'Comment.Add.Success': 'Successfully commented',
        'Comment.Delete.NotFound': 'Comment not found or deleted',
        'Comment.Delete.Unauthorized': 'You\'re not the author of this comment',
        'Comment.Delete.Success': 'Successfully deleted comment',

        'UI.Format.Time': 'HH:MM',
        'UI.Format.DateTime': 'D/M HH:MM',
        'UI.Format.YearDateTime': 'M/D/YYYY HH:MM',

        'UI.AppBar.Search': 'Search...',
        'UI.MainMenu.SetLanguage': 'Choose language',
        'UI.MainMenu.Login': 'Login',
        'UI.MainMenu.About': 'About CoreBlog',
        'UI.Blog.Author': 'Author',
        'UI.Blog.CreateTime': 'Created at',
        'UI.Blog.UpdateTime': 'Updated at',
        'UI.Blog.CommentCount': 'Comments',
        'UI.About.Title': 'About',
        'UI.About.Content': 'This is the second edition of CoreBlog, rewritten with Express.js and React.'
          + ' This new version comes with great UI updates and enhanced many features.',
        'UI.About.Skills': 'Skills used',
        'UI.About.Version.Frontend': 'Frontend version',
        'UI.About.Version.Backend': 'Backend version',
        'UI.About.Bothering': '"O, we all have different fortune which are full of frustrations. '
          + 'Feng Tang aged before his talents recognized, victorious Li Guang was never conferred marquis. '
          + 'It\'s not the lack of wise emperors that leads to Jia Yi\'s being exiled. '
          + 'Isn\'t it in an era of wise politics that Liang Hong hid in the shore of Qilu? '
          + 'All of these are just caused by that wise people feel poverty at ease and brilliant people conform to their fate."'
      }
    },
    zh_CN: {
      translation: {
        'User.CreateByAdmin.BadToken': '管理员密钥错误',
        'User.CreateByAdmin.Success': '成功创建用户',
        'User.Info.NotFound': '用户信息不存在',
        'User.Info.Success': '成功获取用户信息',
        'User.Login.Success': '登录成功',
        'User.Login.NotFound': '用户名或密码错误',
        'Blog.Add.Success': '创建博客成功',
        'Blog.Get.NotFound': '博客不存在或已被删除',
        'Blog.Get.Success': '获取博客信息成功',
        'Blog.List.Success': '获取博客列表成功',
        'Blog.Update.NotFound': '博客不存在或已被删除',
        'Blog.Update.Unauthorized': '你不是该博客的作者',
        'Blog.Update.Success': '更新博客成功',
        'Blog.Delete.NotFound': '博客不存在或已被删除',
        'Blog.Delete.Unauthorized': '你不是该博客的作者',
        'Blog.Delete.Success': '删除博客成功',
        'Comment.Add.NotFound': '博客不存在或已被删除',
        'Comment.Add.Success': '评论成功',
        'Comment.Delete.NotFound': '评论不存在或已被删除',
        'Comment.Delete.Unauthorized': '你不是该评论的作者',
        'Comment.Delete.Success': '删除评论成功',

        'UI.Format.Time': 'HH:MM',
        'UI.Format.DateTime': 'M 月 D 日 HH:MM',
        'UI.Format.YearDateTime': 'YYYY 年 M 月 D 日 HH:MM',

        'UI.AppBar.Search': '搜索...',
        'UI.MainMenu.SetLanguage': '选择语言',
        'UI.MainMenu.Login': '登录',
        'UI.MainMenu.About': '关于 CoreBlog',
        'UI.Blog.Author': '作者',
        'UI.Blog.CreateTime': '创建时间',
        'UI.Blog.UpdateTime': '最后更新',
        'UI.Blog.CommentCount': '条评论',
        'UI.About.Title': '关于',
        'UI.About.Content': '这是 CoreBlog 的第二版，采用 Express.js 和 React.js 实现。'
          + ' 这个新版本中包含了很多 UI 更新，且很多功能已经得到增强。',
        'UI.About.Skills': '使用的技术',
        'UI.About.Version.Frontend': '前端版本',
        'UI.About.Version.Backend': '后端版本',
        'UI.About.Bothering': '“时运不济，命运多舛，冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时。”'
      }
    },
  },
  lng: getLocalStorage('UI.Language') || 'zh_CN',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
}

export default translation
