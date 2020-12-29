//% weight=100 color=#0fbc11 icon="\u265f" block="bit"
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
        //% weight=10 blockGap=8
        //% Bit.defl=bit
        //% block="%bit|shift left %n"
            shiftLeft(n: number):bit{
                this.num= this.num << n;
                return this;
            }
        /**
         * shift right
         * @param n bit count, eg: 2
         */
        //% Bit.defl=bit
        //% weight=9 blockGap=8
        //% block="%bit|shift right %n"
            shiftRight(n: number):bit{
                this.num= this.num >> n;
                return this;
            }
        /**
         * and
         * @param b bit , eg: bit
         */
        //% Bit.defl=bit
        //% weight=8 blockGap=8
        //% block="%bit|and %b"
            and(b: bit):bit{
                this.num= this.num & b.num;
                return this;
            }
        /**
         * convert to number
         */
        //% Bit.defl=bit
        //% weight=7 blockGap=8
        //% block="%bit|to number"
            toNumber():number{
                return this.num ;
            }
    }
    /**
     * Convert number to bit
     * @param n number, eg: 1234
     */
    //% weight=120 blockGap=8
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
    //% weight=110 blockGap=8
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
    //% weight=100 blockGap=8
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