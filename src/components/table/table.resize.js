import {$} from '../../core/dom';

export function resizeHandler($root, event) {
  return new Promise((resolve) => {
    const $resizer = $(event.target);
    const $parent = $resizer.closest('[data-type="resizable"]');
    const coords = $parent.getCoords();
    const type = $resizer.data.resize;
    const sideProp = type === 'col' ? 'bottom' : 'right';
    let value;

    $resizer.css({
      [sideProp]: '-2000px',
    });

    document.onmousemove = (e) => {
      if (type == 'col') {
        const delta = e.pageX - coords.right;
        value = coords.width + delta;
        $resizer.css({right: -delta + 'px'});
      } else {
        const delta = e.pageY - coords.bottom;
        value = coords.height + delta;
        $resizer.css({bottom: -delta + 'px'});
      }
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;

      if (type == 'col') {
        $parent.css({width: value + 'px'});
        $root
            .findAll(`[data-col="${$parent.data.col}"`)
            .forEach((item) => (item.style.width = value + 'px'));
      } else {
        $parent.css({height: value + 'px'});
      }

      resolve({
        value,
        type,
        // id: type === 'col' ? $parent.data.col : $parent.data.row
        id: $parent.data[type]
      })

      $resizer.css({
        bottom: 0,
        right: 0,
      });
    };
  })
}