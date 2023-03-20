// https://split.js.org/
// Split(['#top', '#bottom'], {
//   direction: 'vertical',
//   sizes: [50, 50],
//   minSize: [58, 150],
//   snapOffset: 10,
//   gutterSize: 1,
//   gutterAlign: 'center',
//     elementStyle: (dimension, size, gutterSize) => ({
//         'flex-basis': `calc(${size}% - ${gutterSize}px)`,
//     }),
//     gutterStyle: (dimension, gutterSize) => ({
//         'flex-basis':  `${gutterSize}px`,
//     }),
// });

Split(['#top', '#bottom'], {
  direction: 'vertical',
  sizes: [60, 40],
  minSize: 100,
  snapOffset: 10,
});

Split(['#left', '#right'], {
  direction: 'horizontal',
  sizes: [60, 40],
  minSize: 500,
  snapOffset: 10,
});