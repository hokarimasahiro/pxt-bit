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
        //% bit.defl=Bit
        //% block="%Bit|shift left %n"
            shiftLeft(n: number){
                this.num=this.num << n;
            }
        /**
         * shift left
         * @param n bit count, eg: 2
         */
        //% bit.defl=Bit
        //% block="%Bit|shift left %n|value"
            shiftLeftN(n: number):number{
                return this.num << 2;
            }
    }
    /**
     * Convert number to bit
     * @param n number, eg: 1234
     */
    //% block="convert from number %n"
    //% blockSetVariable=Bit
    export function convNum(n: number): bit {
        let Bit = new bit();
        Bit.num=n;
        return Bit;
    }
    /**
     * Convert hexadecimal string to bit
     * @param s hexadecimal strings, eg: 1f
     */
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