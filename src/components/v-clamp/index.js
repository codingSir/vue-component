import BaseComponent from "@/BaseClass/BaseComponent";
import component from './vue-clamp'
import { v1 as uuid } from 'uuid'

export default class Clamp extends BaseComponent{

    name = 'clamp';

    id = uuid();

    get component(){
        return component
    }
}