// ~/.hyper.js - Pastel Theme for Hyper Terminal

module.exports = {
  config: {
    // Basic Appearance Settings
    updateChannel: 'stable',
    fontSize: 13,
    fontFamily: '"FiraCode Nerd Font", Consolas, "DejaVu Sans Mono", Menlo, Monaco, "Courier New", monospace',
    cursorShape: 'BEAM',
    cursorBlink: false,
    padding: '12px 14px',

    // Pastel Color Palette
    foregroundColor: '#E8E6EF', // Off-white pastel text color
    backgroundColor: '#0c1821', // Dark, muted pastel background
    borderColor: '#0c1821',
    colors: {
      // Base colors with pastel hues
      black: '#0c1821',
      red: '#FFADAD',        // Pastel red
      green: '#CAF7E3',      // Pastel green
      yellow: '#FFFFAD',     // Pastel yellow
      blue: '#A2D2FF',       // Pastel blue
      magenta: '#FFB3DE',    // Pastel magenta
      cyan: '#C1F0F6',       // Pastel cyan
      white: '#F8F8F2',      // Soft white
      // Bright versions
      lightBlack: '#4F4F4F', // A gentle dark gray
      lightRed: '#FFADAD',
      lightGreen: '#CAF7E3',
      lightYellow: '#FFFFAD',
      lightBlue: '#A2D2FF',
      lightMagenta: '#FFB3DE',
      lightCyan: '#C1F0F6',
      colorCubes: '#ffffff',
      grayscale: '#E8E6EF'
    },

    // Custom CSS for Hyper window and tabs
    css: `
      /* Main window appearance */
      .hyper_main {
        background-color: #0c1821;
        font-family: 'Iosevka', Consolas, 'DejaVu Sans Mono', Menlo, Monaco, 'Courier New', monospace;
      }
      /* Active tab styling */
      .tab_textActive {
        border-bottom: 2px solid #CDA4DE;  /* Pastel violet accent */
        font-weight: bold;
        color: #FFB3DE;
      }
      /* Tabs bar */
      .hyper_tabs {
        background-color: #4F4F4F;
      }
      /* Cursor styling */
      .cursor-node {
        background-color: #FFB3DE !important;
      }
      /* Header styling */
      .header_header {
        background:rgb(35, 32, 43) !important;
      }
      /* Split pane divider for subtle separation */
      .splitpane_divider {
        background-color: rgba(205, 164, 222, 0.5) !important;
      }
    `,

    // Terminal Specific CSS ensures no unwanted backgrounds behind characters
    termCSS: `
      .xterm-rows span {
        background-color: transparent !important;
      }
    `
  },

  // Plugins (feel free to add or remove plugins based on your preference)
  plugins: [
     // Example: adds a transparency effect
  ],
  localPlugins: ['hyper-opacity'],
  keymaps: {},

  // decorateConfig allows merging or overriding settings from the main config.
  decorateConfig: (config) => {
    // Define pastel constants
    const backgroundColor = '#0c1821';
    const foregroundColor = '#E8E6EF';
    const pastelRed = '#FFADAD';
    const pastelGreen = '#CAF7E3';
    const pastelYellow = '#FFFFAD';
    const pastelBlue = '#A2D2FF';
    const pastelMagenta = '#FFB3DE';
    const pastelCyan = '#C1F0F6';
    const pastelWhite = '#F8F8F2';
    const pastelAccent = '#CDA4DE'; // Accent (pastel violet) for active tab
    const darkGray = '#4F4F4F';

    const colors = {
      black: backgroundColor,
      red: pastelRed,
      green: pastelGreen,
      yellow: pastelYellow,
      blue: pastelBlue,
      magenta: pastelMagenta,
      cyan: pastelCyan,
      white: pastelWhite,
      lightBlack: darkGray,
      lightRed: pastelRed,
      lightGreen: pastelGreen,
      lightYellow: pastelYellow,
      lightBlue: pastelBlue,
      lightMagenta: pastelMagenta,
      lightCyan: pastelCyan,
      colorCubes: '#ffffff',
      grayscale: foregroundColor
    };

    return Object.assign({}, config, {
      foregroundColor,
      backgroundColor,
      borderColor: backgroundColor,
      colors,
      css: `
        ${config.css || ''}
        .hyper_main {
          background-color: ${backgroundColor};
          font-family: 'Hack','Iosevka', Consolas, 'DejaVu Sans Mono', Menlo, Monaco, 'Courier New', monospace;
        }
        .tab_textActive {
          border-bottom: 2px solid ${pastelAccent};
          font-weight: bold;
          color: ${pastelMagenta};
        }
        .hyper_tabs {
          background-color: ${darkGray};
        }
        .cursor-node {
          background-color: ${pastelMagenta} !important;
        }
        .header_header {
          background: ${backgroundColor} !important;
        }
        .splitpane_divider {
          background-color: rgba(205, 164, 222, 0.5) !important;
        }
      `,
      termCSS: `
        ${config.termCSS || ''}
        .xterm-rows span {
          background-color: transparent !important;
        }
      `
    });
  }
};