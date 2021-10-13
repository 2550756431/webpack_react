// 使用 `try...catch` 可以捕获用户取消选择时抛出的错误，如果你对错误不在意，不捕获也行
const handle =  showOpenFilePicker({
    multiple: false, // 只选择一个文件
    types: [
        {
            description: 'Navlang Files',
            accept: {
                'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
            },
        },
    ],

    
    excludeAcceptAllOption: true,
});


