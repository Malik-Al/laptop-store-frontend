import * as LaptopActionCreators from './laptop'
import * as UserActionCreators from './auth'

export default {
    ...LaptopActionCreators,
    ...UserActionCreators
 }