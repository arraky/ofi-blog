"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[90878],{3905:(n,e,r)=>{r.d(e,{Zo:()=>g,kt:()=>p});var i=r(67294);function t(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,i)}return r}function x(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){t(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function o(n,e){if(null==n)return{};var r,i,t=function(n,e){if(null==n)return{};var r,i,t={},a=Object.keys(n);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(t[r]=n[r]);return t}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var l=i.createContext({}),d=function(n){var e=i.useContext(l),r=e;return n&&(r="function"==typeof n?n(e):x(x({},e),n)),r},g=function(n){var e=d(n.components);return i.createElement(l.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(n,e){var r=n.components,t=n.mdxType,a=n.originalType,l=n.parentName,g=o(n,["components","mdxType","originalType","parentName"]),m=d(r),p=t,c=m["".concat(l,".").concat(p)]||m[p]||s[p]||a;return r?i.createElement(c,x(x({ref:e},g),{},{components:r})):i.createElement(c,x({ref:e},g))}));function p(n,e){var r=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var a=r.length,x=new Array(a);x[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o.mdxType="string"==typeof n?n:t,x[1]=o;for(var d=2;d<a;d++)x[d]=r[d];return i.createElement.apply(null,x)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3924:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>x,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=r(83117),t=(r(67294),r(3905));const a={sidebar_custom_props:{id:"0eca41a3-4791-46d2-9778-3cc771f7bc32"}},x="Conways Game of Life",o={unversionedId:"Programmieren-1/snippets/Conway",id:"Programmieren-1/snippets/Conway",title:"Conways Game of Life",description:"Einige Figuren",source:"@site/docs/Programmieren-1/snippets/Conway.md",sourceDirName:"Programmieren-1/snippets",slug:"/Programmieren-1/snippets/Conway",permalink:"/Programmieren-1/snippets/Conway",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/Programmieren-1/snippets/Conway.md",tags:[],version:"current",lastUpdatedAt:1673198597,formattedLastUpdatedAt:"8. Jan. 2023",frontMatter:{sidebar_custom_props:{id:"0eca41a3-4791-46d2-9778-3cc771f7bc32"}},sidebar:"sidebar",previous:{title:"PyGame Tutorials",permalink:"/Programmieren-1/PyGame/tutorials"},next:{title:"Grid",permalink:"/Programmieren-1/snippets/Grid"}},l={},d=[{value:"Einige Figuren",id:"einige-figuren",level:2},{value:"Spaceships",id:"spaceships",level:3},{value:"Horizintale Bewegungen",id:"horizintale-bewegungen",level:4}],g=(s="Comment",function(n){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",n)});var s;const m={toc:d};function p(n){let{components:e,...r}=n;return(0,t.kt)("wrapper",(0,i.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("div",{className:"commentable"},(0,t.kt)("h1",{parentName:"div",id:"conways-game-of-life"},"Conways Game of Life"),(0,t.kt)(g,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from grid import Grid\nfrom game import gameloop, sleep\n\nGrid.setup(500, 500)\nSIZE = (20, 20)\ngrid = Grid(SIZE[0], SIZE[1])\n\n# blinker\ngrid[1][2] = 'black'\ngrid[2][2] = 'black'\ngrid[3][2] = 'black'\n\n\n# glider\ngrid[4][14] = 'black'\ngrid[5][14] = 'black'\ngrid[6][14] = 'black'\ngrid[6][13] = 'black'\ngrid[5][12] = 'black'\n\ndef neighbours(grid, x, y):\n    nb = []\n    dim_x = len(grid[0])\n    dim_y = len(grid)\n    for i in range(-1, 2):\n        for j in range(-1, 2):\n            if not (i == 0 and j == 0):\n                ny = (y + i) % dim_y\n                nx = (x + j) % dim_x\n                nb.append(grid[ny][nx])\n    return nb\n\ndef live_neighbours(grid, x, y):\n    s = 0\n    for cell in neighbours(grid, x, y):\n        if cell == 'black':\n            s += 1\n    return s\n\n@gameloop\ndef evolution(dt):\n    current = grid.tolist()\n    for x in range(grid.size[1]):\n        for y in range(grid.size[0]):\n            alive = live_neighbours(current, x, y)\n            if current[y][x] == 'black' and 2 <= alive <= 3:\n                grid[y][x] = 'black'\n            elif current[y][x] != 'black' and alive == 3:\n                grid[y][x] = 'black'\n            else:\n                grid[y][x] = ''\n    sleep(50)\n\nevolution()\n")),(0,t.kt)("div",{className:"commentable"},(0,t.kt)("h2",{parentName:"div",id:"einige-figuren"},"Einige Figuren"),(0,t.kt)(g,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from grid import Grid\nfrom game import gameloop, sleep\n\ngrid = Grid.from_bin_text('''\n  \n   \n  xx      x              xx\n  xx      x     xxx      xx\n          x    xxx         xx\n                           xx           xx\n                                       x  x  \n                                        xx\n                          \n                          \n       xxx   xxx                      xx\n                                     x  x\n     x    x x    x                    x x\n     x    x x    x                     x\n     x    x x    x\n       xxx   xxx\n                                   xx\n       xxx   xxx                   x x\n     x    x x    x                  x\n     x    x x    x\n     x    x x    x\n                                    x\n       xxx   xxx                   x x\n                                    x\n       \n      \n      \n      \n      \n      \n      \n       xxx\n       x x\n       xxx\n       xxx              xxxxxxxx\n       xxx              x xxxx x\n       xxx              xxxxxxxx\n       x x\n       xxx\n    \n    \n    \n    \n    \n    \n       \n''')\n\ndef neighbours(grid, x, y):\n    nb = []\n    dim_x = len(grid[0])\n    dim_y = len(grid)\n    for i in range(-1, 2):\n        for j in range(-1, 2):\n            if not (i == 0 and j == 0):\n                ny = (y + i) % dim_y\n                nx = (x + j) % dim_x\n                nb.append(grid[ny][nx])\n    return nb\n\ndef live_neighbours(grid, x, y):\n    s = 0\n    for cell in neighbours(grid, x, y):\n        if cell == 'black':\n            s += 1\n    return s\n\n@gameloop\ndef evolution(dt):\n    current = grid.tolist()\n    for x in range(grid.size[1]):\n        for y in range(grid.size[0]):\n            alive = live_neighbours(current, x, y)\n            if current[y][x] == 'black' and 2 <= alive <= 3:\n                grid[y][x] = 'black'\n            elif current[y][x] != 'black' and alive == 3:\n                grid[y][x] = 'black'\n            else:\n                grid[y][x] = ''\n    sleep(50)\n\nevolution()\n")),(0,t.kt)("div",{className:"commentable"},(0,t.kt)("h3",{parentName:"div",id:"spaceships"},"Spaceships"),(0,t.kt)(g,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from grid import Grid\nfrom game import gameloop, sleep\n\ngrid = Grid.from_bin_text('''\n       x\n        x\n      xxx \n              x\n               x\n             xxx \n                     x\n                      x\n                    xxx \n                              x\n                               x\n                             xxx       \n''')\n\n\ndef neighbours(grid, x, y):\n    nb = []\n    dim_x = len(grid[0])\n    dim_y = len(grid)\n    for i in range(-1, 2):\n        for j in range(-1, 2):\n            if not (i == 0 and j == 0):\n                ny = (y + i) % dim_y\n                nx = (x + j) % dim_x\n                nb.append(grid[ny][nx])\n    return nb\n\ndef live_neighbours(grid, x, y):\n    s = 0\n    for cell in neighbours(grid, x, y):\n        if cell == 'black':\n            s += 1\n    return s\n\n@gameloop\ndef evolution(dt):\n    current = grid.tolist()\n    for x in range(grid.size[1]):\n        for y in range(grid.size[0]):\n            alive = live_neighbours(current, x, y)\n            if current[y][x] == 'black' and 2 <= alive <= 3:\n                grid[y][x] = 'black'\n            elif current[y][x] != 'black' and alive == 3:\n                grid[y][x] = 'black'\n            else:\n                grid[y][x] = ''\n    sleep(50)\n\nevolution()\n")),(0,t.kt)("div",{className:"commentable"},(0,t.kt)("h4",{parentName:"div",id:"horizintale-bewegungen"},"Horizintale Bewegungen"),(0,t.kt)(g,{parentName:"div",type:"heading",nr:3,mdxType:"Comment"})),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim",live_py:!0,slim:!0},"from grid import Grid\nfrom game import gameloop, sleep\n\ngrid = Grid.from_bin_text('''\n  \n\n        xxxx\n       x   x\n           x\n       x  x\n   \n   \n   \n xxx   \nxxxxx  \nxxx xx               \n   xx \n       \n       \n       \n       \n           xxxx\n          xxxxxx\n          xxxx xx\n              xx\n       \n       \n''')\n\n\ndef neighbours(grid, x, y):\n    nb = []\n    dim_x = len(grid[0])\n    dim_y = len(grid)\n    for i in range(-1, 2):\n        for j in range(-1, 2):\n            if not (i == 0 and j == 0):\n                ny = (y + i) % dim_y\n                nx = (x + j) % dim_x\n                nb.append(grid[ny][nx])\n    return nb\n\ndef live_neighbours(grid, x, y):\n    s = 0\n    for cell in neighbours(grid, x, y):\n        if cell == 'black':\n            s += 1\n    return s\n\n@gameloop\ndef evolution(dt):\n    current = grid.tolist()\n    for x in range(grid.size[1]):\n        for y in range(grid.size[0]):\n            alive = live_neighbours(current, x, y)\n            if current[y][x] == 'black' and 2 <= alive <= 3:\n                grid[y][x] = 'black'\n            elif current[y][x] != 'black' and alive == 3:\n                grid[y][x] = 'black'\n            else:\n                grid[y][x] = ''\n    sleep(50)\n\nevolution()\n")))}p.isMDXComponent=!0}}]);