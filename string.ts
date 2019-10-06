export class StringExt {

    /**
     * 
     * @param str 
     * @param args 
     * 
     * @example StringExt.formatString('{0} must have max length of {1}.', 'Name', 20)
     * 
     * @output Name must have max length of 20.
     */
    public formatString(str: string, ...args: any[]): string {
        args.forEach((item: string, index: number) => {
            const regex = new RegExp(`\\{[${index}]\\}`);
            str = str.replace(regex, item);
        });
        return str;
    }
}