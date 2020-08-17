
import { parseOathTTSSavefileString } from '../src';

// default savefile = 030100000110Empire and Exile1F00000123450403FFFFFFFFFFFF0724FFFFFFFFFFFFFFFFFFFF0B19FFFFFFFFFFFFFFFFFFFF000000

const testString = `030100000410Empire and Exile0002002034151625D1EB07312FE50D8CFFFF083F34FF043005FF0B0F06FF034BFFFF1004FFE02FD512C335331E08AB642AD60907D3A82DD20E0B1C0A211B016F728A9732D413438B14B91D1F232C10009E7F1716415512110C222E201A290D261502242803192B27180EE2E8E0DDDEDADBE4E1EDDFDCE3E6`;

// 030100000510Empire and Exile001F025203410BFFFFFF27FFFFFF09FFFFFF20FFFFFF1BFFFFFF16FFFFFF1EFFFFFF2BFFFFFF3B0B2C07D49B336FAF09108BD343D5AB2A1D9E98D6721C23B325D28C64A81E121B083F2D308A004BC07F3401139732B91FC35335310A210E1714415518110C222E201A290D261502242803192B2718162F0406050F0AE4DDDEE0E1DAE8E2DBED

const result = parseOathTTSSavefileString(testString);

console.log(result);