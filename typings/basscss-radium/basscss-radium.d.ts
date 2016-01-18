// Type definitions for basscss-radium

declare module "basscss-radium" {
  export = {
    body: {
      margin: Number,
      fontFamily: String,
      lineHeight: Number,
      fontSize: String,
      color: String,
      backgroundColor: String,
    },
    img: {
      maxWidth: String,
    },
    svg: {
      maxHeight: String,
    },
    input: {
      fontFamily: String,
      fontSize: String,
      boxSizing: String,
      marginTop: Number,
      marginBottom: Number,
    },
    select: {
      fontFamily: String,
      fontSize: String,
      boxSizing: String,
      marginTop: Number,
      marginBottom: Number,
      lineHeight: Number,
      padding: String,
    },
    textarea: {
      fontFamily: String,
      fontSize: String,
      boxSizing: String,
      marginTop: Number,
      marginBottom: Number,
      lineHeight: Number,
      padding: String,
    },
    fieldset: {
      fontFamily: String,
      fontSize: String,
      boxSizing: String,
      marginTop: Number,
      marginBottom: Number,
    },
    label: {
      verticalAlign: String,
    },
    'input[type=text]': {
      height: String,
      padding: String,
      verticalAlign: String,
      WebkitAppearance: String,
    },
    'input[type=date]': {
      height: String,
      padding: String,
      verticalAlign: String,
      WebkitAppearance: String,
    },
    'input[type=datetime]': {
      height: String,
      padding: String,
      verticalAlign: String,
      WebkitAppearance: String,
    },
    'input[type=datetimeLocal]': {
      height: String,
      padding: String,
      verticalAlign: String,
      WebkitAppearance: String,
    },
    'input[type=email]': {
      height: String,
      padding: String,
      verticalAlign: String,
      WebkitAppearance: String,
    },
    'input[type=month]': {
      height: String,
      padding: String,
      verticalAlign: String,
      WebkitAppearance: String,
    },
    'input[type=Number]': {
      height: String,
      padding: String,
      verticalAlign: String,
      WebkitAppearance: String,
    },
    'input[type=password]': {
      height: String,
      padding: String,
      verticalAlign: String,
      WebkitAppearance: String,
    },
    'input[type=search]': {
      height: String,
      padding: String,
      verticalAlign: String,
      WebkitAppearance: String,
    },
    'input[type=tel]': {
      height: String,
      padding: String,
      verticalAlign: String,
      WebkitAppearance: String,
    },
    'input[type=time]': {
      height: String,
      padding: String,
      verticalAlign: String,
      WebkitAppearance: String,
    },
    'input[type=url]': {
      height: String,
      padding: String,
      verticalAlign: String,
      WebkitAppearance: String,
    },
    'input[type=week]': {
      height: String,
      padding: String,
      verticalAlign: String,
      WebkitAppearance: String,
    },
    'select:not([multiple])': {
      height: String,
      verticalAlign: String,
    },
    table: {
      borderCollapse: String,
      borderSpacing: Number,
      maxWidth: String,
      width: String,
      display: String,
    },
    th: {
      textAlign: String,
      fontWeight: String,
      padding: String,
      lineHeight: String,
      verticalAlign: String,
    },
    td: {
      padding: String,
      lineHeight: String,
      verticalAlign: String,
    },
    h1: {
      fontFamily: String,
      fontWeight: String,
      lineHeight: Number,
      marginTop: String,
      marginBottom: String,
      fontSize: String,
    },
    h2: {
      fontFamily: String,
      fontWeight: String,
      lineHeight: Number,
      marginTop: String,
      marginBottom: String,
      fontSize: String,
    },
    h3: {
      fontFamily: String,
      fontWeight: String,
      lineHeight: Number,
      marginTop: String,
      marginBottom: String,
      fontSize: String,
    },
    h4: {
      fontFamily: String,
      fontWeight: String,
      lineHeight: Number,
      marginTop: String,
      marginBottom: String,
      fontSize: String,
    },
    h5: {
      fontFamily: String,
      fontWeight: String,
      lineHeight: Number,
      marginTop: String,
      marginBottom: String,
      fontSize: String,
    },
    h6: {
      fontFamily: String,
      fontWeight: String,
      lineHeight: Number,
      marginTop: String,
      marginBottom: String,
      fontSize: String,
    },
    p: {
      marginTop: Number,
      marginBottom: String,
    },
    dl: {
      marginTop: Number,
      marginBottom: String,
    },
    ol: {
      marginTop: Number,
      marginBottom: String,
    },
    ul: {
      marginTop: Number,
      marginBottom: String,
    },
    pre: {
      fontFamily: String,
      fontSize: String,
      marginTop: Number,
      marginBottom: String,
      overflowX: String,
      backgroundColor: String,
      borderRadius: Number,
    },
    code: {
      fontFamily: String,
      fontSize: String,
      backgroundColor: String,
      borderRadius: Number,
    },
    samp: {
      fontFamily: String,
      fontSize: String,
    },
    a: {
      color: String,
      textDecoration: String,
      ':hover': {
        textDecoration: String,
      },
    },
    hr: {
      border: Number,
      borderBottomStyle: String,
      borderBottomWidth: Number,
      borderBottomColor: String,
    },
    field: {
      borderStyle: String,
      borderWidth: Number,
      borderColor: String,
      borderRadius: Number,
      ':focus': {
        outline: String,
        borderColor: String,
        boxShadow: String,
      },
    },
    fieldIsFocused: {
      outline: String,
      borderColor: String,
      boxShadow: String,
    },
    'field:disabled': {
      backgroundColor: String,
      opacity: Number,
    },
    fieldIsDisabled: {
      backgroundColor: String,
      opacity: Number,
    },
    'field:readOnly:not(select)': {
      backgroundColor: String,
    },
    fieldIsReadOnly: {
      backgroundColor: String,
    },
    fieldIsSuccess: {
      borderColor: String,
      ':focus': {
        boxShadow: String,
      },
    },
    fieldIsSuccessIsFocused: {
      boxShadow: String,
    },
    fieldIsWarning: {
      borderColor: String,
      ':focus': {
        boxShadow: String,
      },
    },
    fieldIsWarningIsFocused: {
      boxShadow: String,
    },
    'field:invalid': {
      borderColor: String,
    },
    fieldIsError: {
      borderColor: String,
      ':focus': {
        boxShadow: String,
      },
    },
    'field:invalid:focus': {
      boxShadow: String,
    },
    'field:invalidIsFocused': {
      boxShadow: String,
    },
    fieldIsErrorIsFocused: {
      boxShadow: String,
    },
    tableLightTh: {
      borderBottomWidth: Number,
      borderBottomStyle: String,
      borderBottomColor: String,
    },
    tableLightTd: {
      borderBottomWidth: Number,
      borderBottomStyle: String,
      borderBottomColor: String,
    },
    'tableLightTr:lastChildTd': {
      borderBottom: Number,
    },
    btn: {
      fontFamily: String,
      fontSize: String,
      fontWeight: String,
      textDecoration: String,
      cursor: String,
      display: String,
      lineHeight: String,
      padding: String,
      margin: Number,
      height: String,
      border: String,
      verticalAlign: String,
      WebkitAppearance: String,
      color: String,
      backgroundColor: String,
      ':hover': {
        textDecoration: String,
      },
      ':focus': {
        outline: String,
        borderColor: String,
        boxShadow: String,
      },
    },
    '::MozFocusInner': {
      border: Number,
      padding: Number,
    },
    btnPrimary: {
      color: String,
      backgroundColor: String,
      borderRadius: Number,
      ':hover': {
        boxShadow: String,
      },
      ':active': {
        boxShadow: String,
      },
    },
    'btnPrimary:disabled': {
      opacity: Number,
    },
    btnPrimaryIsDisabled: {
      opacity: Number,
    },
    btnOutline: {
      ':hover': {
        borderColor: String,
        boxShadow: String,
      },
      borderRadius: Number,
      ':active': {
        boxShadow: String,
      },
    },
    'btnOutline:disabled': {
      opacity: Number,
    },
    btnOutlineIsDisabled: {
      opacity: Number,
    },
    bold: {
      fontWeight: String,
    },
    regular: {
      fontWeight: String,
    },
    italic: {
      fontStyle: String,
    },
    caps: {
      textTransform: String,
      letterSpacing: String,
    },
    leftAlign: {
      textAlign: String,
    },
    center: {
      textAlign: String,
    },
    rightAlign: {
      textAlign: String,
    },
    justify: {
      textAlign: String,
    },
    nowrap: {
      whiteSpace: String,
    },
    breakWord: {
      wordWrap: String,
    },
    truncate: {
      maxWidth: String,
      overflow: String,
      textOverflow: String,
      whiteSpace: String,
    },
    listReset: {
      listStyle: String,
      paddingLeft: Number,
    },
    inline: {
      display: String,
    },
    block: {
      display: String,
    },
    inlineBlock: {
      display: String,
    },
    tableCell: {
      display: String,
    },
    overflowHidden: {
      overflow: String,
    },
    overflowScroll: {
      overflow: String,
    },
    overflowAuto: {
      overflow: String,
    },
    'clearfix:before': {
      content: String,
      display: String,
    },
    'clearfix:after': {
      content: String,
      display: String,
      clear: String,
    },
    left: {
      float: String,
    },
    right: {
      float: String,
    },
    fit: {
      maxWidth: String,
    },
    borderBox: {
      boxSizing: String,
    },
    alignBaseline: {
      verticalAlign: String,
    },
    alignTop: {
      verticalAlign: String,
    },
    alignMiddle: {
      verticalAlign: String,
    },
    alignBottom: {
      verticalAlign: String,
    },
    m0: {
      margin: Number,
    },
    mt0: {
      marginTop: Number,
    },
    mr0: {
      marginRight: Number,
    },
    mb0: {
      marginBottom: Number,
    },
    ml0: {
      marginLeft: Number,
    },
    m1: {
      margin: String,
    },
    mt1: {
      marginTop: String,
    },
    mr1: {
      marginRight: String,
    },
    mb1: {
      marginBottom: String,
    },
    ml1: {
      marginLeft: String,
    },
    m2: {
      margin: String,
    },
    mt2: {
      marginTop: String,
    },
    mr2: {
      marginRight: String,
    },
    mb2: {
      marginBottom: String,
    },
    ml2: {
      marginLeft: String,
    },
    m3: {
      margin: String,
    },
    mt3: {
      marginTop: String,
    },
    mr3: {
      marginRight: String,
    },
    mb3: {
      marginBottom: String,
    },
    ml3: {
      marginLeft: String,
    },
    m4: {
      margin: String,
    },
    mt4: {
      marginTop: String,
    },
    mr4: {
      marginRight: String,
    },
    mb4: {
      marginBottom: String,
    },
    ml4: {
      marginLeft: String,
    },
    mxn1: {
      marginLeft: String,
      marginRight: String,
    },
    mxn2: {
      marginLeft: String,
      marginRight: String,
    },
    mxn3: {
      marginLeft: String,
      marginRight: String,
    },
    mxn4: {
      marginLeft: String,
      marginRight: String,
    },
    mxAuto: {
      marginLeft: String,
      marginRight: String,
    },
    p0: {
      padding: Number,
    },
    p1: {
      padding: String,
    },
    py1: {
      paddingTop: String,
      paddingBottom: String,
    },
    px1: {
      paddingLeft: String,
      paddingRight: String,
    },
    p2: {
      padding: String,
    },
    py2: {
      paddingTop: String,
      paddingBottom: String,
    },
    px2: {
      paddingLeft: String,
      paddingRight: String,
    },
    p3: {
      padding: String,
    },
    py3: {
      paddingTop: String,
      paddingBottom: String,
    },
    px3: {
      paddingLeft: String,
      paddingRight: String,
    },
    p4: {
      padding: String,
    },
    py4: {
      paddingTop: String,
      paddingBottom: String,
    },
    px4: {
      paddingLeft: String,
      paddingRight: String,
    },
    relative: {
      position: String,
    },
    absolute: {
      position: String,
    },
    fixed: {
      position: String,
    },
    top0: {
      top: Number,
    },
    right0: {
      right: Number,
    },
    bottom0: {
      bottom: Number,
    },
    left0: {
      left: Number,
    },
    z1: {
      zIndex: Number,
    },
    z2: {
      zIndex: Number,
    },
    z3: {
      zIndex: Number,
    },
    z4: {
      zIndex: Number,
    },
    smShow: {
      display: String,
      '@media (min-width: 40em)': {
        display: String,
      },
    },
    mdShow: {
      display: String,
      '@media (min-width: 52em)': {
        display: String,
      },
    },
    lgShow: {
      display: String,
      '@media (min-width: 64em)': {
        display: String,
      },
    },
    smHide: {
      '@media (min-width: 40em)': {
        display: String,
      },
    },
    mdHide: {
      '@media (min-width: 52em)': {
        display: String,
      },
    },
    lgHide: {
      '@media (min-width: 64em)': {
        display: String,
      },
    },
    displayNone: {
      display: String,
    },
    hide: {
      position: String,
      height: Number,
      width: Number,
      overflow: String,
      clip: String,
    },
    container: {
      maxWidth: String,
      marginLeft: String,
      marginRight: String,
    },
    col: {
      float: String,
      boxSizing: String,
    },
    colRight: {
      float: String,
      boxSizing: String,
    },
    col1: {
      width: String,
    },
    col2: {
      width: String,
    },
    col3: {
      width: String,
    },
    col4: {
      width: String,
    },
    col5: {
      width: String,
    },
    col6: {
      width: String,
    },
    col7: {
      width: String,
    },
    col8: {
      width: String,
    },
    col9: {
      width: String,
    },
    col10: {
      width: String,
    },
    col11: {
      width: String,
    },
    col12: {
      width: String,
    },
    smCol: {
      '@media (min-width: 40em)': {
        float: String,
        boxSizing: String,
      },
    },
    smColRight: {
      '@media (min-width: 40em)': {
        float: String,
        boxSizing: String,
      },
    },
    smCol1: {
      '@media (min-width: 40em)': {
        width: String,
      },
    },
    smCol2: {
      '@media (min-width: 40em)': {
        width: String,
      },
    },
    smCol3: {
      '@media (min-width: 40em)': {
        width: String,
      },
    },
    smCol4: {
      '@media (min-width: 40em)': {
        width: String,
      },
    },
    smCol5: {
      '@media (min-width: 40em)': {
        width: String,
      },
    },
    smCol6: {
      '@media (min-width: 40em)': {
        width: String,
      },
    },
    smCol7: {
      '@media (min-width: 40em)': {
        width: String,
      },
    },
    smCol8: {
      '@media (min-width: 40em)': {
        width: String,
      },
    },
    smCol9: {
      '@media (min-width: 40em)': {
        width: String,
      },
    },
    smCol10: {
      '@media (min-width: 40em)': {
        width: String,
      },
    },
    smCol11: {
      '@media (min-width: 40em)': {
        width: String,
      },
    },
    smCol12: {
      '@media (min-width: 40em)': {
        width: String,
      },
    },
    mdCol: {
      '@media (min-width: 52em)': {
        float: String,
        boxSizing: String,
      },
    },
    mdColRight: {
      '@media (min-width: 52em)': {
        float: String,
        boxSizing: String,
      },
    },
    mdCol1: {
      '@media (min-width: 52em)': {
        width: String,
      },
    },
    mdCol2: {
      '@media (min-width: 52em)': {
        width: String,
      },
    },
    mdCol3: {
      '@media (min-width: 52em)': {
        width: String,
      },
    },
    mdCol4: {
      '@media (min-width: 52em)': {
        width: String,
      },
    },
    mdCol5: {
      '@media (min-width: 52em)': {
        width: String,
      },
    },
    mdCol6: {
      '@media (min-width: 52em)': {
        width: String,
      },
    },
    mdCol7: {
      '@media (min-width: 52em)': {
        width: String,
      },
    },
    mdCol8: {
      '@media (min-width: 52em)': {
        width: String,
      },
    },
    mdCol9: {
      '@media (min-width: 52em)': {
        width: String,
      },
    },
    mdCol10: {
      '@media (min-width: 52em)': {
        width: String,
      },
    },
    mdCol11: {
      '@media (min-width: 52em)': {
        width: String,
      },
    },
    mdCol12: {
      '@media (min-width: 52em)': {
        width: String,
      },
    },
    lgCol: {
      '@media (min-width: 64em)': {
        float: String,
        boxSizing: String,
      },
    },
    lgColRight: {
      '@media (min-width: 64em)': {
        float: String,
        boxSizing: String,
      },
    },
    lgCol1: {
      '@media (min-width: 64em)': {
        width: String,
      },
    },
    lgCol2: {
      '@media (min-width: 64em)': {
        width: String,
      },
    },
    lgCol3: {
      '@media (min-width: 64em)': {
        width: String,
      },
    },
    lgCol4: {
      '@media (min-width: 64em)': {
        width: String,
      },
    },
    lgCol5: {
      '@media (min-width: 64em)': {
        width: String,
      },
    },
    lgCol6: {
      '@media (min-width: 64em)': {
        width: String,
      },
    },
    lgCol7: {
      '@media (min-width: 64em)': {
        width: String,
      },
    },
    lgCol8: {
      '@media (min-width: 64em)': {
        width: String,
      },
    },
    lgCol9: {
      '@media (min-width: 64em)': {
        width: String,
      },
    },
    lgCol10: {
      '@media (min-width: 64em)': {
        width: String,
      },
    },
    lgCol11: {
      '@media (min-width: 64em)': {
        width: String,
      },
    },
    lgCol12: {
      '@media (min-width: 64em)': {
        width: String,
      },
    },
    flex: {
      display: String,
    },
    flexColumn: {
      WebkitBoxOrient: String,
      WebkitBoxDirection: String,
      WebkitFlexDirection: String,
      msFlexDirection: String,
      flexDirection: String,
    },
    flexWrap: {
      WebkitFlexWrap: String,
      msFlexWrap: String,
      flexWrap: String,
    },
    flexCenter: {
      WebkitBoxAlign: String,
      WebkitAlignItems: String,
      msFlexAlign: String,
      alignItems: String,
    },
    flexBaseline: {
      WebkitBoxAlign: String,
      WebkitAlignItems: String,
      msFlexAlign: String,
      alignItems: String,
    },
    flexStretch: {
      WebkitBoxAlign: String,
      WebkitAlignItems: String,
      msFlexAlign: String,
      alignItems: String,
    },
    flexStart: {
      WebkitBoxAlign: String,
      WebkitAlignItems: String,
      msFlexAlign: String,
      alignItems: String,
    },
    flexEnd: {
      WebkitBoxAlign: String,
      WebkitAlignItems: String,
      msFlexAlign: String,
      alignItems: String,
    },
    flexJustify: {
      WebkitBoxPack: String,
      WebkitJustifyContent: String,
      msFlexPack: String,
      justifyContent: String,
    },
    flexAuto: {
      WebkitBoxFlex: Number,
      WebkitFlex: String,
      msFlex: String,
      flex: String,
      minWidth: Number,
      minHeight: Number,
    },
    flexGrow: {
      WebkitBoxFlex: Number,
      WebkitFlex: String,
      msFlex: String,
      flex: String,
    },
    flexNone: {
      WebkitBoxFlex: Number,
      WebkitFlex: String,
      msFlex: String,
      flex: String,
    },
    flexFirst: {
      WebkitBoxOrdinalGroup: Number,
      WebkitOrder: Number,
      msFlexOrder: Number,
      order: Number,
    },
    flexLast: {
      WebkitBoxOrdinalGroup: Number,
      WebkitOrder: Number,
      msFlexOrder: Number,
      order: Number,
    },
    smFlex: {
      '@media (min-width: 40em)': {
        display: String,
      },
    },
    mdFlex: {
      '@media (min-width: 52em)': {
        display: String,
      },
    },
    lgFlex: {
      '@media (min-width: 64em)': {
        display: String,
      },
    },
    border: {
      borderStyle: String,
      borderWidth: Number,
      borderColor: String,
    },
    borderTop: {
      borderTopStyle: String,
      borderTopWidth: Number,
      borderTopColor: String,
    },
    borderRight: {
      borderRightStyle: String,
      borderRightWidth: Number,
      borderRightColor: String,
    },
    borderBottom: {
      borderBottomStyle: String,
      borderBottomWidth: Number,
      borderBottomColor: String,
    },
    borderLeft: {
      borderLeftStyle: String,
      borderLeftWidth: Number,
      borderLeftColor: String,
    },
    borderNone: {
      border: Number,
    },
    rounded: {
      borderRadius: Number,
    },
    circle: {
      borderRadius: String,
    },
    roundedTop: {
      borderRadius: String,
    },
    roundedRight: {
      borderRadius: String,
    },
    roundedBottom: {
      borderRadius: String,
    },
    roundedLeft: {
      borderRadius: String,
    },
    notRounded: {
      borderRadius: Number,
    },
    black: {
      color: String,
    },
    gray: {
      color: String,
    },
    silver: {
      color: String,
    },
    white: {
      color: String,
    },
    aqua: {
      color: String,
    },
    blue: {
      color: String,
    },
    navy: {
      color: String,
    },
    teal: {
      color: String,
    },
    green: {
      color: String,
    },
    olive: {
      color: String,
    },
    lime: {
      color: String,
    },
    yellow: {
      color: String,
    },
    orange: {
      color: String,
    },
    red: {
      color: String,
    },
    fuchsia: {
      color: String,
    },
    purple: {
      color: String,
    },
    maroon: {
      color: String,
    },
    colorInherit: {
      color: String,
    },
    muted: {
      opacity: Number,
    },
    bgBlack: {
      backgroundColor: String,
    },
    bgGray: {
      backgroundColor: String,
    },
    bgSilver: {
      backgroundColor: String,
    },
    bgWhite: {
      backgroundColor: String,
    },
    bgAqua: {
      backgroundColor: String,
    },
    bgBlue: {
      backgroundColor: String,
    },
    bgNavy: {
      backgroundColor: String,
    },
    bgTeal: {
      backgroundColor: String,
    },
    bgGreen: {
      backgroundColor: String,
    },
    bgOlive: {
      backgroundColor: String,
    },
    bgLime: {
      backgroundColor: String,
    },
    bgYellow: {
      backgroundColor: String,
    },
    bgOrange: {
      backgroundColor: String,
    },
    bgRed: {
      backgroundColor: String,
    },
    bgFuchsia: {
      backgroundColor: String,
    },
    bgPurple: {
      backgroundColor: String,
    },
    bgMaroon: {
      backgroundColor: String,
    },
    bgDarken1: {
      backgroundColor: String,
    },
    bgDarken2: {
      backgroundColor: String,
    },
    bgDarken3: {
      backgroundColor: String,
    },
    bgDarken4: {
      backgroundColor: String,
    },
    bgLighten1: {
      backgroundColor: String,
    },
    bgLighten2: {
      backgroundColor: String,
    },
    bgLighten3: {
      backgroundColor: String,
    },
    bgLighten4: {
      backgroundColor: String,
    }
  };
}
