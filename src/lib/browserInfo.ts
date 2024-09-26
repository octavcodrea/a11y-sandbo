import UAParser from "ua-parser-js";

class BrowserInfo {
    private parser = new UAParser();
    public info = this.parser.getResult();

    public OS() {
        if (this.info.os.name?.indexOf("Mac") !== -1) {
            return "Mac";
        } else if (this.info.os.name?.indexOf("Linux") !== -1) {
            return "Linux";
        } else if (this.info.os.name?.indexOf("Win") !== -1) {
            return "Windows";
        } else {
            return "Unknown";
        }
    }
}

const browserInfo = new BrowserInfo();

export default browserInfo;
