//在 package.json中配置 
//
/*
tree shaking 去掉无效代码，减少代码体积 (会干掉css 或者 @babel/pollfy)
*/ 
//  sideEffects:false  表示 所有文件都可以进行tree shaking
// ["*.css"]              不对css文件进行tree shaking