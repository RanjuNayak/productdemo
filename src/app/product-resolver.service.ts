import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { ProductdataService } from './productdisplay/productdata.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { productResolved } from './productdisplay/product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<productResolved> {

  constructor(private _productdata:ProductdataService) { }
  //fetching all products and error msg from db
  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any>{
    return this._productdata.getAllProducts().pipe(
      map(x=>({products:x,errormsg:''})),
      catchError(error=>{
        return of({products:null,errormsg:'Something went wrong'})
      })
    );

  }
}
