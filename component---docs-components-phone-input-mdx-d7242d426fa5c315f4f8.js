(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"7hyu":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return j}));var a=n("cxan"),o=n("+wNj"),l=n("ERkP"),i=n("ZVZ0"),r=n("9Rvw"),b=n("qbsg"),s=n("gW3n"),p=n("1rf/"),u=n("xhaa"),c=n("sQ7B"),d=n("vD+s"),h=n("x0e6"),m=(n("l1C2"),{});void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/phone_input.mdx"}});var f={_frontmatter:m},O=r.a;function j(e){var t,n,j=e.components,y=Object(o.a)(e,["components"]);return Object(i.b)(O,Object(a.a)({},f,y,{components:j,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"phone-input"},"Phone input"),Object(i.b)(s.a,{type:"alert",mdxType:"StatusLabel"},"Pre-release"),Object(i.b)(s.a,{type:"success",style:{marginLeft:"var(--spacing-xs)"},mdxType:"StatusLabel"},"Accessible"),Object(i.b)(d.a,{mdxType:"LargeParagraph"},"A phone input allows the user to enter phone number values."),Object(i.b)("h2",{id:"principles"},"Principles"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"A label should always be provided with a phone number input."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Make sure that the label is clear and concise. The user should immediately understand what phone number they are supposed to input."))),Object(i.b)("li",{parentName:"ul"},"If a specific phone number format is required, describe the format in the assistive text. ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Generally it is recommended to allow all common formats and fix the format automatically for the user if needed."))),Object(i.b)("li",{parentName:"ul"},"Unless you can fill the input for the user automatically, a default value should not be set.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'A placeholder text is often not used either. If a placeholder is used, it is a good practice to make them easily distinguishable from the actual input. A recommended way to do this is to format the placeholder text like this: "',Object(i.b)("em",{parentName:"li"},"E.g. 0401234567"),'".'))),Object(i.b)("li",{parentName:"ul"},"If a country code must be inputted, a separate ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/components/dropdown#combobox-single-selection"}),"HDS Combobox input")," should be used alongside the phone number input.")),Object(i.b)("h2",{id:"accessibility"},"Accessibility"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"HDS Phone number input supports HTML input ",Object(i.b)("inlineCode",{parentName:"li"},"pattern")," attribute. It can be used to specify an exact format for the phone number.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Note that pattern is not visible to regular users in any way.")," Some of the screen readers informs the user if the input does not match the pattern. This attribute mostly increases user experience for screen reader users. "))),Object(i.b)("li",{parentName:"ul"},"If multiple phone numbers are asked in the same view, make sure they are labelled descriptively or have an extra fieldset label linked to the input with ",Object(i.b)("inlineCode",{parentName:"li"},"aria-desribedby"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You can view an example of this below in ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#with-a-country-code-selection"}),"phone input with a country code selection variant"))))),Object(i.b)("h2",{id:"usage-and-variations"},"Usage and variations"),Object(i.b)("h3",{id:"default"},"Default"),Object(i.b)("p",null,"A default variant of the phone number input."),Object(i.b)("p",null,"Note! Default value is used here for demonstration purposes. It should not be used unless the input can be automatically filled for the user."),Object(i.b)(b.c,{__position:2,__code:'<PhoneInput\n  defaultValue="0451234567"\n  helperText="Assistive text"\n  label="Phone number"\n  required\n  style={{ maxWidth: \'320px\' }}\n/>',__scope:(t={props:y,DefaultLayout:r.a,Playground:b.c,PhoneInput:p.a,Combobox:u.a,StatusLabel:s.a,ColorBox:c.a,LargeParagraph:d.a,Text:h.a},t.DefaultLayout=r.a,t._frontmatter=m,t),mdxType:"Playground"},Object(i.b)(p.a,{defaultValue:"0451234567",helperText:"Assistive text",label:"Phone number",required:!0,style:{maxWidth:"320px"},mdxType:"PhoneInput"})),Object(i.b)("h4",{id:"core-code-example"},"Core code example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<div class="hds-text-input">\n  <label for="input" class="hds-text-input__label">\n    Label\n    <span class="hds-text-input__required">*</span>\n  </label>\n  <div class="hds-text-input__input-wrapper">\n    <input\n      id="input1"\n      class="hds-text-input__input"\n      type="tel"\n      autocomplete="tel"\n      value="0451234567"\n    />\n  </div>\n  <span class="hds-text-input__helper-text">Assistive text</span>\n</div>\n')),Object(i.b)("h4",{id:"react-code-example"},"React code example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'<PhoneInput\n   defaultValue="0451234567"\n   helperText="Assistive text"\n   label="Phone number"\n   required\n/>\n')),Object(i.b)("h3",{id:"with-a-country-code-selection"},"With a country code selection"),Object(i.b)("p",null,"If a country code is a required input (or otherwise critical), it should be asked in a separate input using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/components/dropdown#combobox-single-selection"}),"HDS Combobox"),". "),Object(i.b)("p",null,"These two input are linked together using a fieldset title and ",Object(i.b)("inlineCode",{parentName:"p"},"aria-desribedby")," attribute. This way is is clear for screen readers which phone number these two inputs relate to."),Object(i.b)(b.c,{__position:3,__code:'() => {\n  const options = [{ label: \'Finland (+358)\' }, { label: \'UK (+46)\' }]\n  return (\n    <>\n      <p id="work-phone" style={{ fontSize: \'18px\', fontWeight: \'bold\' }}>\n        Work phone\n      </p>\n      <div\n        style={{\n          display: \'grid\',\n          gridTemplateColumns: \'200px 300px\',\n          columnGap: \'16px\',\n        }}\n      >\n        <Combobox\n          id="hds-select-1"\n          label="Country code"\n          helper="Assistive text"\n          aria-describedby="work-phone"\n          options={options}\n          defaultValue={{ label: \'Finland (+358)\' }}\n          required\n          toggleButtonAriaLabel="Choose country code"\n        />\n        <PhoneInput\n          id="WithCountryCode"\n          defaultValue="0451234567"\n          aria-describedby="work-phone"\n          label="Phone number"\n          required={true}\n        />\n      </div>\n    </>\n  )\n}',__scope:(n={props:y,DefaultLayout:r.a,Playground:b.c,PhoneInput:p.a,Combobox:u.a,StatusLabel:s.a,ColorBox:c.a,LargeParagraph:d.a,Text:h.a},n.DefaultLayout=r.a,n._frontmatter=m,n),mdxType:"Playground"},(function(){return Object(i.b)(l.Fragment,null,Object(i.b)("p",{id:"work-phone",style:{fontSize:"18px",fontWeight:"bold"}},"Work phone"),Object(i.b)("div",{style:{display:"grid",gridTemplateColumns:"200px 300px",columnGap:"16px"}},Object(i.b)(u.a,{id:"hds-select-1",label:"Country code",helper:"Assistive text","aria-describedby":"work-phone",options:[{label:"Finland (+358)"},{label:"UK (+46)"}],defaultValue:{label:"Finland (+358)"},required:!0,toggleButtonAriaLabel:"Choose country code",mdxType:"Combobox"}),Object(i.b)(p.a,{id:"WithCountryCode",defaultValue:"0451234567","aria-describedby":"work-phone",label:"Phone number",required:!0,mdxType:"PhoneInput"})))})),Object(i.b)("h4",{id:"react-code-example-1"},"React code example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'{() => {\n  const options = [{ label: \'Finland (+358)\' }, { label: \'UK (+46)\' }];\n  return (\n    <>\n      <p id="work-phone" style={{ fontSize: \'18px\', fontWeight: \'bold\' }}>\n        Work phone\n      </p>\n      <div style={{ display: \'grid\', gridTemplateColumns: \'200px 300px\', columnGap: \'16px\' }}>\n        <Combobox\n          id="hds-select-1"\n          label="Country code"\n          helper="Assistive text"\n          aria-describedby="work-phone"\n          options={options}\n          defaultValue={{ label: \'Finland (+358)\' }}\n          required\n          toggleButtonAriaLabel="Choose country code"\n        />\n        <PhoneInput\n          id="WithCountryCode"\n          defaultValue="0451234567"\n          aria-describedby="work-phone"\n          label="Phone number"\n          required={true}\n        />\n      </div>\n    </>\n  )\n}}\n')),Object(i.b)("h2",{id:"demos--api"},"Demos & API"),Object(i.b)("h3",{id:"core"},"Core"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/storybook/core/?path=/story/components-phone-input--default"}),"Phone input in hds-core")),Object(i.b)("h3",{id:"react"},"React"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/storybook/react/?path=/story/components-phoneinput--default"}),"Phone input in hds-react")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/storybook/react/?path=/docs/components-phoneinput--default"}),"PhoneInput API")))}void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/phone_input.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-phone-input-mdx-d7242d426fa5c315f4f8.js.map