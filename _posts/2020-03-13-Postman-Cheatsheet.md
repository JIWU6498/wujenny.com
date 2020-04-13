## Pre-request Script
### Steps
Pre-request Script (Calculate the timestamp and save it to the variable) - undergoing HTTP request - Execute the tests

### Chai Assertion
JSON -> pm.response.json()
XML  -> xml2Json(responseBody)
HTML -> cheerio (pm.response.text())
Plain-text -> pm.response.text()
CSV -> csv-parse/lib/sync

#### Chai Assertion Library
expect([]).to.be.an('array').that.is.empty;

```
pm.test("Your test name",function(){
    pm.expect(100).to.eql(101,'It must equal to 101');
});
```
#### Object assertion

```
pm.test("Your test name2",function(){
    let a={
        "name":"Lucy"
    };

      let b={
        "name":"Lucy"
    };
    pm.expect(a).to.eql(b,'1');
    //avoid use equal, most of the time , we do not validate the object, rather, we validate the attribute of the object 
    pm.expect(a).to.equal(a,'2');
})
```
pm.expect(true).to.be.true;
pm.expect(null).to.be.null;
pm.expect(undefined).to.be.undefined;
pm.expect([]).to.be.empty;
pm.expect([].length).to.eql(0);
pm.expect([1,2,3]).to.include(2);

pm.test("Test the number is one of the array",function(){
    pm.expect(2).to.be.oneOf([1,2,3]);
});

pm.test("Test the string starts with Lily",function(){
    pm.expect('Lily Zhang').to.match(/^Lily/);
});

#### Assertions of Array
```
let manufacturer;
for(let filter of jsonData.filters){
    console.log(filter)
}

console.log(manufacturer);

pm.test("manufacturer should not be allowed",function(){
    pm.expect(manufacturer.name).to.eql("MANUFACTURER");
    pm.expect(manufacturer.isAllowed).to.be.false;
});
```

### Newman

Newman is a cli tool
#### install newman from npm
npm install -g newman

#### use new man run postman collection
newman run https://www.getpostman.com/collections/a7ad3ccf8c386139bd69

newman --version
npm outdated -g
npm install -g sass@1.26.2

npm install -g newman-reporter-html

#### Visit postman from newman

3 ways
* 1 is to share passing postman collection through the get public link
* Export the collection and then run the command : newman run "Passing Postman collection.postman_collection.json"
* Using Newman with the Postman API

npm install -g newman-reporter-htmlextra
newman run https://www.getpostman.com/collections/a0b5fd20b88bd98c1e80 -r htmlextra

## Reuse tests in multiple requests
```
var commonTests =()=>{
    pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
    });
    pm.test("Content-Type is present", function () {
        pm.response.to.have.header("Content-Type");
    });
    
    pm.test("Response time is less than 400",function(){
        pm.expect(pm.response.responseTime).to.be.below(400);
    });
}

commonTests();
```

## CSV Responding
https://www.papaparse.com/
Click github, click papaparse.min.js , copy the link and add the link to the postman get.

```
eval(pm.globals.get("Papalibrary"));
var Papa = this.Papa


//setup
eval(pm.globals.get("Papalibrary"));

var Papa = this.Papa;

//2. Configure Papa
const parseConfig={
    header:true
}

//3. Parse the Response body
var parseBody = Papa.parse(responseBody, parserConfig);
console.log(parseBody);

//4.Tests
pm.test("ABC1234 was charged properly",function(){
    for(let invoice of parseBody.data){
        console.log(invoice);
        if(invoice.ResHash ==='ABC1234'){
            pm.expect(invoice.InvTotal).to.eql("$4500.00");
        }
    }
})

//unset
pm.globals.unset("PapaLibrary");
```


