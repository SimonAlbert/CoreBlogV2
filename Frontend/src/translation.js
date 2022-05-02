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

        'UI.AppBar.Search': 'Search...',
        'UI.MainMenu.SetLanguage': 'Choose language'
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

        'UI.AppBar.Search': '搜索...',
        'UI.MainMenu.SetLanguage': '选择语言'
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