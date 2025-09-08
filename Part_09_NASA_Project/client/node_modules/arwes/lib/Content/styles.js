'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles = require('../Heading/styles');

var _styles2 = require('../Paragraph/styles');

var _styles3 = require('../Link/styles');

var _styles4 = require('../Blockquote/styles');

var _styles5 = require('../List/styles');

exports.default = function (theme) {
  return {
    root: {
      '& h1, & h2, & h3, & h4, & h5, & h6': (0, _styles.getHeadingStyles)(theme),
      '& h1': { fontSize: theme.typography.headerSizes.h1 },
      '& h2': { fontSize: theme.typography.headerSizes.h2 },
      '& h3': { fontSize: theme.typography.headerSizes.h3 },
      '& h4': { fontSize: theme.typography.headerSizes.h4 },
      '& h5': { fontSize: theme.typography.headerSizes.h5 },
      '& h6': { fontSize: theme.typography.headerSizes.h6 },

      '& a': (0, _styles3.getLinkStyles)(theme),

      '& p': (0, _styles2.getParagraphStyles)(theme),

      '& blockquote': (0, _styles4.getBlockquoteStyles)(theme),

      '& ul, & ol, & dl': (0, _styles5.getListStyles)(theme),
      '& ul': (0, _styles5.getULStyles)(theme),
      '& ol': (0, _styles5.getOLStyles)(theme),
      '& dl': (0, _styles5.getDLStyles)(theme)
    }
  };
};