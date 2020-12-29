//% color=#0fbc11 icon="\u265f" block="bit"
namespace bit {
    export enum func{
        //% block=xor
        xor=0,
        //% block=or
        or=1,
        //% block=and
        and=2,
        //% block="<<"
        shiftLeft=4,
        //% block=">>"
        shiftRight=5
    }
    export class bit {
        num:number;
        /**
         * shift left
         * @param n bit count, eg: 2
         */
        //% weight=80
        //% bit.defl=Bit
        //% block="%Bit|shift left %n"
            shiftLeft(n: number):bit{
                this.num= this.num << n;
                return this;
            }
        /**
         * shift right
         * @param n bit count, eg: 2
         */
        //% weight=85
        //% bit.defl=Bit
        //% block="%Bit|shift right %n"
            shiftRight(n: number):bit{
                this.num= this.num >> n;
                return this;
            }
        /**
         * and
         * @param b bit , eg: bit
         */
        //% weight=90
        //% bit.defl=Bit
        //% block="%Bit|shift right %b"
            and(b: bit):bit{
                this.num= this.num & b.num;
                return this;
            }
        /**
         * convert to number
         */
        //% weight=95
        //% bit.defl=Bit
        //% block="%Bit|to number"
            toNumber():number{
                return this.num ;
            }
    }
    /**
     * Convert number to bit
     * @param n number, eg: 1234
     */
        //% weight=50
    //% block="convert from number %n"
    export function convNum(n: number): bit {
        let Bit = new bit();
        Bit.num=n;
        return Bit;
    }
    /**
     * Convert hexadecimal string to bit
     * @param s hexadecimal strings, eg: 1f
     */
        //% weight=60
    //% block="convert from hexadecimal %s"
    export function convHex(s: string):bit{
        let Bit = new bit();
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
        //% weight=70
    //% block="convert from binary %s"
    export function convBin(s: string):bit{
        let Bit = new bit();
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