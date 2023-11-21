import {tagDct, tagOne, tagTwo} from '../../htmlUtils.js';

class UrlapView {
  constructor (szuloElem, leiro) {
    szuloElem.append (
      tagTwo ('form', {class: 'border rounded p-2 mb-2'}, [
        tagDct (leiro, (kulcs, ertek) =>
          tagTwo ('div', {class: 'form-group'}, [
            tagTwo ('label', {for: kulcs}, [ertek.megj]),
            tagOne ('input', {
              type: ertek.type,
              id: kulcs,
              name: kulcs,
              placeholder: ertek.placeholder,
              value: '',
              title: ertek.title,
              class: 'form-control',
            }),
          ])
        ),
        tagOne ('input', {
          type: 'submit',
          value: 'OK',
          class: 'btn btn-primary mt-2',
        }),
      ])
    );
    const FORM_ELEM = szuloElem.children ('form');
    FORM_ELEM.children ('.form-group')
      .children ('input')
      .toArray ()
      .forEach (mezo => {
        const MEZO_ELEM = $ (mezo);
        const INPUT_MEZO_LEIRO = leiro[MEZO_ELEM.attr ('name')];
        switch (MEZO_ELEM.attr ('type')) {
          case 'text':
            MEZO_ELEM.attr ('pattern', INPUT_MEZO_LEIRO.pattern);
            break;
          case 'number':
            MEZO_ELEM.attr ('min', INPUT_MEZO_LEIRO.pattern.min);
            MEZO_ELEM.attr ('max', INPUT_MEZO_LEIRO.pattern.max);
            break;
        }
        MEZO_ELEM.prop ('required', true);
      });
    FORM_ELEM.on ('submit', event => {
      event.preventDefault ();
      if (FORM_ELEM[0].checkValidity ()) {
        // ez valamiért csak [0]-val működik
        const DATA = {};
        FORM_ELEM.find ('input').toArray ().forEach (inputMezo => {
          const INPUT_MEZO_ELEM = $ (inputMezo);
          if (INPUT_MEZO_ELEM.attr ('type') !== 'submit') {
            DATA[INPUT_MEZO_ELEM.attr ('name')] = INPUT_MEZO_ELEM.val ();
          }
        });
        window.dispatchEvent (
          new CustomEvent ('validFormSubmitEvent', {
            detail: {
              data: DATA,
            },
          })
        );
      }
    });
  }
}

export default UrlapView;
