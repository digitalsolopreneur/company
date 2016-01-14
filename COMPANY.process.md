# Company Formation Process
__*Make yourself a private copy of the [**DATA**](DATA.md) document and fill it out with your data during the following process. If you don't fullfill the listed requirements, you will not be able to follow through. Please make sure you already have or get yourself everything listed as requirements before you start the next step.*__
```js
var DATA = require('DATA.md')
```

---

## `0. Setup Identity Management`

### Requirements
* **Price:** `0 GBP p/y`  
* **Time:** `~1 hour`
* **Other Assets:** [**DATA**.personal](DATA.md#personal) `(=Example)`
  1. own a **european `residential address`** to **receive letters**
  * own a **european `mobile phone number`** + **last month phone bill** on one's name & address
  * own a **european `bank account`** + **last month bank statement** on one's name & address

### Process
1. Download, Install & Start [`Google Chrome Browser`](https://www.google.com/chrome/browser/desktop/)
* Choose available [`Company Name`](http://wck2.companieshouse.gov.uk//wcframe?name=accessCompanyInfo) & [`Company Domain`](http://whois.domaintools.com/)
  * Example: [**DATA**.holding.FIRM](DATA.md#holding)
  * Example: [**DATA**.holding.DOMAIN](DATA.md#holding)
```js
// CHECK HERE:
// => http://wck2.companieshouse.gov.uk//wcframe?name=accessCompanyInfo
DATA['holding'].FIRM   = 'FOOBAR LTD.'
// CHECK HERE:
// => http://whois.domaintools.com/
DATA['holding'].DOMAIN = 'foobar.com'
// If both are free, set
DATA['holding'].NAME = 'foobar'
```
* Create yourself a [`Company Logo`](https://www.graphicsprings.com/)
  * Example: [**DATA**.holding.LOGO](DATA.md#holding)
  ```js
  // EXAMPLE SERVICE:
  // => http://flamingtext.com/
  // => https://www.graphicsprings.com/
  DATA['holding'].LOGO = [
    '<path/or/url/to/logo/filename.svg>',
    '<path/or/url/to/logo/filename.png>'
  ]
  /*
    Once the logo is created, <right click> -> [inspect element]
    1. select the enclosing <svg> tag that is your logo from the elemets tab
    2. <right click> it -> [copy] -> [outer HTML]
    3. create a local text file <logo.svg> and paste clipboard content into it
    4. save the file and open it to see the result
    5. search & use an online service "svg2png" to make a pixel copy of the logo
  */
  ```
* Google Chrome Browser -> Menu -> Settings -> Add person...
  * **Set Name:** `DATA['holding'].NAME`
  * **Create an Account**
    * Example: [**DATA**.accounts.google](DATA.md#google)
```js
  DATA['accounts'].google.URL         = 'http://mail.google.de'
  DATA['accounts'].google.LOGIN_URL = 'https://accounts.google.com/ServiceLogin'
  DATA['accounts'].google.firstName   = DATA['holding'].NAME
  DATA['accounts'].google.lastName    = 'LTD'
  DATA['accounts'].google.username    = DATA['holding'].NAME
  DATA['accounts'].google.password    = '*******'
  DATA['accounts'].google.birthday    = '<TODAY minus 25 YEARS>'
  DATA['accounts'].google.gender      = 'other',
  DATA['accounts'].google.phone       = DATA['personal'].mobilePhone.number,
  DATA['accounts'].google.currentMail = '', // doesnt exist
  DATA['accounts'].google.location    = 'United Kingdom'  
```
  * TopRight Avatar Picture -> Avatar change -> upload from computer
```js
  DATA['accounts'].google.icon = DATA['holding'].LOGO[1] // the "png" version
```
  * TopRight Dialpad Icon -> Google Drive -> New -> File Upload
    * Example: [**DATA**.accounts.google.drive](DATA.md#google)
```js
  DATA['accounts'].google.drive.URL     = 'http://drive.google.com',
  DATA['accounts'].google.drive.svglogo = DATA['holding'].LOGO[0],
  DATA['accounts'].google.drive.pnglogo = DATA['holding'].LOGO[1]
```
* TopRight Dialpad Icon -> Google Plus -> Upgrade -> Continue...Anyway -> Finish
  * Example: [**DATA**.accounts.google.plus](DATA.md#google)
```js
  DATA['accounts'].plus.URL       = 'http://plus.google.com',
  DATA['accounts'].plus.firstname = DATA['holding'].NAME,
  DATA['accounts'].plus.lastname  = 'LTD',
  DATA['accounts'].plus.gender    = 'decline to state',
  DATA['accounts'].plus.birthday  = '13. January'
```
* Start Using Bookmarkbar as your companies table of content overview
  * Example: [**DATA**.bookmarks.STACK/](DATA.md#bookmarks)
  * TopRight Hamburger Menu Icon -> Bookmarks -> Show Bookmarks Bar
  * Add `"Google Drive"`, `"Google Plus"` and `"Google Mail"` to your stack
  * Create Initial Bookmark Structure & Add Bookmarks by
    * Right clicking the bar to create folders
    * drag'n'drop address bar URL's icon to the Bookmarkbar
    * drag'n'drop items already in the bookmarkbar to re-arrange them
    * rightclick bookmarkbar -> bookmark manager (for more control)
```js
DATA['bookmarks']['STACK/'].browser = 'www.google.com/chrome/browser/desktop/'
DATA['bookmarks']['STACK/'].gmail    = 'mail.google.com'
DATA['bookmarks']['STACK/'].drive   = 'drive.google.com/drive/my-drive'
/*
  // Make a 'STACK/' folder in your bookmark bar and add the following links
  STACK/
    http://mail.google.com
    https://drive.google.com/drive/my-drive
    https://www.google.com/chrome/browser/desktop/
*/
```

### OUTPUT:
```js
DATA['holding'].GMAIL = DATA['accounts'].google.username + '@gmail.com'
/*
You have now:
* a Company Name & Company Logo
* a first email address for your company
* a Google Chrome Browser & Profile with a Bookmark Bar to manage your company.
*/
```

---

## `1. Register Domain Provider & Domain`

### Requirements
* **Price:** `~10 GBP p/y` *(depending on your domain of choice)*
* **Time:** `~0.5 hour`
* **Other Assets:** [**DATA**.personal](DATA.md#personal) `(=Example)`
  1. Companies first Mail Account (=`DATA['holding'].GMAIL`)
  2. Bookmark Bar
  3. Current Address (=`DATA['personal'].europeanResidentialAddress`)
  4. Bank Account with Credit Card (=`DATA['personal'].bankAccount`)

### Process
1. Register Account with [`Domain Registrar`](https://internetbs.net/) & Register your `DATA['holding'].DOMAIN`
  * Example: [**DATA**.registrar](DATA.md#registrar)
```js
DATA['accounts'].registrar.URL = 'https://internetbs.net/'
DATA['accounts'].registrar.LOGIN_URL = 'https://internetbs.net/'
DATA['accounts'].registrar.password = '*******'
DATA['accounts'].registrar.firstname = DATA['holding'].NAME
DATA['accounts'].registrar.lastname = 'LTD'
DATA['accounts'].registrar.country = 'United Kingdom'
DATA['accounts'].registrar.language = 'english'
DATA['accounts'].registrar.phone = DATA['personal'].mobilePhone.number
DATA['accounts'].registrar.email = DATA['holding'].GMAIL
DATA['accounts'].registrar.question = '<choose what you like>'
DATA['accounts'].registrar.answer = '*******'
DATA['accounts'].registrar.street = (
  DATA['personal'].europeanResidentialAddress.street
)
DATA['accounts'].registrar.postalcode = (
  DATA['personal'].europeanResidentialAddress.postalcode
)
DATA['accounts'].registrar.city = (
  DATA['personal'].europeanResidentialAddress.city
)
DATA['accounts'].registrar.country = (
  DATA['personal'].europeanResidentialAddress.country
)
```
* Add Provider Link to Bookmarkbar
  * Example: [**DATA**.bookmarks.STACK/.registrar](DATA.md#bookmarks)
```js
DATA['bookmarks']['STACK/'].registrar = DATA['accounts'].registrar.URL
```

### OUTPUT:
```js
/*
You have now:
* a Domain Registrar User Account
* a registered Company Domain
*/
```

---

## `2. Register Zoho Vault & Zoho Domain Mail Account & Make it work from GMAIL`

### Requirements
* **Price:** `0 GBP p/y`
* **Time:** `~0.5 hour`
* **Other Assets:** [**DATA**.personal](DATA.md#personal) `(=Example)`
  1. Companies first Mail Account (=`DATA['holding'].GMAIL`)
  2. Company Domain Name
  3. Domain Registrar
  4. Google Mail

### Process:
1. Signup for [Zoho Vault Password Manager](https://www.zoho.com/vault/)
```js
DATA['bookmarks']['STACK/'].passwordVault = 'https://www.zoho.com/vault/'
// and
DATA['accounts'].zoho.URL = 'https://mail.zoho.com/'
DATA['accounts'].zoho.MAIL_SETUP = 'https://mail.zoho.com/biz/index.do'
DATA['accounts'].zoho.LOGIN_URL = 'https://www.zoho.com/login.html'
DATA['accounts'].zoho.vault.URL = 'https://www.zoho.com/vault/'
DATA['accounts'].zoho.vault.URL = 'https://www.zoho.com/vault/'
DATA['accounts'].zoho.vault.URL = 'https://www.zoho.com/vault/'
DATA['accounts'].zoho.vault.email = DATA['holding'].GMAIL
DATA['accounts'].zoho.vault.password = '********' // set a password
DATA['accounts'].zoho.vault.organizationName = DATA['holding'].FIRM
DATA['accounts'].zoho.vault.passphrase = '********' // set a passphrase
DATA['accounts'].zoho.vault.chromeExtension = 'https://chrome.google.com/webstore/detail/zoho-vault/igkpcodhieompeloncfnbekccinhapdb'
```
  * Example: [**DATA**.accounts.zoho.vault](DATA.md#zoho)
* Install Zoho Vault Chrome Extension
```js
https://chrome.google.com/webstore/detail/zoho-vault/igkpcodhieompeloncfnbekccinhapdb
// and add all your companies credentials to it, e.g.
// => MAKE SURE to use the LOGIN URL instead of the regular URL
DATA['accounts'].google.LOGIN_URL
DATA['accounts'].google.password
DATA['accounts'].registrar.LOGIN_URL
DATA['accounts'].registrar.password
DATA['accounts'].zoho.vault.LOGIN_URL
DATA['accounts'].zoho.vault.password
```
* Create Companies Domain Email Address
  * Goto:
```js
DATA['accounts'].zoho.MAIL_SETUP = 'https://mail.zoho.com/biz/index.do'
```
  * Choose: `Add your existing domain for Email Hosting with Zoho and create domain-based address.`
```js
// Use
DATA['holding'].DOMAIN
// and set `companyname@companyname.de`
DATA['holding'].EMAIL = DATA['holding'].NAME + '@' + DATA['holding'].DOMAIN
// ...
```
* Add to bookmarks
```js
DATA['bookmarks']['STACK/'].mail = DATA['accounts'].zoho.URL
```

---

---

---

---

---

---

---

---

---

---

* Configure Domain DNS at [`CDPL`][CDPL] to verify you own [`CD`][CD]
  * Verify Ownership
    * Name / Host / Alias / CNAME: "zb14332705"
    * Value / Points To / Destination: "zmverify.zoho.com"
  * Configure MX Records
    * "@	mx.zoho.com	10"
    * "@	mx2.zoho.com	20"
* Add [`CMA`][CMA] as "Send as" under Settings/Accounts&Import in [`GMPL`][GMPL] and make it the "default address"
  * user [`CMA`][CMA]
  * pass [`GMPL.pw`]
  * smtp.zoho.com
  * Port: 465 (SSL)
* Go to Zoho Inbox and confirm
* In ZOHO go to "Settings/EmailForwarding" and put the [`CGMA`][CGMA] there + go to [`GMPL`][GMPL] to confirm.
* @TODO ***add IMPRESSUM***
* @TODO ***Add IMPRESSUM to "Email Signature"***

### OUTPUT:
```js
/*
You have now:
* a Company Email Address with your Domain Name
* a Password Manager to manage all your companies credentials
*/
```

---

## 4. Create Github Account + Organization and Github Page + Gitter + Waffle
*COSTS: 0 GBP p/y*
*RESPONSE TIME: instant*
### INPUT: [`CMA`][CMA], [`DB`][DB], [`ML`][ML], [`CDPL`][CDPL], [`CD`][CD]
### PROCESS:
01. Register or Create
  * Holding:
    * with `companyname` [`GHL.u`] and Password [`GHL.p`] and email [`CMA`][CMA]
    * invite Managing Director as Collaborator to Github Page
    * Put People Members to visibility: Public
  * Regular company:
    * Make a Github Organisation with `companyname` owned by Holding
    * Create a "Managing Director" Team and invite the Managing Director to join
    * Remove `companyname` from Team "Managing Director"
    * Put People Members to visibility: Public
02. Add Github Link https://github.com/companyname [`GHL`][GHL] to [`DB`][DB]
03. Add credentials for Github to mitro [`ML`][ML] (if Holding)
04. Create a Github Repository with the name: `githubname.github.io` [`GHL.w`][GHL.w]
05. Add [`GHL.w`][GHL.w] to [`DB`][DB]
  * https://github.com/companyname/
  * https://github.com/companyname/companyname.github.io
06. Go to Repo Settings and generate a Page, clone it and add a CNAME file with `company domain` [`CD`][CD] as content and push to github.
07. Go to [`CDPL`][CDPL] and add Apex record to DNS of [`CD`][CD] to [`GHL.w`][GHL.w]
  * "* A 192.30.252.153"
  * "* A 192.30.252.154"
  * "A 192.30.252.153"
  * "A 192.30.252.154"
  * "www A 192.30.252.153"
  * "www A 192.30.252.154"
08. SignUp for `Gitter` and `Waffle` and add them to [`DB`][DB]
  * GITTER: https://gitter.im/companyname/companyname.github.io
    * Invite Managing Director
  * WAFFLE:https://waffle.io/companyname/companyname.github.io
    * Assign new empty "Next Steps" Task to Managing Director
09. @TODO ***upload LOGO to github repository***
10. @TODO ***Add "Email Signature"***

### OUTPUT: [`GHL`][GHL]


---


## 5. Create UK Address
*COSTS: 11.50 p/y (5 free scans) (32p p/scan ) (16p p/business scan )*
*RESPONSE TIME: ~24 hours*
### INPUT: [`CMA`][CMA], [`_BAwCC`][_BAwCC], [`_CRA`][_CRA], [`DB`][DB], [`ML`][ML]
### PROCESS:
01. Buy or Rent Decision
  * For Companies: Rent Virtual Address from Holding
  * (For Director: Rent Virtual Address from Holding)
  * For Holding: Buy from Service Provider
02. Signup with [scanmypost](scanmypost.co.uk) and register the minimum package
03. Add username [`RA.u`][RA.u] and password [`RA.p`][RA.p] to mitro [`ML`][ML]
04. Add provider link [`RAPL`][RAPL] to dashboard [`DB`][DB]
03. send: digital copy of *last month phone bill* + last month *personal bank account statement* via Email
04. Get validated *full UK post address* [`RA`][RA] for use as registered office and directors address

### OUTPUT: [`RA`][RA], [`RAPL`][RAPL]


---


## 6. Register (incorporate) company @ COMPANIES HOUSE
*COSTS: 15 GBP one time fee - (might be less with company formation service + get money for opening bank acocunt)*
*RESPONSE TIME: ~24 hours*
### INPUT: [`CH`][CH], [`CH.cn`][CH.cn], [`CH.ra`][CH.ra], [`CH.dn`][CH.dn], [`CH.da`][CH.da], [`ML`][ML], [`CH.ds&sc`][CH.ds&sc], [`_BAwCC`][_BAwCC]
### PROCESS:
0. Check Company Name: OK (http://wck2.companieshouse.gov.uk//wcframe?name=accessCompanyInfo)
  - seraseed
1. **Follow Process @ Companies House Web Incorporation service [`CH`][CH]**
  - and save account credentials manually to mitro [`ML`][ML]
- Register @ Companies House to incorporate companies
- **Forename:**
  - [FN.fn](FN.fn)
- **Surname:**
  - [FN.sn](FN.sn)
- **Password:**
  - [FN.pw](FN.pw)
- **Email:**
    [FN.em](FN.em)
    ( for the Companies House WebFiling Service, to enable you to file other company documents online and also save and return to previous filings.) => Register other companies through the HOLDING
    (When your incorporation application is accepted, the company incorporation certificate will be sent to the email address supplied here.)
- **Address:** (usual residential address  + service address)
  ```js
  var CH = { // is Residential Address AND Service Address
    cn: "ACME Ltd.",
    ra: {
      'c/o'               : 'Mr. John Doe',
      'Building Name/No.' : 'Apt 1234',
      'Address Line 1'    : 'Blackwater',
      'Address Line 2'    : 'Chynoweth House, Trevissome Park',
      'Post Town'         : 'TRURO',
      'Country/Region'    : 'Cornwall',
      'Postcode'          : 'TR4 8UN',
      'Country'           : 'United Kingdom'
    }
  }
  ```
- **Director:**
  - **country/state of residence**
  - **nationality, occupation, date of birth and any former names**
  ```js
  CH.dn = {
    Title               : 'Managing Director',
    Forname             : 'John',
    Surname             : 'Doe',
    Nationality         : 'Germany',
    DateOfBirth         : '31/12/1950', // (must be 16 or older!)
    BusinessOccupation  : 'Managing Director',
    // RESIDENTIAL ADDRESS
  }
  CH.da = {
    ra                  : { // (don't tick the box 243)
      'Country'                 : 'Germany',
      'Postcode'                : '12345',
      'Building/Street Number'  : '42',
      'Address'                 : 'Beispielstrasse',
      'Post Town'               : 'München',
      'County/Region'           : 'Bavaria'
    },
    // SERVICE ADDRESS (= same as residential address)
    sa                  : (setTimeout(function(){CH.da.sa = CH.da.ra},0),null)
  }
  ```
  - **'consent to act' information**
      3 items of personal information from the following 7 categories: `Town of birth`, `Last 3 digits of telephone number`, `Last 3 digits of National Insurance number`, `Last 3 digits of Passport number`, `Mothers maiden name`, `Eye Colour`, `Fathers first name`.
    ```js
      CH.secrets = [
        { TownOfBirth: 'mun' },
        { MothersMaidenName: 'sch' },
        { FathersFirstName: 'mic' },
      ]
    ```

- OR **FOR HOLDED COMPANIES**
  - You may also have officers that are companies or firms,
    and for these you will need to supply
    - **the company or firm name**,
      - ...
    - **its registered office address**,
      - ...
    - **details of the legal form of the company**,
      - ...
    - **where it is registered and**
      - ...
    - **if applicable its registration number**
      - ...

2. **CAPITAL**
  - Currency
    - GBP (Pound Sterling)
  - Class of Share:
    - Ordinary
  - Total Number of Shares:
    - 10000
  - Amount paid up on each share:
    - 0
  - Amount unpaid on each share:
    - 0.0001
  - Aggregate Nominal Value:
    - 1
  - Prescribed particulars
    - Each share has full rights in the company with respect to voting, dividends and distributions.
- **Share Capital and Shareholder Details**
  - You will need to supply of each initial shareholder in the company (known as a subscriber):
    - **the name and**,
      - ...
    - **address**,
      - ...
    - **as well as the number of shares**,
      - ...
    - **and class of shares**,
      - ...
    - **amount paid on each share**,
      - ...
    - **nominal value of the shares**,
      - ...
    - **currency of shares**,
      - ...
    - **and totals**,
      - ...
    - **Prescribed particulars of rights attached to shares will also need to be supplied
      (i.e. details of voting, distribution, dividend and any redemption rights attached to the shares)**,
        - ...
        - ...
    - **Subscriber Authentication Information** â€“ in place of a signature you will need to provide 3 items of personal information from the following 7 categories: Town of birth, Last 3 digits of telephone number, Last 3 digits of National Insurance number, Last 3 digits of Passport number, Mothers maiden name, Eye Colour, Fathers first name.
      - ...

3. Subscriber Details
  - [FN.fn](FN.fn)
  - [FN.sn](FN.sn)
  - [CH.ra](CH.ra)
4. Shares/Stock held
  - Currency & Class: GBP - Ordinary
  - Number of shares: 10000
5. Personal Auth
  - [CH.secrets](CH.secrets)
  => TICK:
      1. the prescribed form memorandum of association; and
      2. (where this application is sent to Companies House by the subscriber) the statement of compliance.

6. => Preview and Print/Save the **"Memorandum of association"** draft
  => Preview and Print/Save the **"Model Articles of Association"**

  => **You Get:**
  ```js
    var DCoI.info1 = {
      CompanyName: 'TEST LTD.',
      SubmissionNumber: '123-123456',
      DateOfReceipt: '30/12/2000'
    }
  ```

7. Select Payment: Credit Card / Paypal
  - [_BAwCC](_BAwCC)
  - Costs: `€21,91 EUR`
  - €1,00 EUR = £0,68 GBP
  => **Barclays payment reference: 12345678912345678**
  => **Service Desk tel +44 (0)303 1234 500 or email enquiries@companieshouse.gov.uk**

8. Wait for approximately 24hours to receive a confirmation email about the incorporation from [`CH`][CH]
  e.g.

  ```js
  var DCoI.info2 = {
    DateOfIncorporation             : '31/12/2000',
    CompanyName                     : 'TEST LTD.',
    CompanyNumber                   : '123456789',
    CompanyType                     : 'Private Limited by Shares',
    CompaniesHouseSubmissionNumber  : '123-123456'
  }
  ```

### OUTPUT: [`DCoI`][DCoI]
#### `2015-6-25`
// WAIT for:
> You’ll first need your company’s 10-digit Unique Taxpayer Reference (UTR). This is posted to your company address by HM Revenue and Customs (HMRC), usually within a few days of the company being registered with Companies House (incorporated).
> If you don't receive it, call the help Line
 https://www.gov.uk/government/organisations/hm-revenue-customs/contact/corporation-tax-enquiries

 ---

#### `2015-08-14`
* **!!! That's 40 days later !!!**

https://www.gov.uk/limited-company-formation/set-up-your-company-for-corporation-tax

* @TODO within 3 moths after registration

`REQUIRES`
* your company’s registration number
* the date you started to do business
* the date your annual accounts are made up to

`OUTPUT`
* Finishing the step enables you to do the `Companies Annual Tax Return`
=> https://www.gov.uk/company-tax-returns

QUESTION: Is there an API?
https://www.gov.uk/government/publications/corporation-tax-commercial-software-suppliers
