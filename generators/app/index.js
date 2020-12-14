const Generator = require('yeoman-generator')

module.exports = class extends (
  Generator
) {
  prompting() {
    return this.prompt([
      {
        type: 'input', //回答问题的类型，这里是输入的形式
        name: 'name', // 接受用户回答的键名
        message: 'Your project name', // 问题描述信息
        default: this.appname, // 默认使用项目生成目录名称
      },
    ]).then((answers) => {
      // answers => {name: 'user input value'}
      this.answers = answers
    })
  }
  //生成文件阶段调用writing方法
  writing() {
    // 把templates下面的文件都通过模板转换到目标路径
    const templates = [
      '.browserslistrc',
      '.editorconfig',
      '.env.development',
      '.env.production',
      '.eslintrc.js',
      '.gitignore',
      'babel.config.js',
      'package.json',
      'postcss.config.js',
      'README.md',
      'public/favicon.ico',
      'public/index.html',
      'src/App.vue',
      'src/main.js',
      'src/router.js',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/store/actions.js',
      'src/store/getters.js',
      'src/store/index.js',
      'src/store/mutations.js',
      'src/store/state.js',
      'src/utils/request.js',
      'src/views/About.vue',
      'src/views/Home.vue',
    ]
    templates.forEach(e=>{
      this.fs.copyTpl(
      this.templatePath(e),
      this.destinationPath(e),
      this.answers
      )
    })
  }
}
