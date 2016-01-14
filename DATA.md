# DATA
```js
var DATA = module.exports = {}
```
`@TODO: validate table of content`
* [DATA.personal](#personal)
* [DATA.holding](#holding)
* [DATA.bookmarks](#bookmarks)
* [DATA.google](#google)
* [DATA.registrar](#registrar)
* [DATA.zoho](#zoho)
* ...

Below is a list of dummy data, which is necessary for or gathered during the company formation process

## Example Data
<a id="personal"></a>
```js
DATA['personal'] =  {
  'mobilePhone'     : {
    'provider'        : '...',
    'number'          : 'e.g. +44-2345-777-8899',
    'lastMonthBill'   : '<1 month record of PHONE BILL>'
  },
  // [`_BAwCC`][_BAwCC] Bank Account with Credit Card
  'bankAccount' :             {
    'IBAN'                    : '...',
    'BIC'                     : '...',
    'CREDITCARD'              : '...',
    'provider'                : 'e.g. DKB & Paypal',
    'lastMonthBankStatement'  : '<(1 month record of BANK STATEMENT>'
  },
  'europeanResidentialAddress': {
    // [_CRA]: # (Current Residential Adress: "e.g. 12345 CityName - StreetName. XXX")
    'street'                    : '...',
    'postalcode'                : '...',
    'city'                      : '...',
    'region'                    : '...',
    'country'                   : '...'
  }
}
```
<a id="holding"></a>
```js
DATA['holding'] = {
  NAME            : 'foobar',
  FIRM            : DATA['holding'].NAME + ' ltd.',
  DOMAIN          : DATA['holding'].NAME + '.com',
  LOGO            : [
    '<path/or/url/to/logo/filename.svg>',
    '<path/or/url/to/logo/filename.png>'
  ],
  GMAIL           : DATA['accounts'].google.username + '@gmail.com',
  // [CGMA]: mailto:company.name@gmail.com (Company Google Mail Address: "e.g. company.name@gmail.com")
  EMAIL           : DATA['holding'].NAME + '@' + DATA['holding'].DOMAIN
}
```
<a id="bookmarks"></a>
```js
DATA['bookmarks'] = {
  'STACK/': {
    mail          : DATA['accounts'].zoho.URL,
    gmail         : DATA['accounts'].google.URL,
    passwordVault : DATA['accounts'].zoho.vault.URL,
    drive         : DATA['accounts'].google.drive.URL,
    registrar     : DATA['accounts'].registrar.URL
    browser       : 'https://www.google.com/chrome/browser/desktop/'
  },
  'TOOLS/': {
    'Logo Maker': [
      'http://flamingtext.com/',
      'https://www.graphicsprings.com/'
    ],
    'Domain Checker': 'http://whois.domaintools.com/',
    'Ltd. Company Name Checker': 'http://wck2.companieshouse.gov.uk//wcframe?name=accessCompanyInfo'
  }
}
```
<a id="google"></a>
```js
// GOOGLE MAIL PROVIDER LINK
// [GMPL]: http://mail.google.de ("Google Mail Provider Link (URL)")
//         AND: google identity (chrome profile, synced bookmark bar)
// [GMPL.fn]: # (First Name: "e.g. company")
// [GMPL.ln]: # (Last Name: "e.g. Ltd.")
// [GMPL.pw]: # (Password: "e.g. asdfasdf")
// [GMPL.dob]: # (Date of Birth: "e.g. 1/1/1990")
// [GMPL.s]: # (Sex: "e.g. other")
// [GMPL.l]: # (Location: "e.g. UK")
DATA['accounts'].google = {
  LOGIN_URL     : 'https://accounts.google.com/ServiceLogin',
  URL           : 'http://mail.google.de',
  'firstname'   : DATA['holding'].NAME,
  'lastname'    : 'LTD',
  'username'    : DATA['holding'].NAME,
  'password'    : '*******',
  'birthday'    : '<TODAY minus 25 YEARS>',
  'gender'      : 'other',
  'phone'       : DATA['personal'].mobilePhone.number,
  'currentMail' : '', // doesnt exist
  'location'    : 'United Kingdom',
  icon          : DATA['holding'].LOGO[1]
}
DATA['accounts'].google.drive = {
  URL           : 'http://drive.google.com',
  svglogo       : DATA['holding'].LOGO[0],
  pnglogo       : DATA['holding'].LOGO[1]
}
// [GPL]: http://plus.google.com (Google Plus Profile Link (URL): "e.g. ")
DATA['accounts'].google.plus = {
  URL           : 'http://plus.google.com',
  firstname     : DATA['holding'].NAME,
  lastname      : 'LTD',
  gender        : 'decline to state',
  birthday      : '<TODAY>'
}
```
<a id="registrar"></a>
```js
// [CDPL.u]: # (Username for Domain Registrar: "...")
// [CDPL.p]: # (Password for Domain Registrar: "...")
// [CDPL]: # (Company Domain Provider: "e.g. namecheap.com")
// * [`CD`][CD]
// [CD]: # (Company Domain Name: "e.g. mycompany.com")
DATA['accounts'].registrar = {
  LOGIN_URL   : 'https://internetbs.net/',
  URL         : 'https://internetbs.net/',
  password    : '*******',
  firstname   : DATA['holding'].NAME,
  lastname    : 'LTD',
  country     : 'United Kingdom',
  language    : 'english',
  phone       : DATA['personal'].mobilePhone.number,
  email       : DATA['holding'].GMAIL
  question    : '<choose what you like>',
  answer      : '*******',
  street      : DATA['personal'].europeanResidentialAddress.street,
  postalcode  : DATA['personal'].europeanResidentialAddress.postalcode,
  city        : DATA['personal'].europeanResidentialAddress.city,
  country     : DATA['personal'].europeanResidentialAddress.country
}
```
<a id="zoho"></a>
```js
// * [`MPL`][MPL]
// [MPL]: # (Mail Provider Link (URL): "e.g. mail.zoho.com")
// * [`CMA`][CMA]
// [CMA]: # (Company Mail Address: "e.g. mycompany@mycompany.com")
DATA['accounts'].zoho = {
  LOGIN_URL     : 'https://www.zoho.com/login.html',
  MAIL_SETUP    : 'https://mail.zoho.com/biz/index.do',
  URL           : 'https://mail.zoho.com/',
  // 'firstname'   : 'CompanyName',
  // 'lastname'    : 'ltd',
  // 'email'       : 'companydomainame@companydomainame.com',
  // 'password'    : '<choose a password>',
  // 'currentEmail': DATA['GoogleMail'].username + '@gmail.com'
}
// [ML.u]: # (Username: "...")
// [ML.p]: # (Password: "...")
// [ML]: https://www.mitro.co/ (Mitro Password Manager)
DATA['accounts'].zoho.vault = {
  URL               : 'https://www.zoho.com/vault/',
  email             : DATA['holding'].GMAIL,
  password          : '*******',
  organizationName  : DATA['holding'].FIRM,
  passphrase        : '************************'
  chromeExtension   : 'https://chrome.google.com/webstore/detail/zoho-vault/igkpcodhieompeloncfnbekccinhapdb',
}
```









<a id="founder"></a>
<!-- * [`FN`][FN]
* [`FN.fn`][FN.fn]
* [`FN.sn`][FN.sn]
* [`FN.pw`][FN.pw]
* [`FN.em`][FN.em]
[FN]: DATA.md#founder (Founder)
[FN.fn]: # (Founder's Forename: e.g. John)
[FN.sn]: # (Founder's Surename: e.g. Doe)
[FN.pw]: # (Founder's Password for Companies House: e.g. abc123)
[FN.em]: # (Founder's Email for Companies House: e.g. johndoe@example.com) -->
```js
DATA['founder'] = {
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
}
```
<a id="companieshouse"></a>
<!-- * [`CH`][CH]
* [`CH.cn`][CH.cn]
* [`CH.ra`][CH.ra]
* [`CH.dn`][CH.dn]
* [`CH.da`][CH.da]
* [`CH.ds&sc`][CH.ds&sc]
[CH]: # (http:/www.gov.uk/register-a-company-online "Register Ltd. @ Companies House")
[CH.cn]: # (company’s name)
[CH.ra]: # (registered address)
[CH.dn]: # (director names)
[CH.da]: # (director addresses)
[CH.ds&sc]: # (details of shareholders and share capital) -->
```js
DATA['companieshouse'] = {
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
}
```
<a id="digitalcertificateofincorporation"></a>
<!-- * [`DCoI`][DCoI]
[DCoI]: # (digital certificate of incorporation "+ stuff") -->
```js
DATA['digitalcertificateofincorporation'] = {
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
}
```
<a id="companiesregisteredadress"></a>
<!-- * [`RA.u`][RA.u]
* [`RA.p`][RA.p]
* [`RA`][RA]
[RA.u]: # (Username: "")
[RA.p]: # (Password: "")
[RA]: # (UK Company Address: "...") -->
```js
DATA['companiesregisteredadress'] = {
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
}
```
<a id="virtualadressprovider"></a>
<!-- * [`RAPL`][RAPL]
[RAPL]: http://scanmypost.co.uk (Scan My Post - Virtual Address Provider) -->
```js
DATA['virtualadressprovider'] = {
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
}
```
<a id="githublink"></a>
<!-- * [`GHL.u`][GHL.u]
* [`GHL.p`][GHL.p]
* [`GHL.w`][GHL.w]
* [`GHL`][GHL]
[GHL.w]: # (Repository & Website: "e.g. seraseed-holding.github.io")
[GHL.u]: # (Username: "...")
[GHL.p]: # (Password: "...")
[GHL]: https://github.com/... (Github Company Link) -->
```js
DATA['githublink'] = {
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
  // lorem ipsum
}
```
