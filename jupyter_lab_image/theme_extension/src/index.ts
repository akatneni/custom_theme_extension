import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for myorg/jupyter_lab_custom_theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@myorg/jupyter_lab_custom_theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
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
