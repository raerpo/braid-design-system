import { style } from 'sku/treat';

export const underlineAlways = style({
  textDecoration: 'underline',
  textUnderlinePosition: 'under',
});

export const underlineOnHoverOnly = style({
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const visited = style((theme) => ({
  ':visited': {
    color: theme.color.foreground.linkVisited,
  },
}));

export const button = style({});
export const focusOverlay = style({
  selectors: {
    [`${button}:focus ~ &`]: {
      opacity: 1,
    },
  },
});
