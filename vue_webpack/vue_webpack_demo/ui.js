module.exports = api => {
    // Use the API here...
    console.log("ui_js");
    api.describeConfig({
        // Unique ID for the config
        id: 'org.vue.eslintrc',
        // Displayed name
        name: 'ESLint configuration',
        // Shown below the name
        description: 'Error checking & Code quality',
        // "More info" link
        link: 'https://eslint.org',
        icon: '/_plugin/logo.82b9c7a5.png'
    })

    api.describeTask({
        // RegExp executed on script commands to select which task will be described here
        match: /vue-cli-service serve/,
        description: 'Compiles and hot-reloads for development',
        // "More info" link
        link: 'https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#serve'
    })

}