(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{z4Ts:function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return O})),o.d(n,"default",(function(){return j}));var a=o("cxan"),t=o("zjfJ"),c=o("+wNj"),i=o("ERkP"),l=o("ZVZ0"),d=o("9Rvw"),r=o("qbsg"),b=o("7UOt"),s=o("U88L"),h=o("uDz0"),p=o("NVVN"),u=o("sQ7B"),m=o("vD+s"),v=o("x0e6"),k=(o("l1C2"),["components"]);function x(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function g(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?x(Object(o),!0).forEach((function(n){Object(t.a)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):x(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var O={};void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!Object.prototype.hasOwnProperty.call(O,"__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/selection_group.mdx"}});var _={_frontmatter:O},f=d.a;function j(e){var n,o,t,x,j=e.components,y=Object(c.a)(e,k);return Object(l.b)(f,Object(a.a)({},_,y,{components:j,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"selection-group"},"Selection group"),Object(l.b)(b.a,{type:"info",mdxType:"StatusLabel"},"Stable"),Object(l.b)(b.a,{type:"success",style:{marginLeft:"var(--spacing-xs)"},mdxType:"StatusLabel"},"Accessible"),Object(l.b)(m.a,{mdxType:"LargeParagraph"},"Selection group allows grouping related form selection elements (such as Checkboxes) to each other."),Object(l.b)("h2",{id:"principles"},"Principles"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Currently, Selection group can contain either Checkboxes or Radio buttons.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If the user can select more than one option from a list, use ",Object(l.b)("a",{parentName:"li",href:"/v1/components/checkbox"},"checkboxes"),"."),Object(l.b)("li",{parentName:"ul"},"If the user can only select one option from a list, use ",Object(l.b)("a",{parentName:"li",href:"/v1/components/radio-button"},"radio buttons"),"."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Default option must be set for Radio button groups.")," For Checkbox groups, this is recommended."),Object(l.b)("li",{parentName:"ul"},"Visible label must be given to the Selection group. The label should be clear and describe the choice the user is about to make."),Object(l.b)("li",{parentName:"ul"},"Selection group can be aligned both vertically and horizontally. ",Object(l.b)("strong",{parentName:"li"},"Vertical alignment is recommended.")," Horizontal alignment can be used when there are less than 4 options.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Note that horizontal Selection groups must not span to multiple lines.")))),Object(l.b)("h2",{id:"accessibility"},"Accessibility"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Aim to make the order of Selection group options as intuitive as possible for assistive technologies. This depends on the group content. An alphabetical ordering is a good starting point, but for some content it can be possible to order them by size (smaller to larger), etc.")),Object(l.b)("h2",{id:"usage--variants"},"Usage & variants"),Object(l.b)("h3",{id:"vertical-group"},"Vertical group"),Object(l.b)("p",null,"Vertical selection group is the recommended way to present grouped form controls. Vertical checkbox groups are generally easier to perceive and read."),Object(l.b)(r.c,{__position:2,__code:'() => {\n  const [checkedItems, setCheckedItems] = React.useState({\n    \'v-checkbox1\': true,\n    \'v-checkbox2\': true,\n  })\n  const onChange = event => {\n    setCheckedItems({\n      ...checkedItems,\n      [event.target.name]: event.target.checked,\n    })\n  }\n  return (\n    <SelectionGroup label="Vertical checkbox group">\n      <Checkbox\n        id="v-checkbox1"\n        name="v-checkbox1"\n        label="Option"\n        checked={checkedItems[\'v-checkbox1\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        id="v-checkbox2"\n        name="v-checkbox2"\n        label="Option"\n        checked={checkedItems[\'v-checkbox2\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        id="v-checkbox3"\n        name="v-checkbox3"\n        label="Option"\n        checked={checkedItems[\'v-checkbox3\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        id="v-checkbox4"\n        name="v-checkbox4"\n        label="Option"\n        checked={checkedItems[\'v-checkbox4\']}\n        onChange={onChange}\n      />\n    </SelectionGroup>\n  )\n}',__scope:(n={props:y,DefaultLayout:d.a,Playground:r.c,SelectionGroup:s.a,RadioButton:h.a,Checkbox:p.a,StatusLabel:b.a,ColorBox:u.a,LargeParagraph:m.a,Text:v.a},n.DefaultLayout=d.a,n._frontmatter=O,n),mdxType:"Playground"},(function(){var e=i.useState({"v-checkbox1":!0,"v-checkbox2":!0}),n=e[0],o=e[1],a=function(e){var a;o(g(g({},n),{},((a={})[e.target.name]=e.target.checked,a)))};return Object(l.b)(s.a,{label:"Vertical checkbox group",mdxType:"SelectionGroup"},Object(l.b)(p.a,{id:"v-checkbox1",name:"v-checkbox1",label:"Option",checked:n["v-checkbox1"],onChange:a,mdxType:"Checkbox"}),Object(l.b)(p.a,{id:"v-checkbox2",name:"v-checkbox2",label:"Option",checked:n["v-checkbox2"],onChange:a,mdxType:"Checkbox"}),Object(l.b)(p.a,{id:"v-checkbox3",name:"v-checkbox3",label:"Option",checked:n["v-checkbox3"],onChange:a,mdxType:"Checkbox"}),Object(l.b)(p.a,{id:"v-checkbox4",name:"v-checkbox4",label:"Option",checked:n["v-checkbox4"],onChange:a,mdxType:"Checkbox"}))})),Object(l.b)("br",null),Object(l.b)(r.c,{__position:4,__code:'() => {\n  const [selectedItem, setSelectedItem] = React.useState(\'1\')\n  const onChange = event => {\n    setSelectedItem(event.target.value)\n  }\n  return (\n    <SelectionGroup label="Vertical radio group">\n      <RadioButton\n        id="v-radio1"\n        name="v-radio"\n        value="1"\n        label="Option"\n        checked={selectedItem === \'1\'}\n        onChange={onChange}\n      />\n      <RadioButton\n        id="v-radio2"\n        name="v-radio"\n        value="2"\n        label="Option"\n        checked={selectedItem === \'2\'}\n        onChange={onChange}\n      />\n      <RadioButton\n        id="v-radio3"\n        name="v-radio"\n        value="3"\n        label="Option"\n        checked={selectedItem === \'3\'}\n        onChange={onChange}\n      />\n      <RadioButton\n        id="v-radio4"\n        name="v-radio"\n        value="4"\n        label="Option"\n        checked={selectedItem === \'4\'}\n        onChange={onChange}\n      />\n    </SelectionGroup>\n  )\n}',__scope:(o={props:y,DefaultLayout:d.a,Playground:r.c,SelectionGroup:s.a,RadioButton:h.a,Checkbox:p.a,StatusLabel:b.a,ColorBox:u.a,LargeParagraph:m.a,Text:v.a},o.DefaultLayout=d.a,o._frontmatter=O,o),mdxType:"Playground"},(function(){var e=i.useState("1"),n=e[0],o=e[1],a=function(e){o(e.target.value)};return Object(l.b)(s.a,{label:"Vertical radio group",mdxType:"SelectionGroup"},Object(l.b)(h.a,{id:"v-radio1",name:"v-radio",value:"1",label:"Option",checked:"1"===n,onChange:a,mdxType:"RadioButton"}),Object(l.b)(h.a,{id:"v-radio2",name:"v-radio",value:"2",label:"Option",checked:"2"===n,onChange:a,mdxType:"RadioButton"}),Object(l.b)(h.a,{id:"v-radio3",name:"v-radio",value:"3",label:"Option",checked:"3"===n,onChange:a,mdxType:"RadioButton"}),Object(l.b)(h.a,{id:"v-radio4",name:"v-radio",value:"4",label:"Option",checked:"4"===n,onChange:a,mdxType:"RadioButton"}))})),Object(l.b)("h4",{id:"core-code-example"},"Core code example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<fieldset class="hds-selection-group">\n  <legend class="hds-selection-group__legend">Vertical checkbox group</legend>\n  <div class="hds-selection-group__items">\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="v-checkbox1" name="v-checkbox1" class="hds-checkbox__input" value="foo" checked />\n        <label for="v-checkbox1" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="v-checkbox2" name="v-checkbox2" class="hds-checkbox__input" value="bar" checked/>\n        <label for="v-checkbox2" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="v-checkbox3" name="v-checkbox3" class="hds-checkbox__input" value="baz" />\n        <label for="v-checkbox3" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="v-checkbox4" name="v-checkbox4" class="hds-checkbox__input" value="qux" />\n        <label for="v-checkbox4" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n  </div>\n</fieldset>\n\n<fieldset class="hds-selection-group">\n  <legend class="hds-selection-group__legend">Vertical radio group</legend>\n  <div class="hds-selection-group__items">\n    <div class="hds-selection-group__item">\n      <div class="hds-radio-button">\n        <input type="radio" id="v-radio1" name="v-radio" class="hds-radio-button__input" name="example" value="foo" checked />\n        <label for="v-radio1" class="hds-radio-button__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-radio-button">\n        <input type="radio" id="v-radio2" name="v-radio" class="hds-radio-button__input" name="example" value="bar" />\n        <label for="v-radio2" class="hds-radio-button__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-radio-button">\n        <input type="radio" id="v-radio3" name="v-radio" class="hds-radio-button__input" name="example" value="baz" />\n        <label for="v-radio3" class="hds-radio-button__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-radio-button">\n        <input type="radio" id="v-radio4" name="v-radio" class="hds-radio-button__input" name="example" value="qux" />\n        <label for="v-radio4" class="hds-radio-button__label">Option</label>\n      </div>\n    </div>\n  </div>\n</fieldset>\n')),Object(l.b)("h4",{id:"react-code-example"},"React code example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},'<SelectionGroup label="Vertical checkbox group">\n  <Checkbox id="v-checkbox1" name="v-checkbox1" label="Option" checked />\n  <Checkbox id="v-checkbox2" name="v-checkbox2" label="Option" checked />\n  <Checkbox id="v-checkbox3" name="v-checkbox3" label="Option" />\n  <Checkbox id="v-checkbox4" name="v-checkbox4" label="Option" />\n</SelectionGroup>\n\n<SelectionGroup label="Vertical radio group">\n  <RadioButton id="v-radio1" name="v-radio" value="1" label="Option" checked />\n  <RadioButton id="v-radio2" name="v-radio" value="2" label="Option" />\n  <RadioButton id="v-radio3" name="v-radio" value="3" label="Option" />\n  <RadioButton id="v-radio4" name="v-radio" value="4" label="Option" />\n</SelectionGroup>\n')),Object(l.b)("h3",{id:"horizontal-group"},"Horizontal group"),Object(l.b)("p",null,"Horizontal selection group can be used in situations where there are only a few (less than 4) options. Otherwise, a vertical alignment is recommended."),Object(l.b)(r.c,{__position:5,__code:'() => {\n  const [checkedItems, setCheckedItems] = React.useState({\n    \'h-checkbox1\': true,\n    \'h-checkbox2\': true,\n  })\n  const onChange = event => {\n    setCheckedItems({\n      ...checkedItems,\n      [event.target.name]: event.target.checked,\n    })\n  }\n  return (\n    <SelectionGroup label="Horizontal checkbox group" direction="horizontal">\n      <Checkbox\n        id="h-checkbox1"\n        name="h-checkbox1"\n        label="Option"\n        checked={checkedItems[\'h-checkbox1\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        id="h-checkbox2"\n        name="h-checkbox2"\n        label="Option"\n        checked={checkedItems[\'h-checkbox2\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        id="h-checkbox3"\n        name="h-checkbox3"\n        label="Option"\n        checked={checkedItems[\'h-checkbox3\']}\n        onChange={onChange}\n      />\n    </SelectionGroup>\n  )\n}',__scope:(t={props:y,DefaultLayout:d.a,Playground:r.c,SelectionGroup:s.a,RadioButton:h.a,Checkbox:p.a,StatusLabel:b.a,ColorBox:u.a,LargeParagraph:m.a,Text:v.a},t.DefaultLayout=d.a,t._frontmatter=O,t),mdxType:"Playground"},(function(){var e=i.useState({"h-checkbox1":!0,"h-checkbox2":!0}),n=e[0],o=e[1],a=function(e){var a;o(g(g({},n),{},((a={})[e.target.name]=e.target.checked,a)))};return Object(l.b)(s.a,{label:"Horizontal checkbox group",direction:"horizontal",mdxType:"SelectionGroup"},Object(l.b)(p.a,{id:"h-checkbox1",name:"h-checkbox1",label:"Option",checked:n["h-checkbox1"],onChange:a,mdxType:"Checkbox"}),Object(l.b)(p.a,{id:"h-checkbox2",name:"h-checkbox2",label:"Option",checked:n["h-checkbox2"],onChange:a,mdxType:"Checkbox"}),Object(l.b)(p.a,{id:"h-checkbox3",name:"h-checkbox3",label:"Option",checked:n["h-checkbox3"],onChange:a,mdxType:"Checkbox"}))})),Object(l.b)("br",null),Object(l.b)(r.c,{__position:7,__code:'() => {\n  const [selectedItem, setSelectedItem] = React.useState(\'1\')\n  const onChange = event => {\n    setSelectedItem(event.target.value)\n  }\n  return (\n    <SelectionGroup label="Horizontal radio group" direction="horizontal">\n      <RadioButton\n        id="h-radio1"\n        name="h-radio"\n        value="1"\n        label="Option"\n        checked={selectedItem === \'1\'}\n        onChange={onChange}\n      />\n      <RadioButton\n        id="h-radio2"\n        name="h-radio"\n        value="2"\n        label="Option"\n        checked={selectedItem === \'2\'}\n        onChange={onChange}\n      />\n      <RadioButton\n        id="h-radio3"\n        name="h-radio"\n        value="3"\n        label="Option"\n        checked={selectedItem === \'3\'}\n        onChange={onChange}\n      />\n    </SelectionGroup>\n  )\n}',__scope:(x={props:y,DefaultLayout:d.a,Playground:r.c,SelectionGroup:s.a,RadioButton:h.a,Checkbox:p.a,StatusLabel:b.a,ColorBox:u.a,LargeParagraph:m.a,Text:v.a},x.DefaultLayout=d.a,x._frontmatter=O,x),mdxType:"Playground"},(function(){var e=i.useState("1"),n=e[0],o=e[1],a=function(e){o(e.target.value)};return Object(l.b)(s.a,{label:"Horizontal radio group",direction:"horizontal",mdxType:"SelectionGroup"},Object(l.b)(h.a,{id:"h-radio1",name:"h-radio",value:"1",label:"Option",checked:"1"===n,onChange:a,mdxType:"RadioButton"}),Object(l.b)(h.a,{id:"h-radio2",name:"h-radio",value:"2",label:"Option",checked:"2"===n,onChange:a,mdxType:"RadioButton"}),Object(l.b)(h.a,{id:"h-radio3",name:"h-radio",value:"3",label:"Option",checked:"3"===n,onChange:a,mdxType:"RadioButton"}))})),Object(l.b)("h4",{id:"core-code-example-1"},"Core code example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<fieldset class="hds-selection-group">\n  <legend class="hds-selection-group__legend">Horizontal checkbox group</legend>\n  <div class="hds-selection-group__items hds-selection-group__items--horizontal">\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="h-checkbox1" name="h-checkbox1" class="hds-checkbox__input" value="foo" checked />\n        <label for="h-checkbox1" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="h-checkbox2" name="h-checkbox2" class="hds-checkbox__input" value="bar" checked/>\n        <label for="h-checkbox2" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="h-checkbox3" name="h-checkbox3" class="hds-checkbox__input" value="baz" />\n        <label for="h-checkbox3" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n  </div>\n</fieldset>\n\n<fieldset class="hds-selection-group">\n  <legend class="hds-selection-group__legend">Horizontal radio group</legend>\n  <div class="hds-selection-group__items hds-selection-group__items--horizontal">\n    <div class="hds-selection-group__item">\n      <div class="hds-radio-button">\n        <input type="radio" id="h-radio1" name="h-radio" class="hds-radio-button__input" name="example" value="foo" checked />\n        <label for="h-radio1" class="hds-radio-button__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-radio-button">\n        <input type="radio" id="h-radio2" name="h-radio" class="hds-radio-button__input" name="example" value="bar" />\n        <label for="h-radio2" class="hds-radio-button__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-radio-button">\n        <input type="radio" id="h-radio3" name="h-radio" class="hds-radio-button__input" name="example" value="baz" />\n        <label for="h-radio3" class="hds-radio-button__label">Option</label>\n      </div>\n    </div>\n  </div>\n</fieldset>\n')),Object(l.b)("h4",{id:"react-code-example-1"},"React code example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},'<SelectionGroup label="Horizontal checkbox group" direction="horizontal">\n  <Checkbox id="h-checkbox1" name="h-checkbox1" label="Option" checked />\n  <Checkbox id="h-checkbox2" name="h-checkbox2" label="Option" checked />\n  <Checkbox id="h-checkbox3" name="h-checkbox3" label="Option" />\n</SelectionGroup>\n\n<SelectionGroup label="Horizontal radio group" direction="horizontal">\n  <RadioButton id="h-radio1" name="h-radio" value="1" label="Option" checked />\n  <RadioButton id="h-radio2" name="h-radio" value="2" label="Option" />\n  <RadioButton id="h-radio3" name="h-radio" value="3" label="Option" />\n</SelectionGroup>\n')),Object(l.b)("h2",{id:"demos--api"},"Demos & API"),Object(l.b)("h3",{id:"core"},"Core"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/v1/storybook/core/?path=/story/components-selection-group--default"},"SelectionGroup in hds-core")),Object(l.b)("h3",{id:"react"},"React"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/v1/storybook/react/?path=/story/components-selectiongroup--default"},"SelectionGroup in hds-react")),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/v1/storybook/react/?path=/docs/components-selectiongroup--default"},"SelectionGroup API")))}void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!Object.prototype.hasOwnProperty.call(j,"__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/selection_group.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-selection-group-mdx-632276d2ed07e69dea2b.js.map