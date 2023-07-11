import jsdom from "jsdom";
const { JSDOM } = jsdom;
import axios from "axios";

export const getAssetPrice = async (url: string, querySelector: string) => {
    const response = await axios.get(url);
    const dom = new JSDOM(response.data);
    //".navAmount .header-nav-data"
    const price = dom.window.document.querySelector(querySelector)?.textContent;
    return { price: price || "" };
}