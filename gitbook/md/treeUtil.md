# 平行结构转为树形结构


数据结构拥有id 和parentId 那么id跟parentId一样的作为parentId当前数据的子节点
## 第一步 拿出所有根节点数据

``` javascript
var menu = [
    {id:1, parentId:0, text:'你好'},
    {id:2, parentId:1, text:'你好'},
    {id:3, parentId:2, text:'你好'},
    {id:4, parentId:3, text:'你好'},
    {id:5, parentId:3, text:'你好'},
    {id:6, parentId:4, text:'你好'},
    {id:7, parentId:4, text:'你好'},
]
var rootList = [];
for(const item of menu){
    if(item == 0){
        rootList.push(item);
    }
}
```
## 第二步 去获取根节点下面的子节点



``` javascript
for(const child of rootList){
    const childNode = getChildName(child.id, arr);
    child.children = childNode
}
```
## 第三步 获取子节点函数
``` javascript
function getChildName(id, all) {
    const ret = [];
    for(const item of all){
        if(item.parentId == id){
            ret.push(item)
        }
    }
    for(const children of ret){
        children.children = getChildName(children.id, all);
    }
    return ret;
}
```


``` javascript
    var menu = [
        {id:1, parentId:0, text:'你好'},
        {id:2, parentId:1, text:'你好'},
        {id:3, parentId:2, text:'你好'},
        {id:4, parentId:3, text:'你好'},
        {id:5, parentId:3, text:'你好'},
        {id:6, parentId:4, text:'你好'},
        {id:7, parentId:4, text:'你好'},
    ]

     function treeUtil(arr){
        if(arr.length < 2){
            return arr;
        }
        var ret = [];
        // 获取所有根节点
        for(const item of arr){
            if(item.parentId == 0){
                ret.push(item);
            }
        }
        // 给根节点添加子节点
        for(const item of ret){
            item.children = getChildNode(item.id, arr);

        }
        // 返回需要的数据
        return ret;
    }
    function getChildNode(id, all){
        const ret = [];
        // 如果是子节点保存下来
        for(const item of all){
            if(item.parentId === id){
                ret.push(item);
            }
        }
        //递归下去
        for(const item of ret){
            item.children = getChildNode(item.id, all);
        }
        return ret;
    }

    console.log(treeUtil(menu));
```