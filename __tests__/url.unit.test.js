import { getNewUrl } from "../pages/cgi-bin/stanford";
const queryString = require("query-string");

function parse(url) {
    const [left, right] = url.split("?", 2);
    return queryString.parse(right);
}

describe("getNewUrl", () => {
    test("home page", () => {
        const url = getNewUrl(parse("https://stanforddailyarchive.com/cgi-bin/stanford?a=p&p=home&e=-------en-20--1--txt-txIN-a------"));
        expect(url).toEqual("");
    });
    test("search page", () => {
        const url = getNewUrl(parse("https://stanforddailyarchive.com/cgi-bin/stanford?a=q"));
        expect(url).toEqual("/search");
    });
    test("search page with query", () => {
        const url = getNewUrl(parse("https://stanforddailyarchive.com/cgi-bin/stanford?a=q&txq=aasdasd"));
        expect(url).toEqual("/search?q=aasdasd");
    });
    test("calendar page", () => {
        const url = getNewUrl(parse("https://stanforddailyarchive.com/cgi-bin/stanford?a=cl&cl=CL2.2005.09"));
        expect(url).toEqual("/search?q=aasdasd");
    });
    /*
    https://stanforddailyarchive.com/cgi-bin/stanford?a=cl&cl=CL2.1893.05
    https://stanforddailyarchive.com/cgi-bin/stanford?a=q&r=1&results=1&deq=190&e=-------en-20--1--txt-txIN-hoover------
    https://stanforddailyarchive.com/cgi-bin/stanford?a=q&hs=1&r=1&results=1&txq=hoover&txf=txIN&ssnip=txt&o=20&dafdq=&dafmq=&dafyq=&datdq=&datmq=&datyq=&e=------190-en-20--1--txt-txIN-hoover----1900--
    https://stanforddailyarchive.com/cgi-bin/stanford?a=q&r=1&results=1&yeq=1900&e=------190-en-20--1--txt-txIN-hoover------
    */
});
