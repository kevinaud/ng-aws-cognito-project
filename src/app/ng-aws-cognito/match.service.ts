let XRegExp = require('xregexp');
import { Injectable } from '@angular/core';

@Injectable()
export class Match{
    private RequestMethodExpr = XRegExp("(Post|Delete|Options|Get|Put|Head|Patch|Any)$");
    private FirstPathElement = XRegExp("^[a-z]*");

    public requestMethod(funcName: string){
        let match = XRegExp.exec(funcName, this.RequestMethodExpr);
        if(match)
            return match[0];
        else
            return "";
        
    }

    public removeRequestMethod(funcName: string){
        return funcName.replace(this.requestMethod(funcName),"");
    }

    public firstPathElement(funcName: string){
        let match = XRegExp.exec(funcName, this.FirstPathElement);
        console.log('match',match);
        if(match)
            return match[0];
        else
            return "";
    }

    public getPathElements(funcName: string){

        if(funcName)
            return funcName.split(/(?=[A-Z])/).map((s) => {
                return s.toLowerCase();
            });
       else
           return null;
    }
}
