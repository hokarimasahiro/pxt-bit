//% color=#0fbc11 icon="\u265f" block="bit"
namespace bit {
    export class bitClass {
        num:number;
        /**
         * shift left
         * @param n bit count, eg: 2
         */
        //% weight=100 blockGap=8
        //% block="%bit|<< %n"
            shiftLeft(n: number):bitClass{
                let Bit=new bitClass();
                Bit.num= this.num << n;
                return Bit;
            }
        /**
         * shift right
         * @param n bit count, eg: 2
         */
        //% block="%bit|>> %n"
            shiftRight(n: number):bitClass{
                let Bit=new bitClass();
                Bit.num= this.num >> n;
                return Bit;
            }
        /**
         * and
         * @param b bit , eg: bit
         */
        //% block="%bit|and %b"
            and(b: bitClass):bitClass{
                let Bit=new bitClass();
                Bit.num= this.num & b.num;
                return Bit;
            }
        /**
         * or
         * @param b bit , eg: bit
         */
        //% block="%bit|or %b"
            or(b: bitClass):bitClass{
                let Bit=new bitClass();
                Bit.num= this.num & b.num;
                return Bit;
            }
        /**
         * xor
         * @param b bit , eg: bit
         */
        //% block="%bit|xor %b"
            xor(b: bitClass):bitClass{
                let Bit=new bitClass();
                Bit.num= this.num & b.num;
                return Bit;
            }
        /**
         * convert to number
         */
        //% block="%bit|to number"
            toNumber():number{
                return this.num ;
            }
    }
    /**
     * Convert number to bit
     * @param n number, eg: 1234
     */
    //% block="%n"
    export function convNum(n: number): bitClass {
        let Bit = new bitClass();
        Bit.num=n;
        return Bit;
    }
    /**
     * Convert hexadecimal string to bit
     * @param s hexadecimal strings, eg: 1f
     */
    //% block="convert from hexadecimal %s"
    export function convHex(s: string):bitClass{
        let Bit = new bitClass();
        let hex="0123456789abcdef";
        let HEX="0123456789ABCDEF";
        Bit.num = 0;
        for (let i = 0; i < s.length; i++) {
            if(hex.indexOf(s.charAt(i))!=-1)
                Bit.num = (Bit.num << 4) + hex.indexOf(s.charAt(i))
            else if (HEX.indexOf(s.charAt(i))!=-1)
                Bit.num = (Bit.num << 4) + HEX.indexOf(s.charAt(i))
            else
                Bit.num = (Bit.num << 4)
        }
        return Bit
    }
    /**
     * Convert bit string to bit
     * @param s bit strings, eg: 10110
     */
    //% block="convert from binary %s"
    export function convBin(s: string):bitClass{
        let Bit = new bitClass();
        Bit.num = 0;
        for (let i = 0; i < s.length; i++) {
            if(s.charAt(i)=="1")
                Bit.num = (Bit.num << 1) + 1
            else
                Bit.num = (Bit.num << 1)
        }
        return Bit
    }
}