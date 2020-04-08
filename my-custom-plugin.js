(function() {
  DEFAULT_PANEL_COMMANDS = 'commands'
  DEFAULT_PANEL_DEVICES = 'devices-c'
  DEFAULT_PANEL_OPTIONS = 'options'
  DEFAULT_PANEL_VIEWS = 'views'
  DEFAULT_PANEL_VIEWS_CONTAINER = 'views-container'
  DEFAULT_PANELS = [
    DEFAULT_PANEL_COMMANDS,
    DEFAULT_PANEL_DEVICES,
    DEFAULT_PANEL_OPTIONS,
    DEFAULT_PANEL_VIEWS,
    DEFAULT_PANEL_VIEWS_CONTAINER,
  ]

  DEFAULT_PANEL_VIEWS_BLOCKS_BUTTON = 'open-blocks'
  DEFAULT_PANEL_VIEWS_LAYERS_BUTTON = 'open-layers'
  DEFAULT_PANEL_VIEWS_STYLE_MANAGER_BUTTON = 'open-sm'
  DEFAULT_PANEL_VIEWS_TRAIT_MANAGER_BUTTON = 'open-tm'
  DEFAULT_PANEL_VIEWS_BUTTONS = [
    DEFAULT_PANEL_VIEWS_TRAIT_MANAGER_BUTTON,
    DEFAULT_PANEL_VIEWS_STYLE_MANAGER_BUTTON,
    DEFAULT_PANEL_VIEWS_LAYERS_BUTTON,
    DEFAULT_PANEL_VIEWS_BLOCKS_BUTTON,
  ]

  PANEL_VIEWS_CUSTOM_ORDER_BUTTONS = [
    DEFAULT_PANEL_VIEWS_BLOCKS_BUTTON,
    DEFAULT_PANEL_VIEWS_STYLE_MANAGER_BUTTON,
    DEFAULT_PANEL_VIEWS_TRAIT_MANAGER_BUTTON,
    DEFAULT_PANEL_VIEWS_LAYERS_BUTTON,
  ]

  grapesjs.plugins.add('my-custom-plugin', (editor, options) => {
    const panelManager = editor.Panels;

    // Simple plugin just for reorder the buttons
    // based on => https://github.com/artf/grapesjs/issues/824#issuecomment-362032468

    const buttons = {}

    // get and remove the buttons
    for (let i = 0; i < DEFAULT_PANEL_VIEWS_BUTTONS.length; i++) {
      buttons[DEFAULT_PANEL_VIEWS_BUTTONS[i]] = panelManager.getButton(DEFAULT_PANEL_VIEWS, DEFAULT_PANEL_VIEWS_BUTTONS[i])
      panelManager.removeButton(DEFAULT_PANEL_VIEWS, DEFAULT_PANEL_VIEWS_BUTTONS[i])
    }

    // add the buttons back in a custom order
    for (let i = 0; i < PANEL_VIEWS_CUSTOM_ORDER_BUTTONS.length; i++) {
      panelManager.addButton(DEFAULT_PANEL_VIEWS, buttons[PANEL_VIEWS_CUSTOM_ORDER_BUTTONS[i]]);
    }


    // // remove all default panels
    // for (let i = 0; i < DEFAULT_PANELS.length; i++) {
    //   panelManager.removePanel(DEFAULT_PANELS[i])
    // }
    // // TODO: remove blocks panel from `gjs-preset-webpage` plugin
  })
}());

