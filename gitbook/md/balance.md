# 天平问题

有8个小球 其中有一个小球的质量和其他小球的质量不一样 现在有一个天平要求最短的时间内得到这个质量不一样的小球

## 不太好的实现
取一半小球放在天平的左右两端 然后记录天平的方向 
再取各自一半的小球继续称 

## 好的实现
取两个放在天平比较 然后再取剩下的放在天平比较
``` javascript
const isFunction = variable => typeof variable == 'function';
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLD';
const REJECTED = 'REJECTED';

class MyPromise {
    constructor(handle){
        if(!isFunction(handle)){
            throw new Error('MyPromise must accept a function as parameter');
        }
        this._status = PENDING;
        this._value = undefined;
        this._fulfilledQueues = [];
        this._rejectedQueues = [];
        try{
            handle(this._resolve.bind(this), this._reject.bind(this));

        }catch(e){
            this._reject(e)
        }

    }
    _resolve(val){
        const run = () => {
            if(this._status !== PENDING)return;
            this._status = FULFILLED;
            const runFulfilled = (value) => {
                let cb;
                while(cb = this._fulfilledQueues.shift()){
                    cb(value)
                }
            }
            const runRejected = (err) => {
                let cb;
                while(cb = this._rejectedQueues.shift()){
                    cb(err)
                }
            }
            if(val instanceof MyPromise){
                val.then(val => {
                    this._value = val;
                    runFulfilled(val)
                }, err => {
                    this._value = err;
                    runRejected(err)
                })
            }else{
                this._value = val;
                runFulfilled(val)
            }

           
        }
        setTimeout(run, 0)
    }
    _reject(err){
        if(this._status !== PENDING)return;
        const run = () =>{
            this._status = REJECTED;
            this._value = err;
            let cb;
            while(cb = this._rejectedQueues.shift()){
                cb(err)
            }
        }
        setTimeout(run, 0)
    }
    then(onFulfilled, onRejected){
        const { _value, _status } = this;
        return new MyPromise((onFulfilledNext, onRejectedNext) => {
            let fulfilled = value => {
                try{
                    if(!isFunction(onFulfilled)){
                        onFulfilledNext(value)
                    }else{
                        let res = onFulfilled(value);
                        if(res instanceof MyPromise){
                            res.then(onFulfilledNext, onRejectedNext);
                        }else{
                            onFulfilledNext(res)
                        }
                    }
                }catch(e){
                    onRejectedNext(e)
                }
            }
        })

        let rejected => error => {
            try{
                if(isFunction(onRejected)){
                    onRejectedNext(error)
                }else{
                    let res = onRejected(error);
                    if(res instanceof MyPromise){
                        res.then(onFulfilledNext, onRejectedNext)
                    }else{
                        onFulfilledNext(res)
                    }
                }

            }catch(e){
                onRejectedNext(e)
            }
        }
        switch(_status){
            case PENDING:
                this.fulfilledQueues.push(fulfilled);
                this.rejectedQueues.push(rejected);
                break;
            case FULFILLED:
                fulfilled(_value);
                break;
            case REJECTED:
                rejected(value);
                break;
        }
    }
    catch(onRejected){
        return this.then(undefined, onRejected)
    }
}