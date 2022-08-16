module.exports = {
  /**
   * Specifies modules to evaluate before rendering any boards in your project.
   * Refer to https://component-studio.wixanswers.com/en/article/kb14533 for more information.
   */
  boardGlobalSetup: "./_wcs/board-global-setup.ts",

  /**
   * Scopes component discovery. Use include/exclude glob patterns to configure the search scope.
   * Refer to https://component-studio.wixanswers.com/en/article/kb17226 for more information.
   */
  componentsDiscovery: {
    include: ["./src/components"],
    exclude: ["./src/component-templates/"],
  },

  /**
   * Configures default paths for new component and template files.
   * Refer to https://component-studio.wixanswers.com/en/article/kb20017 for more information.
   */
  newComponent: {
    /* This path is required to create new components through WCS. */
    componentsPath: "./src/components",
    /* This path is only required when using custom templates. */
    templatesPath: "./src/component-templates",
  },

  /**
   * Configures the limit of rendered instances for a single component onstage.
   * Refer to https://component-studio.wixanswers.com/kb/en/article/kb34628 for more information.
   */
  safeRender: {
    maxInstancesPerComponent: 1000,
  },

  /**
   * Configures scripts for project users to run from WCS (triggerable and on demand).
   * Refer to https://component-studio.wixanswers.com/en/article/kb36621 for more information.
   */
  scripts: {
    install: {
      title: "Install",
      description: "Run install",
      command: "npm i",
      trigger: ["checkout", "pull", "setup"],
    },
  },

  /**
   * Configures how SVG assets load in WCS.
   * Refer to https://component-studio.wixanswers.com/en/article/kb38231 for more information.
   */
  svgLoader: "both",

  /**
   * static deploay
   */
  staticDeploy: {
    include: ["./src/components/**/*", "./src/component-templates/**/*"],
  },
};
