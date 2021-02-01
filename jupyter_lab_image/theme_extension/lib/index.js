import { IThemeManager } from '@jupyterlab/apputils';
/**
 * A plugin for myorg/jupyter_lab_custom_theme
 */
const plugin = {
    id: '@myorg/jupyter_lab_custom_theme:plugin',
    requires: [IThemeManager],
    activate: function (app, manager) {
        const style = '@myorg/jupyter_lab_custom_theme/index.css';
        console.log("recompiled");
        manager.register({
            name: 'jupyter_lab_custom_theme',
            isLight: false,
            load: () => manager.loadCSS(style),
            unload: () => Promise.resolve(undefined)
        });
    },
    autoStart: true
};
export default plugin;
//# sourceMappingURL=index.js.map