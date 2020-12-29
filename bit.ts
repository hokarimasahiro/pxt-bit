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
     * Convert hexadecimal string to number
     * @param s hexadecimal strings, eg: 1f
     */
    //% block="hexToNumver %s"
        hexToNumber(s: string){
            let hex="0123456789abcdef";
            let HEX="0123456789ABCDEF";
            let r = 0;
            for (let i = 0; i < s.length; i++) {
                if(hex.indexOf(s.charAt(i))!=-1)
                    r = (r << 4) + hex.indexOf(s.charAt(i))
                else if (HEX.indexOf(s.charAt(i))!=-1)
                    r = (r << 4) + HEX.indexOf(s.charAt(i))
                else
                    r = (r << 4)
            }
            return r
        }
    /**
     * shift left
     * @param n bit count, eg: 2
     */
    //% block="shift left %n"
        shiftLeft(n: number){
            this.num=this.num << n;
            return this
        }
    }
    /**
     * Convert number to bit
     * @param n number, eg: 1234
     */
    //% block="create %m"
    export function create(n: number): bit {
        let Bit = new bit();
        Bit.num=n;
        return Bit;
    }
}