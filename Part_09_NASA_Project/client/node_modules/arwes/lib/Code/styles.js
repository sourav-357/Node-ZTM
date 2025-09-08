'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _polished = require('polished');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (theme) {
  var _root;

  return {
    root: (_root = {
      display: 'inline-block',
      verticalAlign: 'middle',
      fontFamily: theme.code.fontFamily,
      fontSize: theme.code.fontSize,
      lineHeight: '1.375',
      direction: 'ltr',
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      mozTabSize: '2',
      oTabSize: '2',
      tabSize: '2',
      webkitHyphens: 'none',
      mozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',

      background: (0, _polished.rgba)(theme.code.background, theme.alpha),
      color: theme.code.color,
      transition: 'all ' + theme.animTime + 'ms ease-out',
      opacity: 1,

      '&$exiting, &$exited': {
        opacity: 0
      },

      'pre&': {
        display: 'block',
        margin: [0, 0, theme.margin],
        padding: theme.padding / 2,
        verticalAlign: 'top',
        overflow: 'auto'
      }
    }, _defineProperty(_root, '& .token.comment,\n        & .token.prolog,\n        & .token.doctype,\n        & .token.cdata,\n        & .token.punctuation', {
      color: theme.code.comment
    }), _defineProperty(_root, '& .token.punctuation', {
      opacity: 1
    }), _defineProperty(_root, '& .token.tag,\n        & .token.operator', {
      color: theme.code.operator
    }), _defineProperty(_root, '& .token.property,\n        & .token.function', {
      color: theme.code.function
    }), _defineProperty(_root, '& .token.tag-id,\n        & .token.selector,\n        & .token.atrule-id', {
      color: theme.code.selector
    }), _defineProperty(_root, '&.language-css,\n        &.language-scss,\n        & .token.boolean,\n        & .token.string,\n        & .token.number,\n        & .token.entity,\n        & .token.url,\n        & .language-css .token.string,\n        & .language-scss .token.string,\n        & .style .token.string,\n        & .token.attr-value,\n        & .token.keyword,\n        & .token.control,\n        & .token.directive,\n        & .token.unit,\n        & .token.statement,\n        & .token.regex,\n        & .token.atrule', {
      color: theme.code.value
    }), _defineProperty(_root, '& .token.atrule,\n        & .token.attr-value,\n        & .token.keyword', {
      color: theme.code.keyword
    }), _defineProperty(_root, '& .token.placeholder,\n        & .token.attr-name,\n        & .token.variable', {
      color: theme.code.variable
    }), _defineProperty(_root, '& .token.deleted', {
      textDecoration: 'line-through'
    }), _defineProperty(_root, '& .token.italic', {
      fontStyle: 'italic'
    }), _defineProperty(_root, '& .token.important,\n        & .token.bold', {
      fontWeight: 'bold'
    }), _defineProperty(_root, '& .token.regex,\n        & .token.important', {
      color: theme.code.operator
    }), _defineProperty(_root, '& .token.entity', {
      cursor: 'help'
    }), _root),

    entering: {},
    entered: {},
    exiting: {},
    exited: {}
  };
};