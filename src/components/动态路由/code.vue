<template>
  <div>
    <pre>
      <code>
      function readComponent(){
      let dirList = []
      return new Promise((resolve) => {
      fs.readdir(pathName,(err, files) => {
      for(let i = 0;i< files.length;i++){
      let filename = files[i];
      let stats = fs.statSync(resolveDir( `src/components/${filename}`));
      if(stats.isDirectory()){
      dirList.push({key:filename});
      }
      }
      resolve(dirList)
      })
      })
      }
    </code>
    </pre>
    <p>通过node动态读取文件目录</p>
     <pre>
       <code>
      setAllParties({commit}, partList) {
      let list = _.map(partList, function(item) {
      let route = {
      name: item.key,
      path: '/'+item.key,
      component: async () => await import(`@/components/${item.key}`).then(async (partModuleClass) => {

      let part = new partModuleClass.default();

      await commit(types.SET_PARTIES_STORE_ITEM, part);

      return part.component
      })
      };

      return route
      });
      constantRouterMaps[0].children = [...list];
      commit(types.SET_PARTIES, {constantRouterMaps,list} )
      }
    </code>
     </pre>
    <p>以上是动态路由的主要代码</p>
  </div>
</template>
<script>
export default {}
</script>