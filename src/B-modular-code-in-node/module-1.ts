
// Każdy „named export” można zaimportować oddzielnie wedle potrzeby:
import { toolLib } from './lib-1';
// Można również zaimportować wszystko, co eksportuje plik do jednego „namespace” np. allStuff;
import * as allStuff from './module-2';


export default function() {

   console.log('Witaj w aplikacji.');
   console.log(toolLib.countVowels('żółwia'))
   console.log(toolLib.hasWord('ala ma kota', 'ma'));

   const myTool = new allStuff.Tool('śrubokręt');

   console.log(myTool.name);
   console.log('Szczęśliwy numerek to dzisiaj', allStuff.LUCKY_NUMBER);
}
