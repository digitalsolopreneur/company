# COMPANY SETUP PROCESS

### GLOSSARY
**External**
* [`_BAwCC`][_BAwCC]
* [`_CRA`][_CRA]
* [`_1mPB`][1mPB]
* [`_1mBS`][1mBS]

[1mBS]: # (1 month record of PHONE BILL to verify identity)
[1mPB]: # (1 month record of BANK STATEMENT to verify identity)
[_CRA]: # (Current Residential Adress: "e.g. 12345 CityName - StreetName. XXX")
[_BAwCC]: # (Bank Account with Credit Card: "e.g. DKB & Paypal")

**Internal**
* [`CGMA`][CGMA]
* [`DB`][DB]
* [`GMPL`][GMPL]
* [`GMPL.fn`][GMPL.fn]
* [`GMPL.ln`][GMPL.ln]
* [`GMPL.pw`][GMPL.pw]
* [`GMPL.dob`][GMPL.dob]
* [`GMPL.s`][GMPL.s]
* [`GMPL.l`][GMPL.l]
* [`GPL`][GPL]
* [`CD`][CD]
* [`CDPL`][CDPL]
* [`CMA`][CMA]
* [`MPL`][MPL]
* [`CDPL.u`][CDPL.u]
* [`CDPL.p`][CDPL.p]
* [`ML.u`][ML.u]
* [`ML.p`][ML.p]
* [`ML`][ML]
* [`GHL.u`][GHL.u]
* [`GHL.p`][GHL.p]
* [`GHL.w`][GHL.w]
* [`GHL`][GHL]
* [`RA.u`][RA.u]
* [`RA.p`][RA.p]
* [`RA`][RA]
* [`RAPL`][RAPL]
* [`DCoI`][DCoI]
* [`CH`][CH]
* [`CH.cn`][CH.cn]
* [`CH.ra`][CH.ra]
* [`CH.dn`][CH.dn]
* [`CH.da`][CH.da]
* [`CH.ds&sc`][CH.ds&sc]
* [`FN`][FN]
* [`FN.fn`][FN.fn]
* [`FN.sn`][FN.sn]
* [`FN.pw`][FN.pw]
* [`FN.em`][FN.em]

[FN]: # (Founder)
[FN.fn]: # (Founder's Forename: e.g. John)
[FN.sn]: # (Founder's Surename: e.g. Doe)
[FN.pw]: # (Founder's Password for Companies House: e.g. abc123)
[FN.em]: # (Founder's Email for Companies House: e.g. johndoe@example.com)

[CH]: # (http:/www.gov.uk/register-a-company-online "Register Ltd. @ Companies House")
[CH.cn]: # (company’s name)
[CH.ra]: # (registered address)
[CH.dn]: # (director names)
[CH.da]: # (director addresses)
[CH.ds&sc]: # (details of shareholders and share capital)

[DCoI]: # (digital certificate of incorporation "+ stuff")
[RA.u]: # (Username: "")
[RA.p]: # (Password: "")
[RA]: # (UK Company Address: "...")
[RAPL]: http://scanmypost.co.uk (Scan My Post - Virtual Address Provider)
[GHL.w]: # (Repository & Website: "e.g. seraseed-holding.github.io")
[GHL.u]: # (Username: "...")
[GHL.p]: # (Password: "...")
[GHL]: https://github.com/... (Github Company Link)
[ML.u]: # (Username: "...")
[ML.p]: # (Password: "...")
[ML]: https://www.mitro.co/ (Mitro Password Manager)
[CDPL.u]: # (Username for Domain Registrar: "...")
[CDPL.p]: # (Password for Domain Registrar: "...")
[CMA]: # (Company Mail Address: "e.g. mycompany@mycompany.com")
[MPL]: # (Mail Provider Link (URL): "e.g. mail.zoho.com")
[CD]: # (Company Domain Name: "e.g. mycompany.com")
[CDPL]: # (Company Domain Provider: "e.g. namecheap.com")
[GMPL.fn]: # (First Name: "e.g. company")
[GMPL.ln]: # (Last Name: "e.g. Ltd.")
[GMPL.pw]: # (Password: "e.g. asdfasdf")
[GMPL.dob]: # (Date of Birth: "e.g. 1/1/1990")
[GMPL.s]: # (Sex: "e.g. other")
[GMPL.l]: # (Location: "e.g. UK")
[CGMA]: mailto:company.name@gmail.com (Company Google Mail Address: "e.g. company.name@gmail.com")
[GPL]: http://mail.google.com (Google Plus Profile Link (URL): "e.g. http://mail.google.com")
[GMPL]: http://www.google.de ("Google Mail Provider Link (URL)")
[DB]: http://www.google.de ("Dashboard for Company as Chrome Profile with Links")


---


## 0. Setup Google Chrome Profile
*COSTS: 0 GBP p/y*
*RESPONSE TIME: instant*
### INPUT: none
### PROCESS:
Choose [**DATA**]:

| First Name | Last Name | Password  | Date of Birth | Sex | Location | Email |
| ---------- |:---------:|:---------:|:-------------:|:---:|:--------:|:-----:|
|[`GMPL.fn`][GMPL.fn]|[`GMPL.ln`][GMPL.ln]|[`GMPL.pw`][GMPL.pw]|[`GMPL.dob`][GMPL.dob]|[`GMPL.s`][GMPL.s]|[`GMPL.l`][GMPL.l]| `company.name@gmail.com` (=[`CGMA`][CGMA]) |
01. Download & Install Google Chrome Browser
02. Signup for GoogleMail with [**DATA**]
03. Configure Google Chrome Browser Profile & Sign In
04. Add Bookmarkbar & Bookmark Links to all used Services
  * Add [`GMPL`][GMPL] Link to [`DB`][DB]
05. @TODO ***Create Company Logo & Signup for Google Plus to add Logo***
  * *add as chrome profile avatar*
  * *Add [`GPL`][GPL] to [`DB`][DB]*
  * *Add sipgate number to google auth*

### OUTPUT: [`CGMA`][CGMA], [`DB`][DB], [`GMPL`][GMPL], [`GPL`][GPL]


---


## 1. Register Domain Provider & Domain
@TODO: ***maybe use your personal one and LATER register one on the company and transfer the domain***

*COSTS: ~0 to 30 GBP p/y (depending on the domain)*
*RESPONSE TIME: instant*
### INPUT: [`DB`][DB], [`CGMA`][CGMA], [`_BAwCC`][_BAwCC], [`_CRA`][_CRA]
### PROCESS:
01. Choose Provider, e.g.:
  * [namecheap](http://namecheap.com)
  * [inwx](http://inwx.de)
  * [internet.bs](https://internetbs.net/)
  * [freenom](http://www.freenom.com/)
02. Add Provider Link [`CDPL`][CDPL] to [`DB`][DB]
03. Register Account and remember [`CDPL.u`][CDPL.u] & [`CDPL.p`][CDPL.p]
  * @TODO ***might require phone number***
04. Choose Company Domain [`CD`][CD] & Register it, e.g.:
  * free: `mycompany.tk` (freenom)
  * paid: `mycompany.io` (other)
05. @TODO ***change _PROPs, see [03.]***
  * *[`_BAwCC`][_BAwCC] and [`_CRA`][_CRA] to Company owned ones*

### OUTPUT: [`CD`][CD], [`CDPL`][CDPL]


---


## 2. Register Zoho Domain Mail Account & Make it work from GMAIL
*COSTS: 0 GBP p/y*
*RESPONSE TIME: instant*
### INPUT: [`DB`][DB], [`CGMA`][CGMA], [`CD`][CD], [`CDPL`][CDPL], [`GMPL`][GMPL]
### PROCESS:
01. Signup for Zoho Mail with [`CGMA`][CGMA]
02. Create [`CMA`][CMA]: *companyname@companyname.de*
03. Add Zoho Mail Link [`MPL`][MPL] to [`DB`][DB]
04. Configure Domain DNS at [`CDPL`][CDPL] to verify you own [`CD`][CD]
  * Verify Ownership
    * Name / Host / Alias / CNAME: "zb14332705"
    * Value / Points To / Destination: "zmverify.zoho.com"
  * Configure MX Records
    * "@	mx.zoho.com	10"
    * "@	mx2.zoho.com	20"
05. Add [`CMA`][CMA] as "Send as" under Settings/Accounts&Import in [`GMPL`][GMPL] and make it the "default address"
  * user [`CMA`][CMA]
  * pass [`GMPL.pw`]
  * smtp.zoho.com
  * Port: 465 (SSL)
06. Go to Zoho Inbox and confirm
07. In ZOHO go to "Settings/EmailForwarding" and put the [`CGMA`][CGMA] there + go to [`GMPL`][GMPL] to confirm.
08. @TODO ***add IMPRESSUM***
09. @TODO ***Add IMPRESSUM to "Email Signature"***

### OUTPUT: `CMA`, `MPL`


---


## 3. Register mitro and install plugin
*COSTS: 0 GBP p/y*
*RESPONSE TIME: instant*
### INPUT: [`CMA`][CMA], [`DB`][DB], [`MPL`][MPL], [`GMPL`][GMPL], [`CDPL`][CDPL]
### PROCESS:
01. Download and Install mitro plugin
02. Add Mitro Link https://www.mitro.co/ [`ML`][ML] to [`DB`][DB]
03. Register with Username [`ML.u`] and Password [`ML.p`]
04. Add credentials for Zoho [`MPL`][MPL], GMail [`GMPL`][GMPL] and Domain Registrar [`CDPL`][CDPL] to mitro [`ML`][ML]

### OUTPUT: [`ML`][ML]


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
// WAIT for:
> You’ll first need your company’s 10-digit Unique Taxpayer Reference (UTR). This is posted to your company address by HM Revenue and Customs (HMRC), usually within a few days of the company being registered with Companies House (incorporated).
> If you don't receive it, call the help Line
 https://www.gov.uk/government/organisations/hm-revenue-customs/contact/corporation-tax-enquiries

 ---

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
