import BaseComponent from "@/BaseClass/BaseComponent";
import component from './HelloWorld'
import { v1 as uuid } from 'uuid'

export default class Hello extends BaseComponent{

    name = 'hello';

    id = uuid();

    get component(){
        return component
    }
}