import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the kotlin-jupyter-lab extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'kotlin-jupyter-lab:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension kotlin-jupyter-lab is activated!');
  }
};

export default plugin;
