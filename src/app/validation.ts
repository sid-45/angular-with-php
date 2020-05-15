import { Injectable } from '@angular/core';

@Injectable()
export class DataValidator {
  constructor() {
  }

  /**
 * Is string is empty
 * @param val
 */
  isNull(val: any) {
    return !this.isNotNullObject(val)
  }

  /**
   * Is not null object
   */

  isNotNullObject(val: any) {
    let flag = true;
    try {
      if (val) {
        flag = true;
      } else {
        flag = false;
      }
    } catch (error) {
      flag = false;
    }
    return flag;
  }


  formate(val: any) {
    let emailFormate = new RegExp('^[A-Za-z0-9+_.-]+@(.+)$')
    return !emailFormate.test(val)
  }

}